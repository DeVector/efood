import { useParams } from "react-router-dom"

import Banner from "../../components/Banner"
import HeaderProfile from "../../components/HeaderProfile"
import ShopList from "../../components/ShopList"

import { useEffect, useState } from "react"
import { Restaurante } from "../Home"

export type Dishies = {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
}

const Profile = () => {
    const { tipo } = useParams()

    const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
    const [opcoes, setOpcoes] = useState<Dishies[]>([])
    const [imgBanner, setImgBanner] = useState<string>()

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((res) => setRestaurantes(res))
    }, [])

    useEffect(() => {
        if (tipo && restaurantes.length > 0) {
            const restaurantesFiltrados = restaurantes.find(
                (restaurante) => restaurante.tipo.toLowerCase() === tipo.toLocaleLowerCase()
            )
            if (restaurantesFiltrados) {
                setImgBanner(restaurantesFiltrados.capa || '')
                const pratosFormatados = restaurantesFiltrados.cardapio.map((prato) => ({
                    id: prato.id,
                    nome: prato.nome,
                    descricao: prato.descricao,
                    foto: prato.foto,
                    preco: prato.preco,
                    porcao: prato.porcao
                }))
                setOpcoes(pratosFormatados)
            } else {
                setImgBanner('')
                setOpcoes([])
            }
        }
    }, [tipo, restaurantes])

    if(!restaurantes && !imgBanner){
        return (
            <h1>Carregando</h1>
        )
    }
    
    return (
        <>
            <HeaderProfile />
            <Banner 
                image={imgBanner} 
                infos={[`${tipo}`]} title="La Dolce Vita Trattoria"/>
            <ShopList 
                dishies={opcoes}
            />
        </>
    )
}

export default Profile
