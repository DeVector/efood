import { useDispatch, useSelector } from "react-redux"

import { RootReducer } from "../../store"
import { close, remove, openDelivery } from '../../store/reducers/Cart'

import { parseToBrl } from "../../utils/index"

import { Button } from "../Shop/styles"
import { CartContainer, Overlay, SideBar } from "../../styles"
import * as S from './styles'


const Cart = () => {

    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const openAsideDelivery = () => {
        closeCart()
        dispatch(openDelivery())
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco!)
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return(
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart}/>
            <SideBar>
                <ul>
                    {items.map((item) => (
                        <S.CardItem key={item.id}>
                            <img src={item.foto} alt={item.nome} />
                            <div>
                                <h3>{item.nome}</h3>
                                <span>{parseToBrl(item.preco)}</span>
                            </div>
                            <button onClick={() => {removeItem(item.id)}} type="button"/>
                        </S.CardItem>
                    ))}
                </ul>
                <S.ContainerPrices>
                    <p>Valor total</p>
                    <p>{parseToBrl(getTotalPrice())}</p>
                </S.ContainerPrices>
                <Button onClick={openAsideDelivery}>Continuar com a entrega</Button>
            </SideBar>
        </CartContainer>
    )
}

export default Cart