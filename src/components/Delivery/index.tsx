import { IMaskInput } from "react-imask"
import { Button } from "../Shop/styles"
import { CartContainer, Overlay, ContainerLabel } from "../../styles"
import { AdressInfo, InfoCepNumber } from "./styles"

const Delivery = () => {
    return (
        <CartContainer className = ''>
            <Overlay />
            <AdressInfo>

                <h5>Entrega</h5>

                <ContainerLabel>
                    <label htmlFor="personRecive">Quem irá receber</label>
                    <input type="text" id="personRecive" />
                </ContainerLabel>
                <ContainerLabel>
                    <label htmlFor="adress">Endereço</label>
                    <input type="text" id="adress" />
                </ContainerLabel>
                <ContainerLabel>
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" />
                </ContainerLabel>
                <InfoCepNumber>
                    <ContainerLabel>
                        <label htmlFor="cep">CEP</label>
                        <IMaskInput id="cep" className="maskInput"
                            mask="00000-000"
                        />
                    </ContainerLabel>
                    <ContainerLabel>
                        <label htmlFor="numberHouse">Número</label>
                        <input type="number" id="numberHouse" />
                    </ContainerLabel>
                </InfoCepNumber>
                <ContainerLabel>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input type="text" id="complement" />
                </ContainerLabel>
                
                <Button>Continuar com o pagamento</Button>
                <Button>Voltar para o carrinho</Button>
            </AdressInfo>
        </CartContainer>
    )
}

export default Delivery