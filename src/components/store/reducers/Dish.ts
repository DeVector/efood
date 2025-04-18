import { createSlice } from "@reduxjs/toolkit"
import Dish from "../../../models/Dish"

import imgDishSushi from '../../../assets/images/img_sushi.png'
import imgDishEspa from '../../../assets/images/img_espaguete.png'
import imgDishPizza from '../../../assets/images/img_pizza.png'


type DishiesState = {
    itens: Dish[]
}

const initialState: DishiesState = {
    itens: [
        {
            id: 1,
            title: 'Pizza Marguerita',
            rate: 4.9,
            describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite...',
            image: imgDishPizza,
            infos: ['Destaque da semana', 'Italiana']
        },
        {
            id: 2,
            title: 'La Dolce Vita Trattoria',
            rate: 4.6,
            describe: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis...',
            image: imgDishEspa,
            infos: ['Italiana']
        },
        {
            id: 3,
            title: 'Hioki Sushi',
            rate: 4.0,
            describe: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis...',
            image: imgDishSushi,
            infos: ['Japonesa']
        },
        {
            id: 4,
            title: 'La Dolce Vita Trattoria',
            rate: 3.8,
            describe: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis...',
            image: imgDishEspa,
            infos: ['Italiana']
        },
        {
            id: 5,
            title: 'Pizza Marguerita',
            rate: 5,
            describe: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite...',
            image: imgDishPizza,
            infos: ['Italiana']
        },
        {
            id: 6,
            title: 'Hioki Sushi',
            rate: 5,
            describe: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis...',
            image: imgDishSushi,
            infos: ['Japonesa']
        }
    ]
}

const dishiesSlice = createSlice({
    name: 'dishies',
    initialState,
    reducers: {}
})

export default dishiesSlice.reducer;