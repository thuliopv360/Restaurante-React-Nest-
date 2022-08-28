import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
}

export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    width: 13.5rem;
    height: 18.5rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: ${theme.constants.bodyFontFamily};
    position: relative;
    text-align: center;
    padding-top: 3rem;
    box-sizing: border-box;

    img {
      width: 8rem;
      position: absolute;
      top: -3.3rem;
    }

    p{
      margin-bottom: 1rem;
    }
  `}
`;
