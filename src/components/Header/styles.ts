import styled from "styled-components";
import { colors } from "../../styles";

export const Header = styled.header`
    padding-top: 64px;
    padding-bottom: 40px;
    height: 384px;
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-weight: 900;
    font-size: 36px;
    color: ${colors.colorRed};

    h1{
        padding-top: 138px;
    }
`