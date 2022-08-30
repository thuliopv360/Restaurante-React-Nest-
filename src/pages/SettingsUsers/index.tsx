import Menu from "../../components/Menu";
import SettingsMenu from "../../components/SettingsMenu";
import { useUsers } from "../../contexts/users";
import * as Styled from "./styles";

const SettingsUsers = () => {
  const { users } = useUsers();

  return (
    <Styled.SettingsContainer>
      <Menu path="settings" />
      <SettingsMenu path="users" />
      <Styled.EntitiesEditContainer>
        <h2>Usuarios</h2>
        <Styled.EntitiesEditList>
          {users.map((element) => {
            return (
              <Styled.EntityCard key={element.id}>
                <p>{element.name}</p>
              </Styled.EntityCard>
            );
          })}
        </Styled.EntitiesEditList>
      </Styled.EntitiesEditContainer>
    </Styled.SettingsContainer>
  );
};

export default SettingsUsers;
