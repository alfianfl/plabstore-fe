import { Home, Profile } from "../pages";
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
];
