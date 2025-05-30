import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Header = styled.header`
    padding-top: 64px;
    padding-bottom: 40px;
    height: 186px;
    background-repeat: no-repeat;
    background-size: cover;
    color: ${colors.colorRed};

    @media (max-width: ${breakpoints.desktop}){
        padding: 64px 16px 40px 16px;
    }
`

export const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 900;

    button {
        text-decoration: none;
        color: ${colors.colorRed};
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    @media (max-width: ${breakpoints.desktop}){
        max-width: 768px;
        font-size: 12px;

        img {
            width: 84px;
            height: 39px;
        }
    }

    @media (max-width: ${breakpoints.tablet}) {
        display: grid;
        max-width: 332px;
        font-size: 14px;
        text-align: center;
        align-items: center;
        padding-left: 90px;

        a {
            font-size: 12px;
        }
    }
`