import {
  createBrowserRouter,
  Route,
  Link,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

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
import Profile from "./pages/Profile";
import ActiveBugs from "./pages/activeBugs";
import Statistics from "./pages/Statistics";
import Projects from "./pages/Projects";
import Organization from "./pages/Organization";
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
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/activebugs" element={<ActiveBugs />} />
          <Route path="/dashboard/statistics" element={<Statistics />} />
          <Route path="/dashboard/projects" element={<Projects />} />
          <Route path="/dashboard/organization" element={<Organization />} />
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
