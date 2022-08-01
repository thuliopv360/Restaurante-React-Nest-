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
        <Styled.CategoriesNavigationBar>
          <Styled.CategoriesNavigationButton active>
            Pratos
          </Styled.CategoriesNavigationButton>
          <Styled.CategoriesNavigationButton>
            Bebidas
          </Styled.CategoriesNavigationButton>
          <Styled.CategoriesNavigationButton>
            Sobremesa
          </Styled.CategoriesNavigationButton>
        </Styled.CategoriesNavigationBar>
        <Styled.ProductsHeaderContainer>
          <h2>Escolha seu prato</h2>
          <Styled.TableSelect defaultValue="">
            <option value="" disabled>
              Selecione a mesa
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </Styled.TableSelect>
        </Styled.ProductsHeaderContainer>
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
