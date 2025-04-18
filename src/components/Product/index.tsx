import * as S from './styles'

import logoRate from '../../assets/images/rate.svg'
import { Link } from 'react-router-dom'

type Props = {
    title: string,
    rate: number,
    describe: string,
    infos: string[],
    image: string
}

const Product = ({ title, rate, describe, infos, image }: Props) => {
    return(
        <S.Card>
            <S.Image src={image} alt={image} />
            <S.Infos>
                {infos.map((info) => (
                    <S.TagInfo key={info}>{info}</S.TagInfo>
                ))}
            </S.Infos>
            <div className="inline">
                <S.Title>{title}</S.Title>
                <div className="inlineImg">
                    <S.Rate>{rate}</S.Rate>
                    <img src={logoRate} alt="Rate" />
                </div>
                
            </div>
            <S.Describe> {describe} </S.Describe>
            <Link to='/profile'>
                <S.Button>Saiba mais</S.Button>
            </Link>
            
        </S.Card>
    )
}

export default Product