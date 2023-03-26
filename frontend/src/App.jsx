import {
  createBrowserRouter,
  Route,
  Link,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import LandingLayout from "./layout/LandingLayout";
import DashBoardLayout from "./layout/DashboardLayout";
//layout
import RootLayout from "./layout/DashboardLayout";

//pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<DashBoardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
