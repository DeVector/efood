import { createGlobalStyle } from "styled-components";

export const colors = {
    colorMilk: '#FFF8F2',
    colorOrange: '#FFEBD9',
    colorRed: '#E66767',
    colorWhite: '#FFFFFF'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }
    

    .container{
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`