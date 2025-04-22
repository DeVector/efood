import { IMaskInput } from "react-imask"
import { Button } from "../Shop/styles"
import { CartContainer, Overlay } from "../../styles"
import { AdressInfo, ContainerLabel, InfoCepNumber } from "./styles"

const Delivery = () => {
    return (
        <CartContainer className = ''>
            <Overlay />
            <AdressInfo>

                <h5>Entrega</h5>

                <ContainerLabel>
                    <label htmlFor="">Quem irá receber</label>
                    <input type="text" />
                </ContainerLabel>
                <ContainerLabel>
                    <label htmlFor="">Endereço</label>
                    <input type="text" />
                </ContainerLabel>
                <ContainerLabel>
                    <label htmlFor="">Cidade</label>
                    <input type="text" />
                </ContainerLabel>
                <InfoCepNumber>
                    <ContainerLabel>
                        <label htmlFor="">CEP</label>
                        <IMaskInput className="maskInput"
                            mask="00000-000"
                        />
                    </ContainerLabel>
                    <ContainerLabel>
                        <label htmlFor="">Número</label>
                        <input type="number" name="" id="" />
                    </ContainerLabel>
                </InfoCepNumber>
                <ContainerLabel>
                    <label htmlFor="">Complemento (opcional)</label>
                    <input type="text" />
                </ContainerLabel>
                
                <Button>Continuar com o pagamento</Button>
                <Button>Voltar para o carrinho</Button>
            </AdressInfo>
        </CartContainer>
    )
}

export default Delivery