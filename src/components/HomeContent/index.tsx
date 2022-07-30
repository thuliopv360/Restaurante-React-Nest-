import * as Styled from "./styles";

const HomeContent = () => {
  return (
    <Styled.HomeContent>
      <Styled.HeaderContent>
        <div>
          <Styled.HeaderText>Resturante Fresh</Styled.HeaderText>
          <p>{new Date(Date.now()).toLocaleString()}</p>
        </div>
        <Styled.InputHeader>
          <i className="bi bi-search"></i>
          <input type="text" />
        </Styled.InputHeader>
      </Styled.HeaderContent>
      <section>
        <div>
          <p>Pratos</p>
        </div>
        <div>
          <h2>Escolha seu prato</h2>
          <select name="" id="">
            <option value="1">1</option>
          </select>
        </div>
        <div className="list">
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
        </div>
      </section>
    </Styled.HomeContent>
  );
};

export default HomeContent;
