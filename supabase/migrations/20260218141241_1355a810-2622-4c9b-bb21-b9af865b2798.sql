
-- 1. Remover a política atual
DROP POLICY IF EXISTS "Users can only view their own profile" ON profiles;

-- 2. Criar a nova política que exige autenticação E propriedade
CREATE POLICY "Users can only view their own profile"
  ON profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);
