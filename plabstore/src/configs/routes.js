import { Home, Profile, EditProfile, Dashboard } from "../pages";
export const routes = [
  {
    name: "Home",
    path: () => {
      return "/";
    },
    component: Home,
  },
  {
    name: "Profile",
    path: () => {
      return "/Profile";
    },
    component: Profile,
  },
  {
    name: "EditProfile",
    path: () => {
      return "/EditProfile";
    },
    component: EditProfile,
  },
  
];

export const routeAdmin = [
  {
    name: "Dashboard",
    path: () => {
      return "/Dashboard";
    },
    component: Dashboard,
  },
]
