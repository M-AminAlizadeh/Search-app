import {
  createBrowserRouter
} from "react-router-dom";
import Layout from "./Layout";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout/> 
  },
  {
    path: '/search',
    element: <Layout results={true}/>
  }
]) 
