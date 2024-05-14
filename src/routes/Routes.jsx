import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import Main from "../layout/Main";
import Home from "../pages/Home";
import PrivateRoute from "../privateRoutes/PrivateRoute";
import AddFood from "../pages/AddFood";
import AvailableFood from "../pages/AvailableFood";
import FoodDetails from "../pages/FoodDetails";
import MyFood from "../pages/MyFood";
import UpdateFood from "../pages/UpdateFood";
import MyFoodRequest from "../pages/MyFoodRequest";
import ErrorPage from "../pages/ErrorPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
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
            path: '/availableFood',
            element: <AvailableFood/>
        },
        {
            path: '/addFood',
          element: <PrivateRoute>
            <AddFood/>
          </PrivateRoute>
        },
        {
            path: '/foodDetails/:id',
          element: <PrivateRoute>
            <FoodDetails/>
          </PrivateRoute>,
        },
        {
            path: '/myFood',
          element: <PrivateRoute>
            <MyFood/>
          </PrivateRoute>,
        },
        {
          path: '/updateFood/:id',
          element: (
            <PrivateRoute>
              <UpdateFood/>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/foodDetails/${params.id}`)
        },
        {
          path: '/myFoodRequest',
        element: <PrivateRoute>
          <MyFoodRequest/>
        </PrivateRoute>,
      },
        
    ]
  },
]);

export default router;
