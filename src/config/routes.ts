import Home from "../pages/home";
import Dashboard from "../pages/Dashboard";
import About_complaints from "../pages/About_complaints";
import About from "../pages/About"
import Complaints from "../pages/Complaints"

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "Dashboard",
    },
    {
      path: "/About_complaints",
      component: About_complaints,
      name: "About Complaints",
    },
    {
      path: "/About",
      component: About,
      name: "About",
    },
    {
      path: "/Complaints",
      component: Complaints,
      name: "Complaints",
    },
];

export default routes