import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import ProductsList from "../ProductList";
import * as Styled from "./styles";
import { mockedCategories, mockedProducts } from "../../mocks";
import { useState } from "react";
import { Category, Product } from "../../types";

const HomeContent = () => {
  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    mockedCategories[0]
  );

  const filteredProducts: Product[] = mockedProducts.filter(
    (element) => element.categoryId === selectedCategory.id
  );

  const handleChangeCategory = (category: Category) => {
    setSelectedCategory(category);
  };

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
          {mockedCategories.map((element) => {
            return (
              <Styled.CategoriesNavigationButton
                active={element.name === selectedCategory.name}
                onClick={() => handleChangeCategory(element)}
                key={element.id}
              >
                {element.name}
              </Styled.CategoriesNavigationButton>
            );
          })}
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
        <ProductsList list={filteredProducts} />
      </section>
    </Styled.HomeContent>
  );
};

export default HomeContent;
