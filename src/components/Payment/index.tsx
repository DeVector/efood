import { useDispatch, useSelector } from "react-redux"

import { RootReducer } from "../../store"
import { closePayment, openDelivery, OpenConfirmPay } from "../../store/reducers/Cart"
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
import { getTotalPrice, parseToBrl } from "../../utils/index"

type Props = {
    deliveryType: DeliveryType | null
}

const Payment = ({ deliveryType }: Props) => {

    const { isOpenPayment, isOpenConfirmPay, items } = useSelector((state: RootReducer) => state.cart)

    const [purchase, { data, isLoading }] = usePurchaseMutation()

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
                .min(19, 'O campo precisa ter 19 digitos')
                .max(19, 'O campo precisa ter 19 digitos')
                .required('O campo número do cartão é obrigatorio'),
            securityCod: Yup.string()
                .min(3, 'O campo só pode ter 3 digitos')
                .max(3, 'O campo só pode ter 3 digitos')
                .required('O campo CVV é obrigatório'),
            monthExpiration: Yup.string()
                .min(2, 'O campo mês de vencimento precisa ter 2 digitos')
                .max(2, 'O campo mês de vencimento precisa ter 2 digitos')
                .required('O campo mês de vencimento é obrigatório.'),
            yearExpiration: Yup.string()
                .min(2, 'O campo mês de vencimento precisa ter 2 digitos')
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
                products: items.map((item) => ({
                    id: item.id,
                    price: item.preco
                })),
                delivery: deliveryType,
                payment,
            })
            openAsideConfirmPay()

        }
    })

    const checkInputHasError = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }

    return (
        <>
            {isOpenConfirmPay && data ? (
                <ConfirmPay codPayment={data.orderId} />
            ) : (
                <CartContainer className={isOpenPayment ? 'is-open' : ''}>
                    <Overlay onClick={closeAsidePayment}/>
                    <SidePayment>
    
                        <h2>
                            Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
                        </h2>
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
                                    className={checkInputHasError("nameOfCard") ? "error" : ""}
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
                                        className={checkInputHasError("numberOfCard") ? "error" : ""}
                                    />
                                </ContainerLabel>
                                <ContainerLabel>
                                    <label htmlFor="securityCod">CVV</label>
                                    <IMaskInput 
                                        type="text" 
                                        id="securityCod"
                                        name="securityCod"
                                        value={form.values.securityCod}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputHasError("securityCod") ? "error" : ""}
                                        mask="000"
                                    />
                                </ContainerLabel>
                            </InfoCardSecurity>
                            <InfoCard>
                                <ContainerLabel>
                                    <label htmlFor="monthExpiration">
                                        Mês de vencimento
                                    </label>
                                    <IMaskInput 
                                        type="text" 
                                        id="monthExpiration"
                                        name="monthExpiration"
                                        value={form.values.monthExpiration}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputHasError("monthExpiration") ? "error" : ""}
                                        mask="00"
                                    />
                                </ContainerLabel>
                                <ContainerLabel>
                                    <label htmlFor="yearExpiration">
                                        Ano de vencimento
                                    </label>
                                    <IMaskInput 
                                        type="text" 
                                        id="yearExpiration" 
                                        name="yearExpiration"
                                        value={form.values.yearExpiration}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputHasError("yearExpiration") ? "error" : ""}
                                        mask="00"
                                    />
                                </ContainerLabel>
                            </InfoCard>
                            <Button 
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? 'Finalizando compra...' : 'Finalizar pagamento'}
                                </Button>
                            <Button onClick={backDelivery}>Voltar para edição de endereço</Button>
                        </form>
                    </SidePayment>
                </CartContainer>
            )}
        </>
    )
}

export default Payment