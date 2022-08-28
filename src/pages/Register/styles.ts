import styled, { css } from "styled-components";
import ParedeDeFundo from "../../assets/logo_patterns/tela-de-fundo.jpg";

export const RegisterPageContainer = styled.div`
  ${({ theme }) => css`
    background-image: url(${ParedeDeFundo});
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const RegisterFormContainer = styled.form`
  ${({ theme }) => css`
    border-radius: 15px;
    width: 50%;
    height: 90vh;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: ${theme.colors.baseBg2};
    display: flex;
    align-items: center;

    p {
      color: red;
    }
    div {
      margin: 0.2rem 0;
      padding-top: 0.4rem;
    }
    input {
      margin: 0.1rem;
    }
  `}
`;

export const LoginLogoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 11rem;
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
