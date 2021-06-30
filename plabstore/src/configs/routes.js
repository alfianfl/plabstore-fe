import { Home, Profile, EditProfile } from "../pages";
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
