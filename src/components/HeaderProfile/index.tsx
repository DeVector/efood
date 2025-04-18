import * as S from './styles'

import backHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderProfile = () => {
    return(
        <S.Header style={{backgroundImage: `url(${backHeader})`}}>
            <S.HeaderContainer>
                <h2>Restaurantes</h2>
                <Link to='/'>
                    <img src={logo} alt="Logo" />
                </Link>
                <h2>0 produto(s) no carrinho</h2>
            </S.HeaderContainer>
        </S.Header>
    )
}

export default HeaderProfile