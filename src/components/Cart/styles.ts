import styled from "styled-components";

import btnDeleta from '../../assets/images/btn_trach.svg'

import { colors } from "../../styles";

export const ContainerPrices = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 40px 0 16px 0;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.colorOrange};
`

export const CardItem = styled.li`
    display: flex;
    padding: 8px 0 12px 8px;
    margin-top: 16px;
    background-color: ${colors.colorOrange};
    position: relative;

    img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

   div {
    h3 {
        font-size: 18px;
        font-weight: 700;
        color: ${colors.colorRed};
    }

    span {
        display: block;
        margin-top: 16px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: ${colors.colorRed};
    }
   }

   button {
        background-image: url(${btnDeleta});
        position: absolute;
        width: 16px;
        height: 16px;
        bottom: 8px;
        right: 8px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

`