import { useState } from "react"
import { useDispatch } from "react-redux"

import { Dishies } from "../../pages/Profile"
import { add, open } from '../../store/reducers/Cart'

import Shop from "../Shop"

import { parseToBrl } from "../../utils"

import * as S from './styles'

import btnClose from '../../assets/images/btn_close.png'

type Props = {
    dishies: Dishies[]
}

const ShopList = ({ dishies }: Props) => {
    const [modal, setModal] = useState<null | Dishies>(null)

    const dispatch = useDispatch()

    const addToCart = (dish: Dishies) => {
        dispatch(add(dish))
        setModal(null)
        dispatch(open())
    }

    return(
        <>
            <S.Container>
                <div className="container">
                    <S.List>
                        { dishies.map((dish) => (
                            <Shop 
                                key={dish.id}
                                dish={dish}
                                onClick={() => {
                                    setModal(dish)
                                }}
                            />
                        ))}
                    </S.List>
                </div>
            </S.Container>
            <S.Modal className={modal ? 'visible' : ''}>
                <S.ModalContent 
                title={`Clique no botão adicionar ao carrinho para comprar`}>
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
                            <button title={`Clique aqui para adicionar ao carrinho o prato ${modal?.nome}`} onClick={() => addToCart(modal!)}>
                                Adicionar ao carrinho - {parseToBrl(modal?.preco)}
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