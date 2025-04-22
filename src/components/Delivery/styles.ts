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
export const InfoCepNumber = styled.div`
    display: flex;
    flex: auto;
    justify-content: space-between;
    column-gap: 34px;
`