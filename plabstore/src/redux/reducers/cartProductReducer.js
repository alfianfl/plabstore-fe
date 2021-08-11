const initialState = [
  {
    nama: "action.payload.nama",
    harga: 0,
    gambar: "action.payload.gambar",
    qty: 0,
    id: 0,
  },
];

const cartProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART_PRODUCT":
      const foundItem = state.find((item) => item.id === action.payload.id);
      if (!foundItem) {
        return [
          ...state,
          {
            nama: action.payload.nama,
            harga: action.payload.harga,
            gambar: action.payload.gambar,
            qty: action.payload.qty,
            id: action.payload.id,
          },
        ];
      }
      break;
    case "DELETE_CART_PRODUCT":
      return state.filter((product) => product.id !== action.id);
    case "ADD_PRODUCT":
      const exist = state.find((product) => product.id === action.payload);
      return state.map((product) =>
        product.id === action.payload
          ? { ...exist, qty: exist.qty + 1 }
          : product
      );
    case "REMOVE_PRODUCT":
      const existRemove = state.find(
        (product) => product.id === action.payload
      );
      return state.map((product) =>
        product.id === action.payload
          ? { ...existRemove, qty: existRemove.qty - 1 }
          : product
      );

    default:
      return state;
  }
};
export default cartProductReducer;
