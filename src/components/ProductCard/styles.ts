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
      height: 5rem;
      position: absolute;
      top: -3.3rem;
      border-radius: 1.6rem;
    }

    button {
      margin: 3rem 0 0 0;
      font-weight: 700;
      transition: all 0.5s;
      color: black;
    }

    button:hover {
      transform: scale(1.4);
    }

    p {
      margin: 1rem 0.7rem 0 0.7rem;
      text-align: start;
    }

    p#margin {
      margin: 1rem 0 0 8rem;
      color: #f46a75;
      font-weight: 800;
      font-size: 1.5rem;
    }
  `}
`;
