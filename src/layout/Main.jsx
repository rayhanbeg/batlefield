
import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar";

const Main = () => {
    return (
        <div>
            {/* nav-- */}
              <Navbar/>
            {/* outlet-- */}
           <div className="min-h-[calc(100vh-306px)]">
           <Outlet/>
           </div>
            {/* footer-- */}
           
        </div>
    );
};

export default Main;