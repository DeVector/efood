import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  display: block;
    
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
  }

  .container {
    position: relative;
    padding-top: 214px;
    display: flex;
    align-items: flex-end;
    z-index: 1;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 768px;
      padding-left: 16px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 332px;
    }
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

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 24px;
    }
`