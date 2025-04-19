import { useEffect, useState } from "react"

import ProductList from "../../components/Product-list"
import Header from "../../components/Header"
import { Dishies } from "../Profile"


export type Restaurante = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Dishies []
}

const Home = () => {
    const [catalogo, setCatalogo] = useState<Restaurante[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setCatalogo(res))
    }, [])
    return (
        <>
            <Header />
            <ProductList catalogos={catalogo}/>
        </>
    )
}

export default Home
