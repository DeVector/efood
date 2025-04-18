import * as S from './styles'

import imgBanne from '../../assets/images/img_banner.png'

type Props ={
    infos: string[]
    title: string
}

const Banner = ({ infos, title }: Props) => {
    return(
        <S.Banner style={{ backgroundImage: `url(${imgBanne})` }}>
            <div className="container">
                <S.Infos>
                    {infos.map((info) => (
                        <S.TagInfo key={info}>{info}</S.TagInfo>
                    ))}
                </S.Infos>
                <S.Title>{title}</S.Title>
            </div>
        </S.Banner>
        
    )
}

export default Banner