export type IBreed = {
    id: string,
    name: string,
    url: string,
    temperament: string, 
    origin: string, 
    weight: string, 
    life_span: string,
}

export type IApiBreed = IBreed & {
    url?: string,
    image: {
        url: string
    },
    weight: {
        metric: string
    }, 
}