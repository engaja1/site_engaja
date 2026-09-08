export interface TalentosPasswordConfig {
  id: string;
  name: string;
  code: string;
}

/**
 * Senhas cadastradas para acesso ao Banco de Talentos.
 * Cada senha possui uma identificação (id / name) para facilitar a remoção ou edição individual no futuro.
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
 * Valida se a senha de 6 dígitos informada coincide com qualquer uma das senhas ativas.
 */
export function validateTalentosPassword(inputCode: string): boolean {
  const cleanCode = inputCode.trim();
  return TALENTOS_PASSWORDS.some((p) => p.code === cleanCode);
}
