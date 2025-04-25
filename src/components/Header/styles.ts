import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Header = styled.header`
    padding-top: 64px;
    padding-bottom: 40px;
    text-align: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-weight: 900;
    font-size: 36px;
    color: ${colors.colorRed};

    h1{
        padding-top: 138px;
    }

    @media (max-width:${breakpoints.tablet}) {
        font-size: 16px;
    }
`