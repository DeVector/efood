import { useSelector } from "react-redux"
import Shop from "../Shop"

import * as S from './styles'
import { RootReducer } from "../store"

const ShopList = () => {
    const { itens } = useSelector((state: RootReducer) => state.dishies)

    return(
        <S.Container>
            <div className="container">
                <S.List>
                    { itens.map((dish) => (
                        <Shop key={dish.id}
                            image={dish.image}
                            title={dish.title}
                            describe={dish.describe}
                        />
                    )) }
                </S.List>
            </div>
        </S.Container>
    )
}

export default ShopList