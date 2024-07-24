import {
  createBrowserRouter
} from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (<App/>) 
  },
]) 
