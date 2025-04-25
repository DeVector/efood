import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Card = styled.div`
    background-color: ${colors.colorWhite};
    color: ${colors.colorRed};
    position: relative;
    max-width: 472px;
    border: 1px solid ${colors.colorRed};
    height: 100%;

    .inline{
        display: flex;
        justify-content: space-between;
        margin: 8px 8px 16px 8px;
    }

    .inlineImg{
      display: flex;
      justify-content: center;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 340px;
    }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TagInfo = styled.div`
  background-color: ${colors.colorRed};
  color: ${colors.colorOrange};
  font-size: 12px;
  font-weight: bold;
  padding: 6px 4px;
  margin-right: 8px;
  border-radius: 8px;
  display: inline-block;
`

export const Image = styled.img`
  width: 471px;
  height: 217px;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
      max-width: 338px;
  }
`

export const Title = styled.h4`
    font-size: 18px;
    font-weight: 700;
`

export const Rate = styled.span`
    margin-right: 8px;
    font-size: 18px;
    font-weight: 700;
`

export const Describe = styled.p`
    margin-left: 8px;
    margin-right: 8px;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
`

export const Button = styled.button`
    margin: 8px 0px 8px 8px;
    padding: 4px 6px;
    border: 0;
    background-color: ${colors.colorRed};
    color: ${colors.colorOrange};
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`