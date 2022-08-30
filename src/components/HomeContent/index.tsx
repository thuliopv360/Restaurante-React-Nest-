import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import ProductsList from "../ProductList";
import * as Styled from "./styles";
import { useEffect, useState } from "react";
import { Category, Favorite, Product, User } from "../../types";
import { useProducts } from "../../contexts/products";
import { useCategories } from "../../contexts/categories";
import { api } from "../../services";

const HomeContent = () => {
  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  const { categories } = useCategories();
  const { products } = useProducts();

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0] || ({} as Category)
  );

  const [isFavoritesList, setIsFavoritesList] = useState<boolean>(false);
  const [userFavoritesList, setUserFavoritesList] = useState<Product[]>([]);

  const filteredProducts: Product[] = products.filter(
    (element) => selectedCategory && element.categoryId === selectedCategory.id
  );

  const handleGetFavorites = async () => {
    const token = localStorage.getItem("token");

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const user: User = JSON.parse(localStorage.getItem("user") || "");
    //todas as vezes que usar o json parse no typescript tem que colocar o :
    // || ""

    const res = await api.get<Favorite[]>(
      `/favorites/user/${user?.id}`,
      headers
    );

    const favorites = res.data;

    const favoritesNames: string[] = favorites.map(
      (elememt) => elememt.productName
    );

    const favoritesList: Product[] = products.filter((elem) => {
      return favoritesNames.includes(elem.name);
    });

    setUserFavoritesList(favoritesList);
  };

  useEffect(() => {
    handleGetFavorites();
  }, [products]);

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
          {categories.length > 0 &&
            categories.map((element) => {
              return (
                <Styled.CategoriesNavigationButton
                  active={element.name === selectedCategory.name}
                  onClick={() => {
                    setSelectedCategory(element);
                    setIsFavoritesList(false);
                  }}
                  key={element.id}
                >
                  {element.name}
                </Styled.CategoriesNavigationButton>
              );
            })}
          <Styled.CategoriesNavigationButton
            active={isFavoritesList}
            onClick={() => {
              setIsFavoritesList(true);
              setSelectedCategory({} as Category);
            }}
          >
            Favoritos
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
        <ProductsList
          userFavoritesList={userFavoritesList}
          isFavoritesList={isFavoritesList}
          handleGetFavorites={handleGetFavorites}
          list={isFavoritesList ? userFavoritesList : filteredProducts}
        />
      </section>
    </Styled.HomeContent>
  );
};

export default HomeContent;
