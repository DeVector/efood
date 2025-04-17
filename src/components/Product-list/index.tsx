import Dish from "../../models/Dish"
import Product from "../Product"

import * as S from './styles'

export type Props = {
    dishies: Dish[]
}

const ProductList = ({ dishies }: Props) => {
    return(
        <S.Container>
            <div className="container">
                <S.List>
                    {dishies.map(( dish ) => (
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