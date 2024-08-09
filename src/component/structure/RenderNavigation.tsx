import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";

interface AuthDataType {
  user: {
    isAuthenticated: boolean;
  };
  logout: () => void;
}

interface NavItem {
  path: string;
  element: React.ReactNode;
  isPrivate: boolean;
  isMenu: boolean;
  name: string;
}

export const RenderRoutes = () => {
  const { user } = AuthData() as AuthDataType;

  return (
    <Routes>
      {nav.map((r, i) => {
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  );
};

export const RenderMenu = () => {
  const { user, logout } = AuthData() as AuthDataType;

  const MenuItem = ({ r }: { r: NavItem }) => {
    return (
      <div className="menuItem">
        <Link to={r.path}>{r.name}</Link>
      </div>
    );
  };
  return (
    <div className="menu">
      {nav.map((r, i) => {
        if (!r.isPrivate && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else if (user.isAuthenticated && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else return false;
      })}

      {user.isAuthenticated ? (
        <div className="menuItem">
          <Link to={"#"} onClick={logout}>
            Log out
          </Link>
        </div>
      ) : (
        <div className="menuItem">
          <Link to={"login"}>Log in</Link>
        </div>
      )}
    </div>
  );
};
