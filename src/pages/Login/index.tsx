import Input from "../../components/Input";
import * as Styled from "./styles";
import Button from "../../components/Button";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Logo from "../../assets/logo_patterns/logo.png";
import axios from "axios";

interface LoginProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setLogged }: LoginProps) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      const data = {
        email,
        password,
      };

      axios
        .post(
          "https://api-restaurante-production.up.railway.app/auth/login",
          data
        )
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setLogged(true);
          navigate("/");
          toast.success("Login bem sucedido! teste");
        })
        .catch(() => {
          toast.error("Login Invalido!");
        });

      return;
    }
    toast.error("Preencha os campos do Login!");
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
