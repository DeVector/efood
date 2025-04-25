import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/Cart'

import * as S from './styles'

import backHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { RootReducer } from '../../store'

const HeaderProfile = () => {
    const dispatch = useDispatch()

    const { items } = useSelector((state: RootReducer) => state.cart)

    const openCart = () => {
        dispatch(open())
    }

    return(
        <S.Header style={{backgroundImage: `url(${backHeader})`}}>
            <S.HeaderContainer>
                <h2>Restaurantes</h2>
                <Link title='Clique aqui para acessar a página home' to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
                <button title='Clique aqui para acessar o carrinho' onClick={openCart}>
                    <h2>{items.length} produto(s) no carrinho</h2>
                </button>
            </S.HeaderContainer>
        </S.Header>
    )
}

export default HeaderProfile