import {
  Home,
  Profile,
  EditProfile,
  Produk,
  DetailProduct,
  Wishlist,
  Checkout,
  StatusPembelian,
} from "../pages";
export const routes = [
  {
    name: "Home",
    path: () => {
      return "/";
    },
    exact: true,
    component: Home,
  },
  {
    name: "Wishlist",
    path: () => {
      return "/wishlist";
    },
    exact: true,
    component: Wishlist,
  },
  {
    name: "Checkout",
    path: () => {
      return "/checkout";
    },
    exact: true,
    component: Checkout,
  },
  {
    name: "Status Pembelian",
    path: () => {
      return "/status-pembelian";
    },
    exact: true,
    component: StatusPembelian,
  },
  {
    name: "Profile",
    path: () => {
      return "/Profile";
    },
    exact: true,
    component: Profile,
  },
  {
    name: "EditProfile",
    path: () => {
      return "/EditProfile";
    },
    exact: true,
    component: EditProfile,
  },
  {
    name: "Produk",
    path: () => {
      return "/Produk";
    },
    exact: true,
    component: Produk,
  },
  {
    name: "DetailProduk",
    path: () => {
      return "/Produk/:id";
    },
    exact: true,
    component: DetailProduct,
  },
];
