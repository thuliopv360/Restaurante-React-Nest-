import Input from "../../components/Input";
import * as Styled from "./styles";
import Button from "../../components/Button";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Logo from "../../assets/logo_patterns/Logo.png";
import { mockedUsers } from "../../mocks";

interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogged }: LoginProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (
      email === mockedUsers[0].email &&
      password === mockedUsers[0].password
    ) {
      setLogged(true);
      navigate("/");
      toast.success("Login bem sucedido!");
      return;
    } else if (email === "admin" && password === "admin") {
      setLogged(true);
      navigate("/");
      toast.success("Login bem sucedido!");
      return;
    } else if (email === "Thulio@gmail.com" && password === "123@bc") {
      setLogged(true);
      navigate("/admin");
      toast.success("Pagina de admin");
      return;
    }
    toast.error("Usuário ou senha incorretos.");
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <Styled.LoginLogoContainer>
          <h1>Restaurante Fresh</h1>
          <img alt="logo" src={Logo} />
        </Styled.LoginLogoContainer>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <Button text="Entrar" size="large" onClick={handleLogin} />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
