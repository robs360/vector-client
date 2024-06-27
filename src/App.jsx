import { Outlet, useLocation } from "react-router-dom";
import HomeNav from "./Home/homeNav";
import Nav from "./Nav";
import Footer from "./Home/Footer";

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
      <Footer></Footer>
    </div>
  );
}

export default App;
