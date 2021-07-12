import {
  Home,
  Profile,
  EditProfile,
  Produk,
  DetailProduct,
  StatusPembelian,
  ProdukAdmin,
  Transaksi,
  User
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

export const routeAdmin = [
  {
    name: "DefaultDashboard",
    path: () => {
      return "/";
    },
    component: ProdukAdmin,
  },
  {
    name: "ProdukAdmin",
    path: () => {
      return "/ProdukAdmin";
    },
    component: ProdukAdmin,
  },
  {
    name: "Transaksi",
    path: () => {
      return "/Transaksi";
    },
    component: Transaksi,
  },
  {
    name: "User",
    path: () => {
      return "/User";
    },
    component: User,
  },
]
