import * as S from './styles'

import backHeader from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Header = () => {
    return(
        <S.Header style={{ backgroundImage: `url(${backHeader})` }}>
            <div className="container">
              <img src={logo} alt="Logo efood" />
              <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
            </div>
        </S.Header>
    )
}

export default Header