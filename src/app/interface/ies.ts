import { instituicoes } from "./instituicoes"

export interface ies {
  id: number,
  nome: string,
  descricao: string,
  iesLogo: string,
  logo: string,
  instituicoes: instituicoes[]
}
