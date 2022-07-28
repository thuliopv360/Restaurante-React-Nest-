import * as Styled from "./styles";
import logo from "../../assets/logo_patterns/logo.png";
import homeIcon from "../../assets/icons/home.svg";
import logout from "../../assets/icons/logout.svg";
import settings from "../../assets/icons/settings.svg";

const Menu = () => {
  return (
    <Styled.MenuContainer>
      <img src={logo} alt="logo" />
      <div>
        <img src={homeIcon} alt="logo" />
        <img src={settings} alt="setting" />
      </div>
      <img src={logout} alt="logoout" />
    </Styled.MenuContainer>
  );
};

export default Menu;
