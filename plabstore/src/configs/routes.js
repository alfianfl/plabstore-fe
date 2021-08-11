import {
  Home,
  Profile,
  EditProfile,
  Produk,
  DetailProduct,
  Wishlist,
  Checkout,
  StatusPembelian,
  ProdukAdmin,
  Transaksi,
  User,
  RiwayatPembelian,
  AddProduct,
  EditProduct,
  Diskon,
  EditDiskon,
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
    name: "Riwayat Pembelian",
    path: () => {
      return "/riwayat-pembelian";
    },
    exact: true,
    component: RiwayatPembelian,
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
      return "/listProduk";
    },
    exact: true,
    component: Produk,
  },
  {
    name: "Produk",
    path: () => {
      return "/listProduk/:kategori";
    },
    exact: true,
    component: Produk,
  },
  {
    name: "DetailProduk",
    path: () => {
      return "/listProduk/detailProduk/:id";
    },
    exact: true,
    component: DetailProduct,
  },
  {
    name: "DetailProduk",
    path: () => {
      return "/detailProduk/:id";
    },
    exact: true,
    component: DetailProduct,
  },
];

export const routeAdmin = [
  {
    name: "DefaultDashboard",
    path: () => {
      return "/dashboard";
    },
    component: ProdukAdmin,
  },
  {
    name: "ProdukAdmin",
    path: () => {
      return "/dashboard/produk";
    },
    component: ProdukAdmin,
  },
  {
    name: "Transaksi",
    path: () => {
      return "/dashboard/transaksi";
    },
    component: Transaksi,
  },
  {
    name: "User",
    path: () => {
      return "/dashboard/user";
    },
    component: User,
  },
  {
    name: "AddProduct",
    path: () => {
      return "/dashboard/produk/add";
    },
    component: AddProduct,
  },
  {
    name: "EditProduct",
    path: () => {
      return "/dashboard/produk/edit/:id";
    },
    component: EditProduct,
  },
  {
    name: "Diskon",
    path: () => {
      return "/dashboard/diskon";
    },
    component: Diskon,
  },
  {
    name: "EditDiskon",
    path: () => {
      return "/dashboard/diskon/edit/:id";
    },
    component: EditDiskon,
  },
];
