
import * as S from './styles'
import { Dishies } from '../../pages/Profile'

type Props = {
    dish: Dishies
    onClick: (dish: Dishies) => void
}

const Shop = ({ dish, onClick }: Props) => {

    const getDescricao = (descricao: string) => {
        if (descricao.length > 110) {
            return descricao.slice(0, 103) + '...'
        }
        return descricao
    }
    return(
        <S.Card 
            title={`Clique no botão abaixo para ver mais detalhes do prato ${dish.nome}`}>
            <img className='imgWidth' src={dish.foto} alt="Imagem do prato" />
            <S.Title>{dish.nome}</S.Title>
            <S.Describe>{getDescricao(dish.descricao)}</S.Describe>
            <S.Button title={`Clique aqui para ver mais detalhes do prato ${dish.nome}`} onClick={() => onClick(dish)}>Adicionar ao carrinho</S.Button>
        </S.Card>
    )
}

export default Shop