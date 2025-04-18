import * as S from './styles'

import backHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const HeaderProfile = () => {
    return(
        <S.Header style={{backgroundImage: `url(${backHeader})`}}>
            <S.HeaderContainer>
                <h2>Restaurantes</h2>
                <img src={logo} alt="Logo" />
                <h2>0 produto(s) no carrinho</h2>
            </S.HeaderContainer>
        </S.Header>
    )
}

export default HeaderProfile