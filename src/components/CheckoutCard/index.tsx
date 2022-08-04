import { useState } from "react";
import toast from "react-hot-toast";
import { Product } from "../../types";
import * as Style from "./styles";

interface CheckoutCardProps {
  product: Product;
}

const CheckoutCard = ({ product }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  return (
    <Style.CheckoutCardContainer>
      <Style.CheckoutCardHeader>
        <img src={product.image} alt={product.name} />
        <div>
          <h5>{product.name}</h5>
          <p>R${product.price}</p>
        </div>
        <Style.ProductQuantityInput
          type="number"
          min="1"
          max="100"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <span>R${(quantity * product.price).toFixed(2)}</span>
      </Style.CheckoutCardHeader>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => toast.error("Sessao em desenvolvimento")}>
          Oi
        </button>
      </div>
    </Style.CheckoutCardContainer>
  );
};

export default CheckoutCard;
