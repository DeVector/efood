import styled from "styled-components";
import { colors } from "../../styles";

export const Banner = styled.div`
    width: 100%;
    height: 280px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00000080; 
        z-index: 1; 
    }

    .container {
    position: relative;
    padding-top: 214px;
    display: flex;
    align-items: flex-end;
    z-index: 2;
  }
`

export const TagInfo = styled.div`
  background-color: transparent;
  color: ${colors.colorWhite};
  font-size: 32px;
  font-weight: 100;
  padding: 6px 4px;
  margin-right: 8px;
  border-radius: 8px;
  display: inline-block;
`

export const Infos = styled.div`
  position: absolute;
  top: 32px;
`

export const Title = styled.h2`
    color: ${colors.colorWhite};
    font-size: 32px;
    font-weight: 900;
`