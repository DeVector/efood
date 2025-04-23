import { useDispatch, useSelector } from "react-redux"

import { RootReducer } from "../store"
import { closePayment, OpenConfirmPay, openDelivery } from "../store/reducers/Cart"

import { IMaskInput } from "react-imask"
import { useFormik } from "formik"
import * as Yup from 'yup'

import { CartContainer, ContainerLabel, Overlay} from "../../styles"
import { InfoCard, InfoCardSecurity, SidePayment } from "./styles"
import { Button } from "../Shop/styles"

const Payment = () => {

    const { isOpenPayment } = useSelector((state: RootReducer) => state.cart) 

    const dispatch = useDispatch()

    const closeAsidePayment = () => {
        dispatch(closePayment())
    }

    const backDelivery = () => {
        closeAsidePayment()
        dispatch(openDelivery())
    }

    const openAsideConfirmPay = () => {
        closeAsidePayment()
        dispatch(OpenConfirmPay())
    }

    const form = useFormik({
        initialValues: {
            nameOfCard: '',
            numberOfCard: '',
            securityCod: '',
            monthExpiration: '',
            yearExpiration: ''
        },
        validationSchema: Yup.object({
            nameOfCard: Yup.string()
                .min(5, 'O nome precisa ter pelo menos 5 letras')
                .required('O campo nome completo no cartão é obrigatório'),
            numberOfCard: Yup.string()
                .min(20, 'O campo precisa ter 20 digitos')
                .max(20, 'O campo precisa ter 20 digitos')
                .required('O campo número do cartão é obrigatorio'),
            securityCod: Yup.string()
                .min(3, 'O campo só pode ter 3 digitos')
                .max(3, 'O campo só pode ter 3 digitos')
                .required('O campo CVV é obrigatório'),
            monthExpiration: Yup.string()
                .min(5, 'O campo mês de vencimento precisa ter 5 digitos')
                .max(5, 'O campo mês de vencimento precisa ter 5 digitos')
                .required('O campo mês de vencimento é obrigatório.'),
            yearExpiration: Yup.string()
                .min(5, 'O campo mês de vencimento precisa ter 5 digitos')
                .max(5, 'O campo mês de vencimento precisa ter 5 digitos')
                .required('O campo ano de vencimento é obrigatório.')
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <CartContainer className={isOpenPayment ? 'is-open' : ''}>
            <Overlay onClick={closeAsidePayment}/>
            <SidePayment>
                <h2>Pagamento - Valor a pagar R$ 190,90</h2>
                <form>
                    <ContainerLabel>
                        <label htmlFor="nameOfCard">Nome completo no cartão</label>
                        <input 
                            type="text" 
                            id="nameOfCard"
                            name="nameOfCard"
                            value={form.values.nameOfCard}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                        />
                    </ContainerLabel>
                    <InfoCardSecurity>
                        <ContainerLabel className="numberOfSpace">
                            <label htmlFor="numberOfCard">Número de cartão</label>
                            <IMaskInput 
                                id="numberOfCard"
                                mask="0000.0000.0000.0000"
                                name="numberOfCard"
                                value={form.values.numberOfCard}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </ContainerLabel>
                        <ContainerLabel>
                            <label htmlFor="securityCod">CVV</label>
                            <input 
                                type="text" 
                                id="securityCod"
                                name="securityCod"
                                value={form.values.securityCod}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </ContainerLabel>
                    </InfoCardSecurity>
                    <InfoCard>
                        <ContainerLabel>
                            <label htmlFor="monthExpiration">
                                Mês de vencimento
                            </label>
                            <input 
                                type="text" 
                                id="monthExpiration"
                                name="monthExpiration"
                                value={form.values.monthExpiration}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </ContainerLabel>
                        <ContainerLabel>
                            <label htmlFor="yearExpiration">
                                Ano de vencimento
                            </label>
                            <input 
                                type="text" 
                                id="yearExpiration" 
                                name="yearExpiration"
                                value={form.values.yearExpiration}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                        </ContainerLabel>
                    </InfoCard>
                    <Button onClick={openAsideConfirmPay}>Finalizar pagamento</Button>
                    <Button onClick={backDelivery}>Voltar para edição de endereço</Button>
                </form>
            </SidePayment>
        </CartContainer>
    )
}

export default Payment