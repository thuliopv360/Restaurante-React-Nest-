import styled, { css } from "styled-components";

interface CategoriesNavigationButtonProps {
  active?: boolean;
}

export const HeaderContent = styled.header`
  padding: 2rem;
  width: 63vw;
  height: 15%;
  display: flex;
  justify-content: space-between;
`;

export const HomeContent = styled.div`
  background-color: #252836;
  section {
    width: 90%;
    text-align: center;
  }
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Big Shoulders Inline Display";
  }
`;

export const HeaderParagraph = styled.p`
  font-family: "Barlow";
`;

export const InputHeader = styled.div`
  width: 173px;
  height: 48px;
  background: #2d303e;
  border: solid 1px #393c49;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 10px;

  input {
    background: #2d303e;
    width: 120px;
    height: 30px;
    color: #fff;
    font-size: 14px;
    :focus {
      outline: none;
    }
  }
`;

export const CategoriesNavigationBar = styled.div`
  width: 92%;
  height: 3vh;
  border-bottom: 1px solid #393c49;
  display: flex;
`;

export const CategoriesNavigationButton = styled.button<CategoriesNavigationButtonProps>`
  color: #393c49;
  border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.4rem;
  background-color: #252836;
  :hover {
    color: #ffffff;
  }
  ${({ active }) =>
    active &&
    css`
      color: #6cea69;
      border-bottom: 2px solid #6cea69;
    `}
`;

export const ProductsHeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const TableSelect = styled.select`
  width: 165px;
  height: 48px;
  background-color: #e26b6b;
  border: 1px solid #393c49;
  border-radius: 8px;
  color: #fff;
  padding: 0 1rem;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;
