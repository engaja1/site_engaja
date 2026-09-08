import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import {
  AREAS_LIST,
  MOCK_CANDIDATES,
  Candidate,
} from "@/data/talentosData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Factory,
  Boxes,
  Truck,
  Wrench,
  Zap,
  ShieldCheck,
  HardHat,
  FileText,
  DollarSign,
  Calculator,
  Users,
  ShoppingCart,
  TrendingUp,
  PhoneCall,
  Megaphone,
  Laptop,
  Cpu,
  Award,
  Sparkles,
  Wheat,
  Search,
  MapPin,
  Briefcase,
  Calendar,
  Car,
  Clock,
  MessageSquare,
  Mail,
  CheckCircle2,
  XCircle,
  Building2,
  ChevronRight,
  Filter,
  UserCheck,
  Target,
  SlidersHorizontal,
  LogOut,
} from "lucide-react";
import { TalentosPasswordGate } from "@/components/talentos/TalentosPasswordGate";

// Icon mapping helper
const ICON_MAP: Record<string, any> = {
  Factory,
  Boxes,
  Truck,
  Wrench,
  Zap,
  ShieldCheck,
  HardHat,
  FileText,
  DollarSign,
  Calculator,
  Users,
  ShoppingCart,
  TrendingUp,
  PhoneCall,
  Megaphone,
  Laptop,
  Cpu,
  Award,
  Sparkles,
  Wheat,
};

// Helper function to check if candidate matches an area by Experience
const candidateMatchesExperience = (cand: Candidate, areaName: string): boolean => {
  if (cand.areas_ultima_experiencia?.includes(areaName)) return true;
  
  // Keyword check in past roles & activities
  const areaKeywords = areaName.toLowerCase().split("/").map(k => k.trim());
  const searchText = [
    cand.ultimo_cargo,
    cand.atividades_ultima_experiencia,
    cand.ferramentas_ultima_experiencia,
    cand.conhecimentos,
    ...(cand.experiencias_anteriores?.map(e => `${e.cargo} ${e.atividades}`) || [])
  ].filter(Boolean).join(" ").toLowerCase();

  return areaKeywords.some(kw => kw.length > 3 && searchText.includes(kw));
};

// Helper function to check if candidate matches an area by Interest
const candidateMatchesInterest = (cand: Candidate, areaName: string): boolean => {
  return (
    cand.area_principal_interesse === areaName ||
    (cand.areas_adicionais_interesse?.includes(areaName) ?? false)
  );
};

export default function Talentos() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem("talentos_authenticated") === "true";
  });

  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  // Filtering options: default filter mode is "experiencia"
  const [filterMode, setFilterMode] = useState<"experiencia" | "interesse" | "ambos">("experiencia");
  const [tempoExp, setTempoExp] = useState<string>("todos");
  const [tipoTrabalho, setTipoTrabalho] = useState<string>("todos");

  const handleLogout = () => {
    sessionStorage.removeItem("talentos_authenticated");
    setIsAuthenticated(false);
  };

  // Calculate candidate count per area dynamically based on filterMode
  const candidateCountsByArea = useMemo(() => {
    const counts: Record<string, number> = {};
    MOCK_CANDIDATES.forEach((cand) => {
      AREAS_LIST.forEach((area) => {
        let matches = false;
        if (filterMode === "experiencia") {
          matches = candidateMatchesExperience(cand, area.name);
        } else if (filterMode === "interesse") {
          matches = candidateMatchesInterest(cand, area.name);
        } else {
          matches = candidateMatchesExperience(cand, area.name) || candidateMatchesInterest(cand, area.name);
        }
        if (matches) {
          counts[area.name] = (counts[area.name] || 0) + 1;
        }
      });
    });
    return counts;
  }, [filterMode]);

  // Filter candidates based on selected area, filterMode, niche filters, and search query
  const filteredCandidates = useMemo(() => {
    return MOCK_CANDIDATES.filter((cand) => {
      // 1. Filter by Area according to active filterMode
      if (selectedArea) {
        let matchesArea = false;
        if (filterMode === "experiencia") {
          matchesArea = candidateMatchesExperience(cand, selectedArea);
        } else if (filterMode === "interesse") {
          matchesArea = candidateMatchesInterest(cand, selectedArea);
        } else {
          matchesArea = candidateMatchesExperience(cand, selectedArea) || candidateMatchesInterest(cand, selectedArea);
        }
        if (!matchesArea) return false;
      }

      // 2. Filter by Experience Duration (tempo_ultima_funcao)
      if (tempoExp !== "todos") {
        if (!cand.tempo_ultima_funcao) return false;
        if (tempoExp === "1_2" && !cand.tempo_ultima_funcao.includes("1 a 2")) return false;
        if (tempoExp === "2_5" && !cand.tempo_ultima_funcao.includes("2 a 5")) return false;
        if (tempoExp === "5_10" && !cand.tempo_ultima_funcao.includes("5 a 10")) return false;
        if (tempoExp === "mais_10" && !cand.tempo_ultima_funcao.includes("Mais de 10")) return false;
      }

      // 3. Filter by Work Type (tipo_trabalho)
      if (tipoTrabalho !== "todos") {
        if (cand.tipo_trabalho !== tipoTrabalho) return false;
      }

      // 4. Filter by Search Query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = cand.nome_completo.toLowerCase().includes(query);
        const matchesCity = cand.cidade.toLowerCase().includes(query);
        const matchesRole = cand.ultimo_cargo?.toLowerCase().includes(query) || false;
        const matchesFunctions = cand.funcoes_interesse.some((f) =>
          f.toLowerCase().includes(query)
        );
        const matchesTools = cand.ferramentas_ultima_experiencia?.toLowerCase().includes(query) || false;
        const matchesKnowledge = cand.conhecimentos?.toLowerCase().includes(query) || false;

        if (!matchesName && !matchesCity && !matchesRole && !matchesFunctions && !matchesTools && !matchesKnowledge) {
          return false;
        }
      }

      return true;
    });
  }, [selectedArea, filterMode, tempoExp, tipoTrabalho, searchQuery]);

  if (!isAuthenticated) {
    return <TalentosPasswordGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <Layout>
      <Helmet>
        <title>Banco de Talentos | Engaja Consultoria</title>
        <meta
          name="description"
          value="Explore profissionais qualificados e selecionados no Banco de Talentos Engaja."
        />
      </Helmet>

      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-12 lg:py-16 border-b border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 text-sm font-semibold px-4 py-1 rounded-full border border-primary/30">
                Banco de Talentos Engaja
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="text-xs text-muted-foreground hover:text-destructive gap-1 px-2 py-1 h-auto font-medium"
                title="Bloquear/Sair da visualização"
              >
                <LogOut className="h-3.5 w-3.5" /> Bloquear
              </Button>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
              Conectando Empresas aos Melhores Profissionais
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Consulte nosso banco de dados por áreas técnicas e corporativas. Filtre por <strong className="text-foreground">experiência prática</strong> ou <strong className="text-foreground">área de interesse</strong> para encontrar o candidato ideal.
            </p>

            {/* Global Search Bar */}
            <div className="relative max-w-2xl mx-auto pt-4">
              <div className="relative flex items-center">
                <Search className="absolute left-4 h-5 w-5 text-muted-foreground pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Pesquise por nome, cargo, cidade, software ou habilidade (ex: Andradas, Operador, SAP)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-14 text-base rounded-2xl bg-card border-border shadow-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 text-xs font-semibold text-muted-foreground hover:text-foreground bg-muted px-2 py-1 rounded-md"
                  >
                    Limpar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 bg-background min-h-screen">
        <div className="container mx-auto px-4 max-w-7xl space-y-8">
          
          {/* Main Filter Control Card (Experiência x Interesse x Nichos) */}
          <div className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
                  Critério de Busca
                </span>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5 text-primary" /> Modo de Filtragem por Área
                </h3>
              </div>

              {/* Filter Mode Selector Buttons */}
              <div className="inline-flex flex-wrap p-1 rounded-xl bg-muted border border-border gap-1">
                <button
                  onClick={() => setFilterMode("experiencia")}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    filterMode === "experiencia"
                      ? "bg-primary text-primary-foreground shadow-md font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <UserCheck className="h-4 w-4" /> Por Experiência (Padrão)
                </button>
                <button
                  onClick={() => setFilterMode("interesse")}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    filterMode === "interesse"
                      ? "bg-primary text-primary-foreground shadow-md font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Target className="h-4 w-4" /> Por Área de Interesse
                </button>
                <button
                  onClick={() => setFilterMode("ambos")}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    filterMode === "ambos"
                      ? "bg-primary text-primary-foreground shadow-md font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Users className="h-4 w-4" /> Experiência ou Interesse
                </button>
              </div>
            </div>

            {/* Niche Dropdown Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-1">
              <div>
                <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                  Tempo de Experiência na Função
                </label>
                <Select value={tempoExp} onValueChange={setTempoExp}>
                  <SelectTrigger className="bg-background border-border text-xs sm:text-sm">
                    <SelectValue placeholder="Todas as vivências" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os tempos de experiência</SelectItem>
                    <SelectItem value="1_2">1 a 2 anos</SelectItem>
                    <SelectItem value="2_5">2 a 5 anos</SelectItem>
                    <SelectItem value="5_10">5 a 10 anos</SelectItem>
                    <SelectItem value="mais_10">Mais de 10 anos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground block mb-1.5">
                  Modelo de Trabalho Pretendido
                </label>
                <Select value={tipoTrabalho} onValueChange={setTipoTrabalho}>
                  <SelectTrigger className="bg-background border-border text-xs sm:text-sm">
                    <SelectValue placeholder="Todos os modelos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os modelos</SelectItem>
                    <SelectItem value="Presencial">Presencial</SelectItem>
                    <SelectItem value="Híbrido">Híbrido</SelectItem>
                    <SelectItem value="Remoto">Remoto</SelectItem>
                    <SelectItem value="Indiferente">Indiferente</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                {(selectedArea || searchQuery || tempoExp !== "todos" || tipoTrabalho !== "todos" || filterMode !== "experiencia") && (
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedArea(null);
                      setSearchQuery("");
                      setTempoExp("todos");
                      setTipoTrabalho("todos");
                      setFilterMode("experiencia");
                    }}
                    className="w-full text-xs border-dashed border-border text-muted-foreground hover:text-foreground"
                  >
                    Resetar Filtros
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Section Title & Area Summary Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-border">
            <div>
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Filter className="h-5 w-5 text-primary" /> Sumário de Áreas Profissionais
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Exibindo contagem baseada no modo: <strong className="text-foreground">{filterMode === "experiencia" ? "Experiência Prática" : filterMode === "interesse" ? "Área de Interesse" : "Experiência ou Interesse"}</strong>.
              </p>
            </div>
            {selectedArea && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedArea(null)}
                className="self-start md:self-auto border-primary/40 text-primary hover:bg-primary/10"
              >
                Limpar Área Selecionada
              </Button>
            )}
          </div>

          {/* Area Selector Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {/* "All Areas" Card */}
            <button
              onClick={() => setSelectedArea(null)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-28 group relative overflow-hidden ${
                selectedArea === null
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 ring-2 ring-primary"
                  : "bg-card text-foreground border-border hover:border-primary/50 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <Users className={`h-6 w-6 ${selectedArea === null ? "text-primary-foreground" : "text-primary group-hover:scale-110"} transition-transform`} />
                <Badge
                  variant={selectedArea === null ? "secondary" : "outline"}
                  className="text-xs font-bold"
                >
                  {MOCK_CANDIDATES.length}
                </Badge>
              </div>
              <span className="font-semibold text-sm line-clamp-2">Todas as Áreas</span>
            </button>

            {/* 20 Standard Form Areas */}
            {AREAS_LIST.map((area) => {
              const IconComp = ICON_MAP[area.iconName] || Briefcase;
              const isSelected = selectedArea === area.name;
              const count = candidateCountsByArea[area.name] || 0;

              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(isSelected ? null : area.name)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between h-28 group relative overflow-hidden ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 ring-2 ring-primary"
                      : "bg-card text-foreground border-border hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <IconComp className={`h-5 w-5 ${isSelected ? "text-primary-foreground" : "text-primary group-hover:scale-110"} transition-transform`} />
                    <Badge
                      variant={isSelected ? "secondary" : "outline"}
                      className={`text-xs font-bold ${count > 0 ? "bg-primary/10 text-primary border-primary/30" : "opacity-50"}`}
                    >
                      {count}
                    </Badge>
                  </div>
                  <span className="font-medium text-xs sm:text-sm line-clamp-2 leading-tight">
                    {area.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Filters Bar */}
          <div className="flex flex-wrap items-center justify-between bg-muted/50 p-4 rounded-xl border border-border gap-3">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-bold text-foreground">Resultados:</span>
              <Badge className="bg-primary text-primary-foreground font-bold text-xs px-3 py-0.5">
                {filteredCandidates.length} {filteredCandidates.length === 1 ? "candidato" : "candidatos"}
              </Badge>
              
              <Badge variant="secondary" className="bg-muted text-foreground border border-border gap-1">
                Filtragem: {filterMode === "experiencia" ? "Por Experiência (Padrão)" : filterMode === "interesse" ? "Por Área de Interesse" : "Experiência ou Interesse"}
              </Badge>

              {selectedArea && (
                <Badge variant="outline" className="bg-background border-primary/40 text-primary font-semibold gap-1">
                  Área: {selectedArea}
                </Badge>
              )}

              {tempoExp !== "todos" && (
                <Badge variant="outline" className="bg-background border-border gap-1">
                  Exp: {tempoExp === "1_2" ? "1-2 anos" : tempoExp === "2_5" ? "2-5 anos" : tempoExp === "5_10" ? "5-10 anos" : "+10 anos"}
                </Badge>
              )}

              {tipoTrabalho !== "todos" && (
                <Badge variant="outline" className="bg-background border-border gap-1">
                  Modelo: {tipoTrabalho}
                </Badge>
              )}

              {searchQuery && (
                <Badge variant="outline" className="bg-background border-muted-foreground/40 gap-1">
                  Busca: "{searchQuery}"
                </Badge>
              )}
            </div>

            {(selectedArea || searchQuery || tempoExp !== "todos" || tipoTrabalho !== "todos" || filterMode !== "experiencia") && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSelectedArea(null);
                  setSearchQuery("");
                  setTempoExp("todos");
                  setTipoTrabalho("todos");
                  setFilterMode("experiencia");
                }}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Limpar todos os filtros
              </Button>
            )}
          </div>

          {/* Candidates List / Grid */}
          {filteredCandidates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCandidates.map((candidate) => (
                <Card
                  key={candidate.id}
                  className="group hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden bg-card border-border"
                >
                  <CardHeader className="pb-3 border-b border-border/50 bg-muted/20">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 text-primary font-extrabold flex items-center justify-center text-lg border border-primary/20 shrink-0">
                          {candidate.nome_completo
                            .split(" ")
                            .slice(0, 2)
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {candidate.nome_completo}
                          </CardTitle>
                          <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                            <MapPin className="h-3.5 w-3.5 text-primary" />
                            {candidate.cidade} - {candidate.estado} • {candidate.idade} anos
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-4 space-y-4 flex-1">
                    {/* Primary Interest Area */}
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                        Área de Interesse Principal
                      </span>
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 text-xs font-semibold">
                        {candidate.area_principal_interesse}
                      </Badge>
                    </div>

                    {/* Areas of Practical Experience */}
                    {candidate.areas_ultima_experiencia && candidate.areas_ultima_experiencia.length > 0 && (
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1 flex items-center gap-1">
                          <UserCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> Experiência Prática
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {candidate.areas_ultima_experiencia.map((expArea, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 text-[11px]">
                              {expArea}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Role / Last Role */}
                    {candidate.ultimo_cargo && (
                      <div>
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                          Último Cargo / Função
                        </span>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                          <Briefcase className="h-4 w-4 text-muted-foreground" />
                          {candidate.ultimo_cargo} ({candidate.tempo_ultima_funcao})
                        </p>
                      </div>
                    )}

                    {/* Functions of Interest Tags */}
                    <div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                        Funções Alvo
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {candidate.funcoes_interesse.slice(0, 3).map((func, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="text-[11px] bg-muted text-foreground font-normal"
                          >
                            {func}
                          </Badge>
                        ))}
                        {candidate.funcoes_interesse.length > 3 && (
                          <Badge variant="outline" className="text-[10px]">
                            +{candidate.funcoes_interesse.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Badges Info (Work Type, CNH, Vehicle) */}
                    <div className="pt-2 flex flex-wrap gap-2 text-xs border-t border-border/50">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-muted/60 text-muted-foreground">
                        <Clock className="h-3 w-3 text-primary" /> {candidate.tipo_trabalho}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-muted/60 text-muted-foreground">
                        <Car className="h-3 w-3 text-primary" /> CNH: {candidate.cnh}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-muted/60 text-muted-foreground">
                        {candidate.veiculo_proprio === "Sim" ? (
                          <>
                            <CheckCircle2 className="h-3 w-3 text-emerald-500" /> Veículo Próprio
                          </>
                        ) : (
                          <>
                            <XCircle className="h-3 w-3 text-muted-foreground" /> Sem Veículo
                          </>
                        )}
                      </span>
                    </div>
                  </CardContent>

                  {/* Card Footer Button */}
                  <div className="p-4 bg-muted/30 border-t border-border/50">
                    <Button
                      onClick={() => setSelectedCandidate(candidate)}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group/btn"
                    >
                      Ver Currículo Completo
                      <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 bg-card rounded-2xl border border-border p-8 max-w-xl mx-auto space-y-4">
              <div className="h-16 w-16 bg-muted text-muted-foreground rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Nenhum candidato encontrado
              </h3>
              <p className="text-sm text-muted-foreground">
                Não encontramos profissionais correspondentes ao filtro de <strong className="text-foreground">{filterMode === "experiencia" ? "experiência" : "área de interesse"}</strong> selecionado. Tente pesquisar por outro termo ou alterar o modo de filtragem.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedArea(null);
                  setSearchQuery("");
                  setTempoExp("todos");
                  setTipoTrabalho("todos");
                  setFilterMode("experiencia");
                }}
                className="border-primary text-primary hover:bg-primary/10"
              >
                Limpar Filtros de Pesquisa
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CANDIDATE CURRICULUM MODAL DIALOG */}
      <Dialog
        open={!!selectedCandidate}
        onOpenChange={(open) => !open && setSelectedCandidate(null)}
      >
        {selectedCandidate && (
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 rounded-2xl">
            <DialogHeader className="p-6 pb-4 bg-gradient-to-r from-primary/10 via-background to-background border-b border-border">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground font-black text-2xl flex items-center justify-center shadow-lg shrink-0">
                    {selectedCandidate.nome_completo
                      .split(" ")
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-extrabold text-foreground">
                      {selectedCandidate.nome_completo}
                    </DialogTitle>
                    <DialogDescription className="text-sm font-medium text-muted-foreground flex items-center gap-2 mt-1">
                      <MapPin className="h-4 w-4 text-primary" />
                      {selectedCandidate.cidade} - {selectedCandidate.estado} • {selectedCandidate.idade} anos
                    </DialogDescription>
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Email */}
              <div className="flex flex-wrap gap-2 pt-4">
                <Button
                  asChild
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold gap-2"
                >
                  <a
                    href={`https://wa.me/${selectedCandidate.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="h-4 w-4" /> Entrar em Contato (WhatsApp)
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-primary/40 text-primary hover:bg-primary/10 font-semibold gap-2"
                >
                  <a href={`mailto:${selectedCandidate.email}`}>
                    <Mail className="h-4 w-4" /> E-mail
                  </a>
                </Button>
              </div>
            </DialogHeader>

            <div className="p-6 space-y-6 text-foreground">
              {/* 1. DADOS PESSOAIS E PREFERÊNCIAS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 rounded-xl bg-muted/30 border border-border">
                <div>
                  <span className="text-xs text-muted-foreground font-semibold block">CNH</span>
                  <span className="text-sm font-bold">{selectedCandidate.cnh} {selectedCandidate.cnh_outra ? `(${selectedCandidate.cnh_outra})` : ''}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-semibold block">Veículo Próprio</span>
                  <span className="text-sm font-bold">{selectedCandidate.veiculo_proprio}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-semibold block">Modelo de Trabalho</span>
                  <span className="text-sm font-bold">{selectedCandidate.tipo_trabalho}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-semibold block">Disponibilidade de Turnos</span>
                  <span className="text-sm font-bold">{selectedCandidate.disponibilidade_turnos}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-semibold block">Telefone / WhatsApp</span>
                  <span className="text-sm font-bold">{selectedCandidate.whatsapp}</span>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground font-semibold block">E-mail</span>
                  <span className="text-sm font-bold truncate block">{selectedCandidate.email}</span>
                </div>
              </div>

              {/* 2. OBJETIVO PROFISSIONAL E ÁREAS */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                  <Briefcase className="h-5 w-5 text-primary" /> Objetivo Profissional & Áreas
                </h4>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-xs text-muted-foreground font-semibold block mb-1">
                      Área Principal de Interesse:
                    </span>
                    <Badge className="bg-primary text-primary-foreground font-semibold text-sm px-3 py-1">
                      {selectedCandidate.area_principal_interesse}
                    </Badge>
                  </div>

                  {selectedCandidate.areas_adicionais_interesse && selectedCandidate.areas_adicionais_interesse.length > 0 && (
                    <div>
                      <span className="text-xs text-muted-foreground font-semibold block mb-1">
                        Outras Áreas de Interesse:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedCandidate.areas_adicionais_interesse.map((area, idx) => (
                          <Badge key={idx} variant="outline" className="bg-background text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <span className="text-xs text-muted-foreground font-semibold block mb-1">
                      Funções / Cargos Desejados:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCandidate.funcoes_interesse.map((func, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-muted text-foreground text-xs font-medium">
                          {func}
                        </Badge>
                      ))}
                      {selectedCandidate.funcao_interesse_outro && (
                        <Badge variant="secondary" className="bg-muted text-foreground text-xs font-medium">
                          Outro: {selectedCandidate.funcao_interesse_outro}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. ÚLTIMA EXPERIÊNCIA PROFISSIONAL */}
              {selectedCandidate.ultima_empresa && (
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                    <Building2 className="h-5 w-5 text-primary" /> Última Experiência Profissional
                  </h4>

                  <div className="p-4 rounded-xl border border-border bg-card space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <h5 className="font-bold text-lg text-foreground">
                          {selectedCandidate.ultimo_cargo}
                        </h5>
                        <p className="text-sm font-semibold text-primary">
                          {selectedCandidate.ultima_empresa}
                        </p>
                      </div>
                      <Badge variant="outline" className="self-start sm:self-auto text-xs">
                        Tempo: {selectedCandidate.tempo_ultima_funcao}
                      </Badge>
                    </div>

                    {selectedCandidate.areas_ultima_experiencia && selectedCandidate.areas_ultima_experiencia.length > 0 && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold block mb-1">
                          Áreas da Experiência:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {selectedCandidate.areas_ultima_experiencia.map((a, i) => (
                            <Badge key={i} className="bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20 text-xs">
                              {a}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedCandidate.atividades_ultima_experiencia && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold block mb-1">
                          Principais Atividades Realizadas:
                        </span>
                        <p className="text-sm text-foreground/90 leading-relaxed bg-muted/40 p-3 rounded-lg">
                          {selectedCandidate.atividades_ultima_experiencia}
                        </p>
                      </div>
                    )}

                    {selectedCandidate.ferramentas_ultima_experiencia && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold block mb-1">
                          Máquinas, Ferramentas, Equipamentos ou Sistemas Utilizados:
                        </span>
                        <p className="text-sm font-medium text-foreground bg-primary/5 border border-primary/10 p-3 rounded-lg">
                          {selectedCandidate.ferramentas_ultima_experiencia}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 4. EXPERIÊNCIAS ANTERIORES */}
              {selectedCandidate.experiencias_anteriores && selectedCandidate.experiencias_anteriores.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                    <Calendar className="h-5 w-5 text-primary" /> Outras Experiências Anteriores
                  </h4>

                  <div className="space-y-3">
                    {selectedCandidate.experiencias_anteriores.map((exp, idx) => (
                      <div key={idx} className="p-4 rounded-xl border border-border bg-card space-y-2">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h6 className="font-bold text-base text-foreground">{exp.cargo}</h6>
                            <p className="text-sm font-medium text-primary">{exp.empresa}</p>
                          </div>
                          {exp.periodo && (
                            <Badge variant="outline" className="text-xs">
                              {exp.periodo}
                            </Badge>
                          )}
                        </div>
                        {exp.atividades && (
                          <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                            {exp.atividades}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. FORMAÇÃO E CURSOS */}
              {(selectedCandidate.escolaridade || selectedCandidate.curso_formacao || selectedCandidate.cursos_qualificacoes) && (
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                    <Award className="h-5 w-5 text-primary" /> Formação Acadêmica & Qualificações
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl border border-border bg-card">
                    {selectedCandidate.escolaridade && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold block">Escolaridade</span>
                        <span className="text-sm font-bold text-foreground">{selectedCandidate.escolaridade}</span>
                      </div>
                    )}
                    {selectedCandidate.curso_formacao && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold block">Curso / Formação</span>
                        <span className="text-sm font-bold text-foreground">{selectedCandidate.curso_formacao} {selectedCandidate.instituicao_ensino ? `(${selectedCandidate.instituicao_ensino})` : ''}</span>
                      </div>
                    )}
                    {selectedCandidate.cursos_qualificacoes && (
                      <div className="sm:col-span-2 pt-2 border-t border-border/50">
                        <span className="text-xs text-muted-foreground font-semibold block mb-1">Cursos & Certificações</span>
                        <p className="text-xs font-medium text-foreground bg-muted/50 p-2.5 rounded-lg whitespace-pre-line">
                          {selectedCandidate.cursos_qualificacoes}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 6. CONHECIMENTOS & MÁQUINAS */}
              {(selectedCandidate.conhecimentos || selectedCandidate.maquinas_equipamentos || selectedCandidate.caracteristicas) && (
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-foreground flex items-center gap-2 border-b border-border pb-2">
                    <Sparkles className="h-5 w-5 text-primary" /> Conhecimentos & Competências
                  </h4>

                  <div className="space-y-3 p-4 rounded-xl border border-border bg-card">
                    {selectedCandidate.conhecimentos && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold block mb-1">Conhecimentos Profissionais:</span>
                        <p className="text-xs font-semibold text-foreground bg-primary/5 border border-primary/10 p-2.5 rounded-lg">
                          {selectedCandidate.conhecimentos}
                        </p>
                      </div>
                    )}
                    {selectedCandidate.maquinas_equipamentos && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold block mb-1">Máquinas & Equipamentos que Operam:</span>
                        <p className="text-xs font-semibold text-foreground bg-muted/60 p-2.5 rounded-lg">
                          {selectedCandidate.maquinas_equipamentos}
                        </p>
                      </div>
                    )}
                    {selectedCandidate.caracteristicas && (
                      <div>
                        <span className="text-xs text-muted-foreground font-semibold block mb-1">Características Pessoais Declaradas:</span>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {selectedCandidate.caracteristicas}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* 7. INFORMAÇÕES DE CONTRATAÇÃO & DISPONIBILIDADE */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs">
                {selectedCandidate.pretensao_salarial && (
                  <div>
                    <span className="text-muted-foreground font-semibold block">Pretensão Salarial</span>
                    <span className="font-extrabold text-sm text-primary">{selectedCandidate.pretensao_salarial}</span>
                  </div>
                )}
                {selectedCandidate.inicio_imediato && (
                  <div>
                    <span className="text-muted-foreground font-semibold block">Início Imediato</span>
                    <span className="font-bold text-sm text-foreground">{selectedCandidate.inicio_imediato}</span>
                  </div>
                )}
                {selectedCandidate.regiao_interesse && (
                  <div>
                    <span className="text-muted-foreground font-semibold block">Cidades de Interesse</span>
                    <span className="font-bold text-xs text-foreground truncate block">{selectedCandidate.regiao_interesse}</span>
                  </div>
                )}
              </div>

              {/* Footer Note */}
              <div className="pt-4 border-t border-border text-center text-xs text-muted-foreground">
                Perfil cadastrado no Banco de Talentos Engaja Consultoria em {selectedCandidate.submittedAt || 'recente'}.
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </Layout>
  );
}
