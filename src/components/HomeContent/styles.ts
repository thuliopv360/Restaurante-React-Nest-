import styled from "styled-components";

export const HeaderContent = styled.header`
  padding: 2rem;
  width: 63vw;
  height: 15%;
  display: flex;
  justify-content: space-between;
`;

export const HomeContent = styled.div`
  background-color: #393c49;
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
