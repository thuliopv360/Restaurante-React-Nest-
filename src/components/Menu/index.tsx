import * as Styled from "./styles";
import Logo from "../../assets/logo_patterns/logo.png";
import { HomeIcon, LogoutIcon, SettingsIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../contexts/auth";

interface MenuProps {
  path: "home" | "settings";
}

const Menu = ({ path }: MenuProps) => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  return (
    <Styled.MenuContainer>
      <img src={Logo} alt="Logo" />
      <nav>
        <Styled.MenuItem active={path === "home"}>
          <Styled.MenuItemButton
            onClick={() => navigate("/")}
            active={path === "home"}
          >
            <HomeIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
        <Styled.MenuItem active={path === "settings"}>
          <Styled.MenuItemButton
            onClick={() => navigate("/settings/products")}
            active={path === "settings"}
          >
            <SettingsIcon />
          </Styled.MenuItemButton>
        </Styled.MenuItem>
      </nav>
      <Styled.MenuItem logout>
        <Styled.MenuItemButton
          onClick={() => {
            logout();
            toast.success("logout bem sucedido");
          }}
        >
          <LogoutIcon />
        </Styled.MenuItemButton>
      </Styled.MenuItem>
    </Styled.MenuContainer>
  );
};

export default Menu;
