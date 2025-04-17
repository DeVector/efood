import * as S from './styles'

import logo from '../../assets/images/logo.png'
import logoInsta from '../../assets/images/logo_insta.svg'
import logoFace from '../../assets/images/logo_face.svg'
import logoX from '../../assets/images/logo_x.svg'


const currentYear = new Date().getFullYear()

const Footer = () => {
    return(
        <S.Container>
            <div className="container">
                <img src={logo} alt="Logo eFood" />
                <div className="linkSocial">
                    <a href="#middle">
                        <img src={logoInsta} alt="Logo Instagram" />
                    </a>
                    <a href="#bottom">
                        <img src={logoFace} alt="Logo Facebook" />
                    </a>
                    <a href="#top">
                        <img src={logoX} alt="Logo X" />
                    </a>
                </div>
                <S.FooterInfo>
                    A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade<br /> dos produtos é toda do estabelecimento contratado. 
                </S.FooterInfo>
                <p>{ currentYear } - &copy; eFood Todos os direitos reservados</p>
            </div>
        </S.Container>
    )
}

export default Footer