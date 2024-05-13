
import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
    return (
        <div>
            {/* nav-- */}
              <Navbar/>
            {/* outlet-- */}
           <div className="min-h-[calc(100vh-141px)] lg:min-h-[calc(100vh-382px)]">
           <Outlet/>
           </div>
            {/* footer-- */}
           <Footer/>
        </div>
    );
};

export default Main;