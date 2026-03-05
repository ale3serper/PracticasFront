

type CountryNameTranslation = {
  official: string
  common: string
}

type Currency = {
  name: string
  symbol: string
}

export type Country = {
  flags: {
    png:string;
    svg:string;
    alt:string;
  }

  cca3:string

  name: {
    common: string
    official: string
    nativeName: Record<string, CountryNameTranslation>
  }

  currencies: Record<string, Currency>

  languages: Record<string, string>

  capital: string[]

  subregion: string

  population: number
}