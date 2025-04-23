import { useDispatch, useSelector } from "react-redux"

import { RootReducer } from "../store"
import { closeConfirmPay } from "../store/reducers/Cart"

import { CartContainer, Overlay } from "../../styles"
import { Button } from "../Shop/styles"
import { SideConfirm } from "./styles"

const ConfirmPay = () => {

    const { isOpenConfirmPay } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeAsideConfirmPay = () => {
        dispatch(closeConfirmPay())
    }

    return (
        <CartContainer className={isOpenConfirmPay ? 'is-open' : ''}>
            <Overlay />
            <SideConfirm>
                <h2>Pedido realizado - ORDER_ID</h2>
                <p>
                    Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido. <br /><br />

                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. <br /><br />

                    Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição. <br /><br />

                    Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                </p>
                <Button onClick={closeAsideConfirmPay}>Concluir</Button>
            </SideConfirm>
        </CartContainer>
    )
}

export default ConfirmPay