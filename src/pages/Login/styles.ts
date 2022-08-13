import styled, { css } from "styled-components";
import ParedeDeFundo from "../../assets/logo_patterns/tela-de-fundo.jpg";

export const LoginPageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background-image: url(${ParedeDeFundo});
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LoginFormContainer = styled.form`
  ${({ theme }) => css`
    width: 30rem;
    height: 30rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 8px;
    box-shadow: 3px 3px 6px 3px rgba(108, 234, 105, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
    box-sizing: border-box;
  `}
`;

export const LoginLogoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 12.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    box-sizing: border-box;
    h1 {
      width: 20rem;
      height: 9.2rem;
      text-transform: uppercase;
      font-family: ${theme.constants.logoFontFamily};
      color: ${theme.colors.textColor};
      font-size: 62px;
      text-align: center;
      border-top: 2px double ${theme.colors.textColor};
      border-bottom: 2px double ${theme.colors.textColor};
      border-spacing: 1px;
    }
    img {
      width: 8rem;
      height: 8rem;
    }
  `}
`;

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: red;
    align-self: center;
    font-size: small;
    height: 2rem;
    padding: 0 2rem;
    text-align: center;
  `}
`;
