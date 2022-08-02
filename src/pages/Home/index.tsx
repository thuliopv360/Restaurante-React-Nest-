import { SearchIcon } from "../../assets/icons";
import HomeContent from "../../components/HomeContent";
import Menu from "../../components/Menu";
import OrderDetails from "../../components/OrderDetails";
import * as Styled from "./styles";
//import HomeContainer from "./styles"

const Home = () => {
  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <HomeContent />
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;
