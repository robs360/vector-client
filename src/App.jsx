import { Outlet, useLocation } from "react-router-dom";
import HomeNav from "./Home/homeNav";
import Nav from "./Nav";
import Footer from "./Home/Footer";

function App() {
  const location = useLocation();

  return (
    <div>
      <div className=""><HomeNav /></div>
      <div className="mt-10">
      <Nav></Nav>
      <Outlet />
      <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;
