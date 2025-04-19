import * as S from './styles'

type Props = {
    nome: string
    foto: string
    descricao: string
    onClick: () => void
}

const Shop = ({ nome, foto, descricao, onClick }: Props) => {
    const getDescricao = (descricao: string) => {
        if (descricao.length > 110) {
            return descricao.slice(0, 103) + '...'
        }
        return descricao
    }
    return(
        <S.Card>
            <img className='imgWidth' src={foto} alt="Imagem do prato" />
            <S.Title>{nome}</S.Title>
            <S.Describe>{getDescricao(descricao)}</S.Describe>
            <S.Button onClick={onClick}>Adicionar ao carrinho</S.Button>
        </S.Card>
    )
}

export default Shop