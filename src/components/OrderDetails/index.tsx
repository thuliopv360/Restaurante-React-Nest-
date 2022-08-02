import Button from "../Button";
import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <header>
        <h2>Pedido #12</h2>
        <div>
          <button>Comer No Local</button>
          <button>Viagem</button>
          <button>Delivery</button>
        </div>
      </header>
      <div>
        <div>
          <h3>Item</h3>
          <h3>Qtd</h3>
          <h3>Preço</h3>
        </div>
        <div className="checkout-cards-container">
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
        </div>
      </div>
      <div>
        <div>
          <p>Desconto: </p>
          <p>R$ 0,00</p>
        </div>
        <div>
          <p>Sub Total</p>
          <p>R$ 0,00</p>
        </div>
        <Button
          text="Comer no local"
          onClick={() => {}}
          size="large"
          variant="disabled"
        />
      </div>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
