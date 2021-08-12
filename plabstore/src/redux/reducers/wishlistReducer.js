const initialState = [];

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WISHLIST_PRODUCT":
      return [
        ...state,
        {
          nama: action.payload.nama,
          harga: action.payload.harga,
          gambar: action.payload.gambar,
          qty: action.payload.qty,
          id: action.payload.id,
          size: action.payload.size,
          gender: action.payload.gender,
          jenis: action.payload.jenis,
        },
      ];

    case "DELETE_WISHLIST_PRODUCT":
      return state.filter((product, index) => index !== action.id);
    default:
      return state;
  }
};
export default wishlistReducer;
