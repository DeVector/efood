import { Restaurante } from "../../pages/Home"
import Product from "../Product"

import * as S from './styles'

export type Props = {
    catalogos: Restaurante[]
}

const ProductList = ({ catalogos }: Props) => {

    const getCatalogoTags = (catalogo: Restaurante) => {
        const tags = []

        if (catalogo.destacado) {
            tags.push('Destaque da semana')
        }

        if (catalogo.tipo) {
            tags.push(catalogo.tipo)
        }

        return tags
    }
    
    return(
        <S.Container>
            <div className="container">
                <S.List>
                    {catalogos.map(( dish ) => (
                        <Product key={dish.id}
                            title={dish.titulo}
                            image={dish.capa}
                            describe={dish.descricao}
                            infos={getCatalogoTags(dish)}
                            rate={dish.avaliacao}
                        />
                    ))}
                </S.List>
            </div>
        </S.Container>
    )
}

export default ProductList