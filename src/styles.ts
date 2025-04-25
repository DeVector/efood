import styled, { createGlobalStyle } from "styled-components";

export const colors = {
    colorMilk: '#FFF8F2',
    colorOrange: '#FFEBD9',
    colorRed: '#E66767',
    colorWhite: '#FFFFFF'
}

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px',
    smartphone: '344px'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }
    

    .container{
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: ${breakpoints.desktop}) {
            max-width: 768px;
        }

        @media (max-width: ${breakpoints.tablet}) {
            max-width: 366px;
        }
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.8;
`

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open{
        display: flex;
    }
`

export const SideBar = styled.aside`
    background-color: ${colors.colorRed};
    padding: 16px 8px 0 8px;
    z-index: 1;
    max-width: 360px;
    width: 100%;

    @media (max-width: ${breakpoints.tablet}) {
        max-width: 320px;
    }
`

export const ContainerLabel = styled.div`
    display: grid;
    margin-bottom: 8px;
    
    label {
        display: block;
        font-size: 14px;
        font-weight: 700;
        color: ${colors.colorOrange};
        margin-bottom: 8px;
    }
    
    input {
        display: block;
        width: 100%;
        padding: 8px;
        background-color: ${colors.colorOrange};
        font-size: 14px;
        font-weight: 700;
        border: 1px solid ${colors.colorOrange};
        height: 32px;

        &.error {
            border: 3px solid red;
        }
    }

    IMaskInput{
        display: block;
        padding: 8px;
        background-color: ${colors.colorOrange};
        font-size: 14px;
        font-weight: 700;
        border: 1px solid ${colors.colorOrange};
        height: 32px;
    }
`