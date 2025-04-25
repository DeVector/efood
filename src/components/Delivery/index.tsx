import { useDispatch, useSelector } from "react-redux"

import { RootReducer } from "../../store"
import { closeDelivery, openPayment, open } from "../../store/reducers/Cart"
import { Delivery as DeliveryType } from "../../service/api"

import { IMaskInput } from "react-imask"
import { useFormik } from "formik"
import * as Yup from 'yup'

import { Button } from "../Shop/styles"
import { CartContainer, Overlay, ContainerLabel } from "../../styles"
import { AdressInfo, InfoCepNumber } from "./styles"

type Props = {
    onSubmit: (delivery: DeliveryType) => void
}


const Delivery = ({ onSubmit }: Props) => {

    const { isOpenDelivery } = 
        useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeAsideDelivery = () => {
        dispatch(closeDelivery())
    }

    const backCart = () => {
        closeAsideDelivery()
        dispatch(open())
    }

    const openAsidePayment = () => {
        closeAsideDelivery()
        dispatch(openPayment())
    }

    const form = useFormik({
        initialValues: {
            personRecive: '',
            adress: '',
            city: '',
            cep: '',
            numberHouse: 0,
            complement: ''
        },
        validationSchema: Yup.object({
            personRecive: Yup.string()
                .min(3, 'O nome precisa ter pelo menos 3 letras')
                .required('O campo de quem irá receber é obrigatório'),
            adress: Yup.string()
                .min(10, 'O endereço precisa de pelo menos 10 letras')
                .required('O campo endereço é obrigatório'),
            city: Yup.string()
                .min(5, 'O campo cidade precisa ter pelo menos 5 letra.')
                .required('O campo cidade é obrigatório'),
            cep: Yup.string()
                .min(8, 'O campo CEP precisa ter 8 caracteres')
                .max(9, 'O campo CEP tem que ser preenchido apenas com 8 digitos')
                .required('O campo CEP é obrigatório'),
            numberHouse: Yup.number()
                .required('O campo Número é obrigatório, caso não tenha digite NÃO!')
        }),
        onSubmit: (values) => {
            const delivery: DeliveryType = {
                receiver: values.personRecive,
                adress: {
                    description: values.adress,
                    city: values.city,
                    zipCode: values.cep,
                    number: values.numberHouse,
                    complement: values.complement
                }
            }
            onSubmit(delivery)
            openAsidePayment()
            console.log(delivery)
        }
    })

    /**Para verificar se os dados são iguais usa-se a função abaixo
     * pass: yup.string()
     *  .min(6)
     *  .max(20)
     *  .required('O Campo é requerido'),
     * confirmPass: yup.string()
     *  .oneOf([Yup.ref('pass')], 'As senhas são diferentes')
     *  .required('O campo é requerido')
     */
    /**Para fazer a verificação para quando um campo so é visto quando tem uma condição
     * fieldName: yup.string().when((values, schema) => campoDeVerificação ? schema.required('O campo é obrigatorio') : schema)
     */

    const checkInputHasError = (fieldName: string, message?: string) => {
        const isTouched = fieldName in form.touched
        const isInvalid = fieldName in form.errors
        const hasError = isTouched && isInvalid

        return hasError
    }

    return (
        <CartContainer className={isOpenDelivery ? 'is-open' : ''}>
            <Overlay onClick={closeAsideDelivery}/>
            <AdressInfo>

                <h5>Entrega</h5>
                <form onSubmit={form.handleSubmit}>
                    <ContainerLabel>
                        <label htmlFor="personRecive">Quem irá receber</label>
                        <input 
                            type="text" 
                            id="personRecive"
                            name="personRecive" 
                            value={form.values.personRecive}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputHasError('personRecive') ? 'error' : ''}
                        />
                    </ContainerLabel>
                    <ContainerLabel>
                        <label htmlFor="adress">Endereço</label>
                        <input 
                            type="text" 
                            id="adress"
                            name="adress" 
                            value={form.values.adress}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputHasError('adress') ? 'error' : ''}
                        />
                    </ContainerLabel>
                    <ContainerLabel>
                        <label htmlFor="city">Cidade</label>
                        <input 
                            type="text" 
                            id="city" 
                            name="city" 
                            value={form.values.city}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputHasError('city') ? 'error' : ''}
                        />
                    </ContainerLabel>
                    <InfoCepNumber>
                        <ContainerLabel>
                            <label htmlFor="cep">CEP</label>
                            <IMaskInput 
                                id="cep" 
                                className={checkInputHasError('cep') ? 'error' : ''}
                                mask="00000-000"
                                name="cep" 
                                value={form.values.cep}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                
                            />
                        </ContainerLabel>
                        <ContainerLabel>
                            <label htmlFor="numberHouse">Número</label>
                            <input 
                                type="number" 
                                id="numberHouse"
                                name="numberHouse" 
                                value={form.values.numberHouse}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className={checkInputHasError('numberHouse') ? 'error' : ''}
                            />
                        </ContainerLabel>
                    </InfoCepNumber>
                    <ContainerLabel>
                        <label htmlFor="complement">
                            Complemento (opcional)
                        </label>
                        <input 
                            type="text" 
                            id="complement" 
                            name="complement" 
                            value={form.values.complement}
                            onChange={form.handleChange}
                        />
                    </ContainerLabel>
                    
                    <Button type="submit">
                        Continuar com o pagamento
                    </Button>
                    <Button onClick={backCart}>Voltar para o carrinho</Button>
                </form>
            </AdressInfo>
        </CartContainer>
    )
}

export default Delivery