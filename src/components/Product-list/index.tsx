import Loader from "../Loader"
import Product from "../Product"

import * as S from './styles'

export type Props = {
    catalogos?: Restaurante[]
    isLoading: boolean
}

export const getCatalogoTags = (catalogo: Restaurante) => {
    const tags = []

    if (catalogo.destacado) {
        tags.push('Destaque da semana')
    }

    if (catalogo.tipo) {
        tags.push(catalogo.tipo)
    }

    return tags
}

const ProductList = ({ catalogos, isLoading }: Props) => {

    if(isLoading){
        return <Loader />
    }
    
    return(
        <S.Container>
            <div className="container">
                <S.List>
                    {catalogos &&
                    catalogos.map(( dish ) => (
                        <Product key={dish.id}
                            title={dish.titulo}
                            image={dish.capa}
                            describe={dish.descricao}
                            infos={getCatalogoTags(dish)}
                            rate={dish.avaliacao}
                            id={dish.id}
                        />
                    ))}
                </S.List>
            </div>
        </S.Container>
    )
}

export default ProductList