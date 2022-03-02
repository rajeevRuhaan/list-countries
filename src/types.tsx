export type Countries = {
    name: {
        common: string
    }
    languages: {
       [ key :string] : string
     }
    flags: {
        png: string
    } 
    region: string
    population: number
    capital: string[]
}

export type Country = {
    name: {
        common: string
    }
    languages: {
       [ key :string] : string
     }
    flags: {
        png: string
    } 
    region: string
    population: number
    capital: string[]
}