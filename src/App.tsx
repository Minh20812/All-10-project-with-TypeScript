import MenuButton from "./MenuButton";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <MenuButton />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
