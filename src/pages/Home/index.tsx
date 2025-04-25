import ProductList from "../../components/Product-list"
import Header from "../../components/Header"

import { useGetRestaurantsQuery } from "../../service/api"
import Loader from "../../components/Loader"

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
