import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.section`
    padding-top: 80px;
    padding-bottom: 120px;
    background-color: ${colors.colorMilk};
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;

    @media (max-width: ${breakpoints.desktop}){
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
        padding-left: 150px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        padding-left: 20px;
        column-gap: 0;
        row-gap: 28px;
    }
`