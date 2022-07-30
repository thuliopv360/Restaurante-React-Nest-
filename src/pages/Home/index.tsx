import HomeContent from "../../components/HomeContent";
import Menu from "../../components/Menu";
import * as Styled from "./styles";
//import HomeContainer from "./styles"

const Home = () => {
  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <HomeContent />
      {/* <div className="home-content">
        <header>
          <div>
            <h1>Resturante Fresh</h1>
            <p>{new Date(Date.now()).toLocaleString()}</p>
          </div>
          <div>
            <img src="" alt="search-icon" />
            <input type="text" />
          </div>
        </header>
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
      </div> */}
      <aside>
        <header>
          <h2>Pedido 12</h2>
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
          <button>Continuar para o pagamento</button>
        </div>
      </aside>
    </Styled.HomeContainer>
  );
};

export default Home;
