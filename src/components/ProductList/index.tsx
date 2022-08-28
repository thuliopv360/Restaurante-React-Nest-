import { Product } from "../../types";
import ProductCard from "../ProductCard";
import * as Styled from "./styles";

interface ProductsListProps {
  list: Product[];
  isFavoritesList: boolean;
  handleGetFavorites: () => void ;
  userFavoritesList: Product[];
}

const ProductsList = ({ list, isFavoritesList, handleGetFavorites, userFavoritesList }: ProductsListProps) => {
  return (
    <Styled.ProductsListContainer>
      {list.map((element) => (
        <ProductCard 
        product={element} 
        isFavoritesList={isFavoritesList} 
        handleGetFavorites={handleGetFavorites} key={element.id} />
      ))}
    </Styled.ProductsListContainer>
  );
};

export default ProductsList;
