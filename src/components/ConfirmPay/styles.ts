import styled from "styled-components";
import { colors, SideBar } from "../../styles";

export const SideConfirm = styled(SideBar)`
    h2{
        font-size: 16px;
        font-weight: 700;
        color: ${colors.colorOrange};
    }

    p{
        margin-top: 16px;
        margin-bottom: 24px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: ${colors.colorOrange};
    }
`