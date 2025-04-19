import { Dishies } from "../../pages/Profile"
import Shop from "../Shop"

import * as S from './styles'

import imgPizza from '../../assets/images/img_pizza.png'
import btnClose from '../../assets/images/btn_close.png'

type Props = {
    dishies: Dishies[]
}

const ShopList = ({ dishies }: Props) => {

    return(
        <>
            <S.Container>
                <div className="container">
                    <S.List>
                        { dishies.map((dish) => (
                            <Shop key={dish.id}
                                foto={dish.foto}
                                nome={dish.nome}
                                descricao={dish.descricao}
                            />
                        ))}
                    </S.List>
                </div>
            </S.Container>
            <S.Modal>
                <S.ModalContent>
                    <img className="btn-close" src={btnClose} alt="" />
                    <div className="container">
                        <img src={imgPizza} alt="" />
                        <S.ModalInfo>
                            <h3>Nome do prato</h3>
                            <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
                            </p>
                            <p>Serve: de 2 a 3 pessoas</p>
                            <button>Adicionar ao carrinho - R$ 60,90</button>
                        </S.ModalInfo>
                    </div>
                    
                </S.ModalContent>
                <div className="overlay"></div>
            </S.Modal>
        </>
    )
}

export default ShopList