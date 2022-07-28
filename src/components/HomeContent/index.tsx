import * as Styled from "./styles";

const HomeContent = () => {
  return (
    <Styled.HomeContant>
      <Styled.HeaderContent>
        <div>
          <h1>Resturante Fresh</h1>
          <p>{new Date(Date.now()).toLocaleString()}</p>
        </div>
        <div>
          <img src="" alt="search-icon" />
          <input type="text" />
        </div>
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
    </Styled.HomeContant>
  );
};

export default HomeContent;
