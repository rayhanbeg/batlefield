import React from "react";
import ReactDOM from "react-dom/client";
import {Toaster} from "react-hot-toast"
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>
);