import toast from "react-hot-toast";
import { api } from "../../services";
import { Favorite, Product, User } from "../../types";
import Button from "../Button";
import * as Styled from "./styles";

interface ProductCardProps {
  product: Product;
  isFavoritesList: boolean;
  handleGetFavorites: () => void ;
}

const ProductCard = ({ product, isFavoritesList, handleGetFavorites }: ProductCardProps) => {
  const token = localStorage.getItem("token");

  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const user: User = JSON.parse(localStorage.getItem("user") || "");


  const handleSetFavorites = () => {
    const data = {
      userId: user.id,
      productName: product.name
    };

    api
      .post("/favorites", data, headers)
      .then(() => {
        handleGetFavorites(); 
        toast.success("Produto favoritado com sucesso")}
      )
      .catch(() => toast.error("Produto ja favoritado"));
  }

  const handleRemoveFavorite = async () => {
    const res = await api.get<Favorite[]>(
      `/favorites/user/${user?.id}`, 
      headers
    );

    const favoriteId: string | undefined =  res.data
    .filter((element) => element.productName === product.name 
    ).find((element) => element.userId === user.id)?.id
    
    api.delete(`/favorites/${favoriteId}`, headers).then(() => {
        handleGetFavorites(); 
        toast.success("Produto desfavoritado com sucesso")
      })
      .catch(() => toast.error("Error"));
  }; 

  return (
    <Styled.CardContainer>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <Button 
        onClick={isFavoritesList? handleRemoveFavorite : handleSetFavorites} 
        text={isFavoritesList ? "Desfavoritar" : "Favoritar"}
        size="small"
      />
    </Styled.CardContainer>
  );
};

export default ProductCard;
