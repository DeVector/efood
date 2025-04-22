import { IMaskInput } from "react-imask"
import { CartContainer, ContainerLabel, Overlay} from "../../styles"
import { InfoCard, InfoCardSecurity, SidePayment } from "./styles"
import { Button } from "../Shop/styles"

const Payment = () => {
    return (
        <CartContainer className="">
            <Overlay />
            <SidePayment>
                <h2>Pagamento - Valor a pagar R$ 190,90</h2>
                <ContainerLabel>
                    <label htmlFor="nameOfCard">Nome do cartão</label>
                    <input type="text" />
                </ContainerLabel>
                <InfoCardSecurity>
                    <ContainerLabel className="numberOfSpace">
                        <label htmlFor="numberOfCard">Número de cartão</label>
                        <IMaskInput 
                            id="numberOfCard"
                            mask="0000.0000.0000.0000" 
                         />
                    </ContainerLabel>
                    <ContainerLabel>
                        <label htmlFor="securityCod">CVV</label>
                        <input type="number" id="securityCod" />
                    </ContainerLabel>
                </InfoCardSecurity>
                <InfoCard>
                    <ContainerLabel>
                        <label htmlFor="monthExpiration">
                            Mês de vencimento
                        </label>
                        <input type="number" id="monthExpiration"/>
                    </ContainerLabel>
                    <ContainerLabel>
                        <label htmlFor="yearExpiration">
                            Ano de vencimento
                        </label>
                        <input type="number" id="yearExpiration" />
                    </ContainerLabel>
                </InfoCard>
                <Button>Finalizar pagamento</Button>
                <Button>Voltar para edição de endereço</Button>
            </SidePayment>
        </CartContainer>
    )
}

export default Payment