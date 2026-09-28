export type TalentosTenant = "engaja" | "kohler";

export interface TalentosPasswordConfig {
  id: TalentosTenant;
  name: string;
  code: string;
}

/**
 * Senhas cadastradas para acesso ao Banco de Talentos.
 * Cada senha possui uma identificação (id / name) para controle de acesso por tenant.
 */
export const TALENTOS_PASSWORDS: TalentosPasswordConfig[] = [
  {
    id: "engaja",
    name: "Engaja",
    code: "271279",
  },
  {
    id: "kohler",
    name: "Kohler",
    code: "654321", // Senha da Kohler (6 dígitos)
  },
];

/**
 * Retorna a configuração de autenticação associada à senha informada, ou null se for inválida.
 */
export function getTalentosAuth(inputCode: string): TalentosPasswordConfig | null {
  const cleanCode = inputCode.trim();
  return TALENTOS_PASSWORDS.find((p) => p.code === cleanCode) || null;
}

/**
 * Valida se a senha de 6 dígitos informada coincide com qualquer uma das senhas ativas.
 */
export function validateTalentosPassword(inputCode: string): boolean {
  return getTalentosAuth(inputCode) !== null;
}
