import { useState } from "react"
import { Dishies } from "../../pages/Profile"
import Shop from "../Shop"

import * as S from './styles'

import btnClose from '../../assets/images/btn_close.png'

type Props = {
    dishies: Dishies[]
}

const ShopList = ({ dishies }: Props) => {
    const [modal, setModal] = useState<null | Dishies>(null)

    const formatarPreco = (preco = 0) => {
        return new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(preco)
      }

    return(
        <>
            <S.Container>
                <div className="container">
                    <S.List>
                        { dishies.map((dish) => (
                            <Shop 
                                key={dish.id}
                                foto={dish.foto}
                                nome={dish.nome}
                                descricao={dish.descricao}
                                onClick={() => setModal(dish)}
                            />
                        ))}
                    </S.List>
                </div>
            </S.Container>
            <S.Modal className={modal ? 'visible' : ''}>
                <S.ModalContent>
                    <img 
                        className="btn-close" 
                        src={btnClose} 
                        alt="" 
                        onClick={() => setModal(null)}
                    />
                    <div className="container">
                        <img src={modal?.foto} alt="" />
                        <S.ModalInfo>
                            <h3>{modal?.nome}</h3>
                            <p>{modal?.descricao}
                            </p>
                            <p>Serve: {modal?.porcao}</p>
                            <button>
                                Adicionar ao carrinho - {formatarPreco(modal?.preco)}
                            </button>
                        </S.ModalInfo>
                    </div>
                    
                </S.ModalContent>
                <div 
                    className="overlay"
                    onClick={() => setModal(null)}
                >

                </div>
            </S.Modal>
        </>
    )
}

export default ShopList