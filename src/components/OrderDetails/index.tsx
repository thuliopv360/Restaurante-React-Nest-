import Button from "../Button";
import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <header>
        <h2>Pedido #12</h2>
        <div>
          <Button text="Comer No Local" size="small" onClick={() => {}} />
          <Button
            text="P/ Viagem "
            size="small"
            variant="disabled"
            onClick={() => {}}
          />
          <Button
            text="Delivery"
            size="small"
            variant="disabled"
            onClick={() => {}}
          />
        </div>
      </header>
      <div>
        <Styled.OrderDetailsContainerHeader>
          <h3>Item</h3>
          <h3>Qtd</h3>
          <h3>Preço</h3>
        </Styled.OrderDetailsContainerHeader>
        <div className="checkout-cards-container">
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
        </div>
      </div>
      <Styled.OrderDetailsFooter>
        <div>
          <p>Desconto: </p>
          <p>R$ 0,00</p>
        </div>
        <div>
          <p>Sub Total</p>
          <p>R$ 0,00</p>
        </div>
        <Button text="Comer no local" onClick={() => {}} size="large" />
      </Styled.OrderDetailsFooter>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
