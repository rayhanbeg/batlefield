import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import Main from "../layout/Main";
import Home from "../pages/Home";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import AddFood from "../pages/AddFood";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage/>,
    children: [
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/registration',
            element: <Registration/>
        },
        {
            path: '/addFood',
          element: <PrivateRoute>
            <AddFood/>
          </PrivateRoute>
        },
        
    ]
  },
]);

export default router;
