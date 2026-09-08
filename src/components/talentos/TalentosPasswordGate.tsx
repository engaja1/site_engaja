import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Lock, Shield, AlertCircle, KeyRound, Eye, EyeOff } from "lucide-react";
import logoHeader from "@/assets/logo-header.webp";
import { validateTalentosPassword } from "@/config/talentosPasswords";

interface TalentosPasswordGateProps {
  onSuccess: () => void;
}

export function TalentosPasswordGate({ onSuccess }: TalentosPasswordGateProps) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [showPin, setShowPin] = useState(false);

  const handleSubmit = (codeToTest?: string) => {
    const code = codeToTest ?? pin;
    if (code.length < 6) return;

    if (validateTalentosPassword(code)) {
      setError(false);
      sessionStorage.setItem("talentos_authenticated", "true");
      onSuccess();
    } else {
      setError(true);
    }
  };

  const handlePinChange = (value: string) => {
    setPin(value);
    if (error) setError(false);

    // Auto submit on typing 6th digit
    if (value.length === 6) {
      handleSubmit(value);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Acesso Restrito - Banco de Talentos | Engaja Consultoria</title>
      </Helmet>

      <section className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-gradient-to-b from-primary/5 via-background to-background">
        <Card className="w-full max-w-md shadow-xl border-border bg-card overflow-hidden">
          <div className="h-2 bg-primary w-full" />
          
          <CardHeader className="text-center space-y-4 pt-8 pb-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary mb-2 shadow-inner">
              <Lock className="h-8 w-8" />
            </div>
            
            <img src={logoHeader} alt="Engaja Consultoria" className="h-8 object-contain mx-auto" />

            <div>
              <CardTitle className="text-2xl font-bold text-foreground">
                Banco de Talentos
              </CardTitle>
              <CardDescription className="text-sm mt-1 text-muted-foreground">
                Área de acesso restrito. Digite a senha de 6 dígitos para continuar.
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 pb-8 pt-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="space-y-6 flex flex-col items-center"
            >
              <div className="w-full flex flex-col items-center space-y-3">
                <div className="flex items-center justify-between w-full max-w-[280px] px-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1 font-medium">
                    <KeyRound className="h-3.5 w-3.5 text-primary" /> Senha (6 dígitos)
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPin(!showPin)}
                    className="flex items-center gap-1 hover:text-foreground transition-colors font-medium"
                  >
                    {showPin ? (
                      <>
                        <EyeOff className="h-3.5 w-3.5" /> Ocultar
                      </>
                    ) : (
                      <>
                        <Eye className="h-3.5 w-3.5" /> Mostrar
                      </>
                    )}
                  </button>
                </div>

                <InputOTP
                  maxLength={6}
                  value={pin}
                  onChange={handlePinChange}
                  autoFocus
                >
                  <InputOTPGroup className="gap-2">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className={`h-12 w-10 sm:h-14 sm:w-11 text-lg sm:text-xl font-bold rounded-xl border-2 transition-all ${
                          error
                            ? "border-destructive text-destructive bg-destructive/5"
                            : pin.length > index
                            ? "border-primary text-primary bg-primary/5"
                            : "border-input"
                        }`}
                      >
                        {showPin ? pin[index] : pin[index] ? "●" : ""}
                      </InputOTPSlot>
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              {error && (
                <div className="w-full p-3 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-xs font-semibold flex items-center gap-2 animate-shake">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>Senha incorreta! Verifique os 6 dígitos e tente novamente.</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={pin.length < 6}
                className="w-full h-11 bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm shadow-md transition-all disabled:opacity-50"
              >
                <Shield className="h-4 w-4 mr-2" /> Acessar Banco de Talentos
              </Button>
            </form>

            <div className="pt-2 text-center border-t border-border/60">
              <p className="text-xs text-muted-foreground">
                Dúvidas ou problemas de acesso? Entre em contato com a equipe Engaja.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
}
