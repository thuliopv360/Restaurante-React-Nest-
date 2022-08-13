import { StyledInput } from "../../assets/styles/globalStyles";
import Button from "../Button";

const ProductModal = () => {
  return (
    <div>
      <div>
        <StyledInput placeholder="Nome do Produto" />
        <StyledInput placeholder="Descricao do Produto" />
        <StyledInput placeholder="Ingredientes do Produto" />
        <StyledInput type="number" placeholder="Preco do Produto" />
        <StyledInput placeholder="URL da imagem do Produto" />
        <StyledInput placeholder="Categoria do Produto" />
        <div>
          <Button text="Cancelar" />
          <Button text="Enviar" />
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
