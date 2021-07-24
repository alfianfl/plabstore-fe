export const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        { name: action.product.title, price: action.product.price, id: 1 },
      ];
    case "REMOVE_PRODUCT":
      return state.filter((product) => product.id !== action.id);
    default:
      return state;
  }
};
