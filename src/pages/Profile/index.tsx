import { useParams } from "react-router-dom"

import Banner from "../../components/Banner"
import HeaderProfile from "../../components/HeaderProfile"
import ShopList from "../../components/ShopList"

import { useGetCardapioQuery } from "../../service/api"
import Loader from "../../components/Loader"

type RestauranteParams = {
    id: string
}

const Profile = () => {
    const { id } = useParams() as RestauranteParams

    const {data: restaurantes, isLoading} = useGetCardapioQuery(id)

    if(!restaurantes){
        return <Loader />
    }
    
    return (
        <>
            <HeaderProfile />
            <Banner 
                image={restaurantes.capa} 
                infos={[restaurantes.destacado ? 'Destaque da semana' : '', `${restaurantes.tipo}`]} title="La Dolce Vita Trattoria"/>
            <ShopList
                isLoading={isLoading}
                dishies={restaurantes.cardapio}
            />
        </>
    )
}

export default Profile
