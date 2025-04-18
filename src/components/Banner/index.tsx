import * as S from './styles'

type Props ={
    infos: string[]
    title: string
    image: string
}

const Banner = ({ infos, title, image }: Props) => {
    return(
        <S.Banner style={{ backgroundImage: `url(${image})` }}>
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