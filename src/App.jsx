import Root from "./routes/root"
import ErrorPage from "./error-page";
import AvisoLegal from "./routes/aviso-legal";
import Privacidad from "./routes/privacidad";
import Navbar from "./Navbar";
import "./styles/global.css"; // import de estilos globales

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/privacidad",
    element: <Privacidad />
  },
  {
    path: "/aviso-legal",
    element: <AvisoLegal/>
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
