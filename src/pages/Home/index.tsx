
import { Dishies } from "../Profile"

import ProductList from "../../components/Product-list"
import Header from "../../components/Header"

import { useGetRestaurantsQuery } from "../../service/api"


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
    const { data: catalogo, isLoading } = useGetRestaurantsQuery()

    if (!catalogo) {
        return <h3>Carregando</h3>
    }

    return (
        <>
            <Header />
            <ProductList catalogos={catalogo}/>
        </>
    )
}

export default Home
