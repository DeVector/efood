
import { Dishies } from "../Profile"

import ProductList from "../../components/Product-list"
import Header from "../../components/Header"

import { useGetRestaurantsQuery } from "../../service/api"
import Loader from "../../components/Loader"


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

    if (!catalogo && isLoading) {
        return <Loader />
    }

    return (
        <>
            <Header />
            <ProductList catalogos={catalogo} isLoading={isLoading}/>
        </>
    )
}

export default Home
