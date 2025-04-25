import { ClockLoader } from "react-spinners"
import { colors } from "../../styles"
import { Container } from "./styles"

const Loader = () => {
    return (
        <Container className="container">
            <ClockLoader color={colors.colorRed} />
        </Container>
    )
}

export default Loader