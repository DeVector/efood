import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { open } from '../store/reducers/Cart'

import * as S from './styles'

import backHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { RootReducer } from '../store'

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
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
                <a onClick={openCart}>
                    <h2>{items.length} produto(s) no carrinho</h2>
                </a>
            </S.HeaderContainer>
        </S.Header>
    )
}

export default HeaderProfile