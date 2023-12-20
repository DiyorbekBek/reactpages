// rrd imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "./pages/Home";
import Earth from "./pages/Earth";
import Venus from "./pages/Venus";

// layout
import RootLayout from "./layout/RootLayout";

function App() {
  const routest = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/earth",
          element: <Earth />,
        },
        {
          path: "/venus",
          element: <Venus />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routest} />;
}

export default App;

// {
//   path: "/",
//   element: <Home />,
// },
// {
//   path: "about",
//   element: <About />,
// },
// {
//   path: "contact",
//   element: <Contact />,
// },
