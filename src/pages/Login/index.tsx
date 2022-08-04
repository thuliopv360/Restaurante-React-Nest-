import Input from "../../components/Input";
import * as Styled from "./styles";

const Login = () => {
  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <div>
          <h1>Restaurante Fresh</h1>
          <img src="" alt="" />
        </div>
        <Input />
        <Input />
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;
