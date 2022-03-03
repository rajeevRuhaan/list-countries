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
        common: string,
        nativeName: {[ key :string]:{common: string}}
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
    borders: string[]
    timezones:string[]
    currencies:{[ key :string]: {name: string}}
}

export type Error = {
   error: boolean | string
    
}