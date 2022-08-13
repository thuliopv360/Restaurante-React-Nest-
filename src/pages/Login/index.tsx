import * as Styled from "./styles";
import Logo from "../../assets/logo_patterns/logo.png";
import Button from "../../components/Button";
import { toast } from "react-hot-toast";
import { api } from "../../services";
import { useAuth } from "../../contexts/auth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledInput } from "../../components/Input/styles";

interface LoginData {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("O formato de e-mail esta invlido")
    .required("campoo de e-mail obrigatorio"),
  password: yup
    .string()
    .min(8, "Senha deve ter no minimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no minimo um caracter especial, um número e uma letra maiúscula"
    ),
});

const Login = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(loginSchema) });

  const handleLogin = (data: LoginData) => {
    api
      .post("/auth/login", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("Usuário ou senha Invalido!");
      });
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer onSubmit={handleSubmit(handleLogin)}>
        <Styled.LoginLogoContainer>
          <h1>Restaurante Fresh</h1>
          <img alt="logo" src={Logo} />
        </Styled.LoginLogoContainer>
        <StyledInput placeholder="Email" {...register("email")} />
        <StyledInput
          type="password"
          placeholder="Senha"
          {...register("password")}
        />
        <Button text="Entrar" size="large" type="submit" />
        <Styled.ErrorMessage>
          {errors.email?.message || errors.password?.message}
        </Styled.ErrorMessage>
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
