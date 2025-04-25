import { useDispatch, useSelector } from "react-redux"

import { RootReducer } from "../store"
import { closePayment, openDelivery, OpenConfirmPay, setOrderId } from "../store/reducers/Cart"
import { 
    Payment as PaymentType, 
    Delivery as DeliveryType,
    usePurchaseMutation
} from '../../service/api'

import { IMaskInput } from "react-imask"
import { useFormik } from "formik"
import * as Yup from 'yup'

import { CartContainer, ContainerLabel, Overlay} from "../../styles"
import { InfoCard, InfoCardSecurity, SidePayment } from "./styles"
import { Button } from "../Shop/styles"
import ConfirmPay from "../ConfirmPay"
import { formatarPreco } from "../ShopList"

type Props = {
    deliveryType: DeliveryType | null
}

const Payment = ({ deliveryType }: Props) => {

    const { isOpenPayment, isOpenConfirmPay, items } = useSelector((state: RootReducer) => state.cart)

    const [purchase, { data }] = usePurchaseMutation()

    const dispatch = useDispatch()

    const closeAsidePayment = () => {
        dispatch(closePayment())
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco!)
        }, 0)
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
            securityCod: 0,
            monthExpiration: 0,
            yearExpiration: 0
        },
        validationSchema: Yup.object({
            nameOfCard: Yup.string()
                .min(5, 'O nome precisa ter pelo menos 5 letras')
                .required('O campo nome completo no cartão é obrigatório'),
            numberOfCard: Yup.string()
                .min(19, 'O campo precisa ter 19 digitos')
                .max(19, 'O campo precisa ter 19 digitos')
                .required('O campo número do cartão é obrigatorio'),
            securityCod: Yup.string()
                .min(3, 'O campo só pode ter 3 digitos')
                .max(3, 'O campo só pode ter 3 digitos')
                .required('O campo CVV é obrigatório'),
            monthExpiration: Yup.string()
                .min(2, 'O campo mês de vencimento precisa ter 5 digitos')
                .max(2, 'O campo mês de vencimento precisa ter 5 digitos')
                .required('O campo mês de vencimento é obrigatório.'),
            yearExpiration: Yup.string()
                .min(4, 'O campo mês de vencimento precisa ter 4 digitos')
                .max(4, 'O campo mês de vencimento precisa ter 4 digitos')
                .required('O campo ano de vencimento é obrigatório.')
        }),
        onSubmit: (values) => {
            if (!deliveryType) {
                console.error('Dados de entrega não preenchidos!!')
                return
            }

            const payment: PaymentType = {
                card: {
                    name: values.nameOfCard,
                    number: values.numberOfCard,
                    code: Number(values.securityCod),
                    expires: {
                        month: Number(values.monthExpiration),
                        year: Number(values.yearExpiration)
                    }
                }
            }
            
            purchase({
                products: [{id: 1, price: 49.9}],
                delivery: deliveryType,
                payment,
            })

            dispatch(setOrderId(data.orderId))
            openAsideConfirmPay()
        }
    })

    const getErrorMessagem = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors

        if( isTouched && isInvalid ) return message
        return ''
    }

    return (
        <>
            {isOpenConfirmPay && data ? (
                <ConfirmPay codPayment={data.orderId} />
            ) : (
                <CartContainer className={isOpenPayment ? 'is-open' : ''}>
                    <Overlay onClick={closeAsidePayment}/>
                    <SidePayment>
    
                        <h2>Pagamento - Valor a pagar {formatarPreco(getTotalPrice())}</h2>
                        <form onSubmit={form.handleSubmit}>
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
                                <small> 
                                    { getErrorMessagem('nameOfCard', form.errors.nameOfCard) } 
                                </small>
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
                                    <small> 
                                    { getErrorMessagem('numberOfCard', form.errors.numberOfCard) } 
                                </small>
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
                                    { getErrorMessagem('securityCod', form.errors.securityCod) }
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
                                    { getErrorMessagem('monthExpiration', form.errors.monthExpiration) }
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
                                    { getErrorMessagem('yearExpiration', form.errors.yearExpiration) }
                                </ContainerLabel>
                            </InfoCard>
                            <Button type="submit">Finalizar pagamento</Button>
                            <Button onClick={backDelivery}>Voltar para edição de endereço</Button>
                        </form>
                    </SidePayment>
                </CartContainer>
            )}
        </>
    )
}

export default Payment