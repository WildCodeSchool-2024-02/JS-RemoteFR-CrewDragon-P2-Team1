import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import AboutList from "./pages/AboutList";
import Contact from "./pages/Contact";
import CountrySelectionManager from "./components/CountrySelectionManager";
import destinations from "./data/destinations";
import ManageLikes from "./components/LikeDestinationsManagers";

function Main() {
  // create managers
  const selectionManager = new CountrySelectionManager();
  const manageLikes = new ManageLikes();
  const router = createBrowserRouter([
    {
      element: (
        <App selectionManager={selectionManager} destinations={destinations} />
      ),
      children: [
        {
          path: "/",
          element: (
            <Home
              manageLikes={manageLikes}
              selectionManager={selectionManager}
              destinations={destinations}
            />
          ),
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

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
