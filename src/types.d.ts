declare type Restaurante = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Dishies []
}

declare type Dishies = {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
}