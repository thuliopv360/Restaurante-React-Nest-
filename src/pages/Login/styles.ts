import styled, { css } from "styled-components";

export const LoginPageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LoginFormContainer = styled.div`
  ${({ theme }) => css`
    width: 21.5rem;
    height: 25.975rem;
    background-color: ${theme.colors.baseBg2};
    display: flex;
    border-radius: 8px;
    box-shadow: 3px 3px 6px 3px rgba(108, 23, 0, 0);
    justify-content: center;
    align-items: center;
    padding: 1.625rem;
    box-sizing: border-box;
  `}
`;
