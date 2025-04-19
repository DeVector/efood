import * as S from './styles'

type Props = {
    nome: string
    foto: string
    descricao: string
}

const Shop = ({ nome, foto, descricao }: Props) => {
    return(
        <S.Card>
            <img className='imgWidth' src={foto} alt="Imagem do prato" />
            <S.Title>{nome}</S.Title>
            <S.Describe>{descricao}</S.Describe>
            <S.Button>Adicionar ao carrinho</S.Button>
        </S.Card>
    )
}

export default Shop