import {
  createBrowserRouter,
  Route,
  Link,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import {  AuthProvider } from "./context/AuthContext";

//layout
import DashBoardLayout from "./layout/DashboardLayout";
import LandingLayout from "./layout/LandingLayout";
import SignUpLayout from "./layout/SignUpLayout";

//pages
import Home from "./pages/Home";
import Dashboard from "./pages/DashboardHome";
import How from "./pages/How";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<How />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<DashBoardLayout />}>
          <Route path="/dashboard/home" element={<Dashboard />} />
        </Route>

        <Route element={<SignUpLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}></Route>
        </Route>
      </>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
