import styled from "styled-components";
import { colors, SideBar } from "../../styles";

export const SidePayment = styled(SideBar)`
    h2 {
        font-size: 16px;
        font-weight: 700;
        color: ${colors.colorOrange};
        margin-bottom: 16px;
    }
`

export const InfoCardSecurity = styled.div`
    display: flex;
    column-gap: 30px;

    .numberOfSpace {
        width: 120%;
    }
`

export const InfoCard = styled.div`
    display: flex;
    column-gap: 34px;
    flex: auto;
    margin-bottom: 16px;
`