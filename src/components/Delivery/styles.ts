import styled from "styled-components";
import { colors, SideBar } from "../../styles";
import { Button } from "../Shop/styles";

export const AdressInfo = styled(SideBar)`
    padding-top: 32px;
    h5 {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 700;
        color: ${colors.colorOrange};
    }

    ${Button} {
        margin-top: 16px;
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
        border: 0;
        height: 32px;
    }

    IMaskInput{
        display: block;
        padding: 8px;
        background-color: ${colors.colorOrange};
        font-size: 14px;
        font-weight: 700;
        border: 0;
        height: 32px;
    }
    `
export const InfoCepNumber = styled.div`
    display: flex;
    justify-content: space-between;

    .maskInput {
        width: 80%;
    }
`