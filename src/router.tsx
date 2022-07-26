import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SettingsCategories from "./pages/SettingsCategories";
import SettingsProducts from "./pages/SettingsProducts";
import SettingsTables from "./pages/SettingsTables";
import SettingsUsers from "./pages/SettingsUsers";

const Router = () => {
  const { logged } = useAuth();

  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/settings/products" element={<SettingsProducts />} />
          <Route path="/settings/categories" element={<SettingsCategories />} />
          <Route path="/settings/table" element={<SettingsTables />} />
          <Route path="/settings/users" element={<SettingsUsers />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </>
      )}
      <Route
        path="*"
        element={<Navigate to={logged ? "/" : "/login"} replace />}
      />
    </Routes>
  );
};

export default Router;
