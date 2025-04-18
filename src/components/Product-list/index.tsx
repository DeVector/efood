import { useSelector } from "react-redux"
import Dish from "../../models/Dish"
import Product from "../Product"

import * as S from './styles'
import { RootReducer } from "../store"

export type Props = {
    dishies: Dish[]
}

const ProductList = ({ dishies }: Props) => {
    const { itens } = useSelector((state: RootReducer) => state.dishies)
    return(
        <S.Container>
            <div className="container">
                <S.List>
                    {itens.map(( dish ) => (
                        <Product key={dish.id}
                            title={dish.title}
                            image={dish.image}
                            describe={dish.describe}
                            infos={dish.infos}
                            rate={dish.rate}
                        />
                    ))}
                </S.List>
            </div>
        </S.Container>
    )
}

export default ProductList