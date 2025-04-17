import ProductList from "../../components/Product-list"
import Dish from "../../models/Dish"

import imgDishSushi from '../../assets/images/img_sushi.png'
import imgDishEspa from '../../assets/images/img_espaguete.png'

const dishiesInfo: Dish[] =[
    {
        id: 1,
        title: 'Hioki Sushi',
        rate: 4.9,
        describe: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        image: imgDishSushi,
        infos: ['Destaque da semana', 'Japonesa']
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        rate: 4.6,
        describe: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: imgDishEspa,
        infos: ['Italiana']
    },
    {
        id: 3,
        title: 'Hioki Sushi',
        rate: 4.0,
        describe: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        image: imgDishSushi,
        infos: ['Japonesa']
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        rate: 3.8,
        describe: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: imgDishEspa,
        infos: ['Italiana']
    },
    {
        id: 5,
        title: 'Hioki Sushi',
        rate: 5,
        describe: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        image: imgDishSushi,
        infos: ['Destaque da semana', 'Japonesa']
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        rate: 5,
        describe: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        image: imgDishEspa,
        infos: ['Italiana']
    }
]

const Home = () => {
    return (
        <>
            <ProductList dishies={dishiesInfo}/>
        </>
    )
}

export default Home
