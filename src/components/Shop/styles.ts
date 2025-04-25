import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
    padding: 8px;
    background-color: ${colors.colorRed};
    color: ${colors.colorOrange};
    position: relative;
    max-width: 320px;
    border: 0;
    height: 100%;

    .imgWidth {
        width: 304px;
        height: 167px;
    }
`

export const Title = styled.h3`
    margin-top: 8px;
    font-size: 16px;
    font-weight: 900;
`

export const Describe = styled.p`
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`

export const Button = styled.button`
    padding: 4px 0 4px 0;
    margin-top: 8px;
    text-align: center;
    background-color: ${colors.colorOrange};
    color: ${colors.colorRed};
    border: 0;
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`