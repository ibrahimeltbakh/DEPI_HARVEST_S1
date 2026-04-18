import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import About from "./pages/About";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/Not Found/NotFound";
import Shop from "./pages/Shop";
import ProductDetailsCard from "./components/Cards/ProductDetailsCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      // errorElement: <h1 style={{ color: "red" }}>404 Not Found </h1>,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        {
          path: "shop",
          element: <Shop />,
          children: [
            {
              index: true,
              element: (
                <h1 style={{ color: "teal" }}> Laptop category Products </h1>
              ),
            },
            {
              path: "laptop",
              element: (
                <h1 style={{ color: "teal" }}> Laptop category Products </h1>
              ),
            },
            {
              path: "phone",
              element: (
                <h1 style={{ color: "teal" }}> phone category Products </h1>
              ),
            },
            {
              path: "screen",
              element: (
                <h1 style={{ color: "teal" }}> Screen category Products </h1>
              ),
            },
            {
              path: "tv",
              element: (
                <h1 style={{ color: "teal" }}> tv category Products </h1>
              ),
            },
          ],
        },

        { path: "cart", element: <Cart /> },
        { path: "login", element: <Login /> },
        { path: "productDetails/:id", element: <ProductDetailsCard /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
