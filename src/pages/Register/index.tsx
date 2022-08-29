import { yupResolver } from "@hookform/resolvers/yup";
import { StyledInput } from "../../assets/styles/globalStyles";
import * as yup from "yup";
import { useAuth } from "../../contexts/auth";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { api } from "../../services";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import Logo from "../../assets/logo_patterns/logo.png";
import { useNavigate } from "react-router-dom";

interface RegisterData {
  name: string; //
  email: string; //
  password: string; //
  country: string;
  state: string; //
  cities: string; //
  cep: number; //
  district: string; //
  street: string;
  number: number; //
}

const registerSchema = yup.object().shape({
  name: yup.string().required("Campo de nome obrigatorio!"),
  email: yup
    .string()
    .email("O formato do e-mail esta invalido")
    .required("Campo do e-mail obrigatorio"),
  password: yup
    .string()
    .min(8, "Senha deve ter no minimo 8 caracteres")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      "Sua senha deve ter no minimo um caracter especial, um número e uma letra maiúscula"
    )
    .required("Campo de senha obrigatorio!"),
  country: yup.string().required("Campo de Pais obrigatorio!"),
  state: yup.string().required("Campo de Estado obrigatorio!"),
  cities: yup.string().required("Campo de cidade obrigatorio!"),
  cep: yup.number().positive().integer().required("Campo de cep obrigatorio!"),
  district: yup.string().required("Campo de bairro obrigatorio!"),
  street: yup.string().required("Campo de Rua obrigatorio!"),
  number: yup
    .number()
    .typeError("Numero da sua casa")
    .required("Please provide plan cost.")
    .min(0, "Too little")
    .max(5000, "Very costly!")
    .required("Campo de numero obrigatorio!"),
});

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(registerSchema) });

  const handleRegister = (data: RegisterData) => {
    api
      .post("/users", data)
      .then((res) => {
        login({ token: res.data.token, user: res.data.user });
      })
      .catch(() => {
        toast.error("Usuário ou senha Invalido!");
      });
  };

  return (
    <Styled.RegisterPageContainer>
      <Styled.RegisterFormContainer onSubmit={handleSubmit(handleRegister)}>
        <Styled.LoginLogoContainer>
          <h1>Restaurante Fresh</h1>
          <img alt="logo" src={Logo} />
        </Styled.LoginLogoContainer>
        <p>
          {errors.name?.message ||
            errors.email?.message ||
            errors.password?.message ||
            errors.country?.message ||
            errors.state?.message ||
            errors.cities?.message ||
            errors.cep?.message ||
            errors.district?.message ||
            errors.street?.message ||
            errors.number?.message}
        </p>
        <StyledInput
          inputSize="large"
          placeholder="Nome"
          {...register("name")}
        />
        <StyledInput
          inputSize="large"
          placeholder="E-mail"
          {...register("email")}
        />
        <StyledInput
          inputSize="large"
          placeholder="password"
          type="password"
          {...register("password")}
        />
        <StyledInput
          inputSize="large"
          placeholder="country"
          {...register("country")}
        />
        <StyledInput
          inputSize="large"
          placeholder="state"
          {...register("state")}
        />
        <StyledInput
          inputSize="large"
          placeholder="cities"
          {...register("cities")}
        />
        <StyledInput
          inputSize="large"
          type="number"
          placeholder="cep"
          {...register("cep")}
        />
        <StyledInput
          inputSize="large"
          placeholder="district"
          {...register("district")}
        />
        <StyledInput
          inputSize="large"
          placeholder="street"
          {...register("street")}
        />
        <StyledInput
          inputSize="large"
          placeholder="numero"
          {...register("number")}
          type="number"
        />
        <div>
          <Button text="Cadastrar" size="x-large" type="submit" />
        </div>
      </Styled.RegisterFormContainer>
    </Styled.RegisterPageContainer>
  );
};

export default Register;
