import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

// import Loader from "../components/Loader";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/Loader";

const PrivateRoute = ({children}) => {
    // console.log(children);
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    
  
  if(user) {
    return children

  }
  if(loading) {
    return <Loader/>
}
  return <Navigate to='/login' state={location?.pathname } replace={true}></Navigate>
  
};

export default PrivateRoute;