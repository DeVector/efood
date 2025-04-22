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