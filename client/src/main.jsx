import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import AboutList from "./pages/AboutList";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutList />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
