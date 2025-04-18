import * as S from './styles'

type Props = {
    title: string
    image: string
    describe: string
}

const Shop = ({ title, image, describe }: Props) => {
    return(
        <S.Card>
            <img className='imgWidth' src={image} alt="Imagem do prato" />
            <S.Title>{title}</S.Title>
            <S.Describe>{describe}</S.Describe>
            <S.Button>Adicionar ao carrinho</S.Button>
        </S.Card>
    )
}

export default Shop