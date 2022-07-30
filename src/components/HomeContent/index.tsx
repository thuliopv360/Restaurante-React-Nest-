import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import * as Styled from "./styles";

const HomeContent = () => {
  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContent>
      <Styled.HeaderContent>
        <Styled.TitleContainer>
          <h1>Resturante Fresh</h1>
          <p>{formatedDate}</p>
        </Styled.TitleContainer>
        <Styled.InputHeader>
          <SearchIcon />
          <input type="text" placeholder="Procure prato " />
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
