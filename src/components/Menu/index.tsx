import * as Styled from "./styles";
import Logo from "../../assets/logo_patterns/logo.png";
import { HomeIcon, LogoutIcon, SettingsIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";

interface MenuProps {
  path: "home" | "settings";
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Menu = ({ path, setLogged }: MenuProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogged(false);
    navigate("/login");
  };

  return (
    <Styled.MenuContainer>
      <img src={Logo} alt="Logo" />
      <nav>
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuItemButton active={path === "home"}>
            <HomeIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuItemButton active={path === "settings"}>
            <SettingsIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
      </nav>
      <Styled.MenuItem logout>
        <Styled.MenuItemButton onClick={handleLogout}>
          <LogoutIcon />
        </Styled.MenuItemButton>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;
