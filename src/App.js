import { Header } from "./components/organisms/Header/Header"
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/products/:productId",
      element: <ProductDetails />
    }
  ])


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;