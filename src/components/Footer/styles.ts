import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.footer`
    background-color: ${colors.colorOrange};
    color: ${colors.colorRed};
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;
    align-items: center;

    a{
        padding-left: 8px;
    }

    .linkSocial{
        margin-top: 32px;
    }
`

export const FooterInfo = styled.p`
    margin-top: 80px;
    margin-bottom: 16px;
    font-size: 10px;
    font-weight: 400;
`