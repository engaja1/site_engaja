import { useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Upload, X, ImageIcon, Loader2 } from "lucide-react";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label: string;
  hint?: string;
  folder?: string;
  slug?: string;
}

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE_MB = 5;

export function ImageUpload({ value, onChange, label, hint, folder = "covers", slug }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File) {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError("Formato não suportado. Use JPG, PNG ou WebP.");
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`Arquivo muito grande. Máximo ${MAX_SIZE_MB}MB.`);
      return;
    }

    setError(null);
    setUploading(true);

    try {
      const ext = file.name.split(".").pop() || "jpg";
      const timestamp = Date.now();
      const baseName = slug || file.name.replace(/\.[^.]+$/, "").replace(/[^a-z0-9-]/gi, "-").toLowerCase();
      const filePath = `${folder}/${baseName}-${timestamp}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("blog-images")
        .getPublicUrl(filePath);

      onChange(urlData.publicUrl);
    } catch (err: any) {
      setError(err.message || "Erro ao fazer upload.");
    } finally {
      setUploading(false);
    }
  }

  function handleRemove() {
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="space-y-2">
      <Label>{label}</Label>

      {value ? (
        <div className="relative rounded-lg border bg-muted/30 overflow-hidden">
          <img
            src={value}
            alt="Preview"
            className="w-full max-h-48 object-cover"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 h-7 w-7"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="w-full flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 py-8 px-4 text-muted-foreground hover:border-primary/50 hover:bg-muted/40 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? (
            <Loader2 className="h-8 w-8 animate-spin" />
          ) : (
            <>
              <ImageIcon className="h-8 w-8" />
              <span className="text-sm font-medium">Clique para selecionar uma imagem</span>
              <span className="text-xs">JPG, PNG ou WebP • Máx {MAX_SIZE_MB}MB</span>
            </>
          )}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept=".jpg,.jpeg,.png,.webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
        }}
      />

      {uploading && <Progress value={undefined} className="h-1" />}
      {error && <p className="text-xs text-destructive">{error}</p>}
      {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
