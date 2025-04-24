import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Container = styled.section`
    padding: 56px 0 120px 0;
    background-color: ${colors.colorMilk};
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    row-gap: 32px;

    @media (max-width: ${breakpoints.desktop}){
        grid-template-columns: 1fr 1fr;
        padding-left: 30px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;

    &.visible {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
    }

    @media (max-width: ${breakpoints.tablet}){
        max-width: 344px;
    }
`

export const ModalContent = styled.div`
    position: relative;
    max-width: 1024px;
    padding: 32px;
    height: 334px;
    display: flex;
    z-index: 1;
    background-color: ${colors.colorRed};
    color: ${colors.colorWhite};

    .btn-close {
        position: absolute;
        top: 8px;
        right: 8px;
        cursor: pointer;
    }

    .container {
        display: flex;

        img{
            width: 280px;
            height: 280px;
            margin-right: 24px;
        }

    }

    @media (max-width: ${breakpoints.desktop}){
        max-width: 768px;
    }

    @media (max-width: ${breakpoints.tablet}){
        display: grid;
        max-width: 350px;
        max-height: 650px;
        height: 100%;
        margin-left: 30px;

        .container {
            display: grid;
        }

        img {
            margin-right: 0;
        }
    }
`

export const ModalInfo = styled.div`
    display: grid;
    flex-direction: column;

    h3 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        max-width: 656px;
        margin-bottom: 16px;
    }

    button {
        padding: 4px 8px;
        width: 218px;
        background-color: ${colors.colorOrange};
        color: ${colors.colorRed};
        border: 0;
        cursor: pointer;
    }

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 340px;
    }
`