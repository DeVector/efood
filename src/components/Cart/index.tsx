import { Button } from "../Shop/styles"

import pizza from '../../assets/images/img_pizza.png'

import * as S from './styles'

const Cart = () => {

    return(
        <S.CartContainer>
            <S.Overlay />
            <S.SideBar>
                <ul>
                    <S.CardItem>
                        <img src={pizza} alt="" />
                        <div>
                            <h3>Nome do prato</h3>
                            <span>R$ 60,90</span>
                        </div>
                        <button type="button" />
                    </S.CardItem>
                    <S.CardItem>
                        <img src={pizza} alt="" />
                        <div>
                            <h3>Nome do prato</h3>
                            <span>R$ 60,90</span>
                        </div>
                        <button type="button" />
                    </S.CardItem>
                </ul>
                <S.ContainerPrices>
                    <p>Valor total</p>
                    <p>R$ 182,70</p>
                </S.ContainerPrices>
                <Button>Continuar com a entrega</Button>
            </S.SideBar>
        </S.CartContainer>
    )
}

export default Cart