import { Outlet, useLocation } from "react-router-dom";
import HomeNav from "./Home/homeNav";
import Nav from "./Nav";

function App() {
  const location = useLocation();

  return (
    <div>
      {
        location.pathname === '/' && (
          <HomeNav />
        )
      }
      <Nav></Nav>
      <Outlet />
    </div>
  );
}

export default App;
