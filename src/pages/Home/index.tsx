import { Dispatch, SetStateAction } from "react";
import HomeContent from "../../components/HomeContent";
import Menu from "../../components/Menu";
import OrderDetails from "../../components/OrderDetails";
import * as Styled from "./styles";

interface HomeProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ setLogged }: HomeProps) => {
  return (
    <Styled.HomeContainer>
      <Menu path="home" setLogged={setLogged} />
      <HomeContent />
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;
