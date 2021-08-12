export const AddWishlist = (wishlist) => {
  return {
    type: "ADD_WISHLIST_PRODUCT",
    payload: wishlist,
  };
};
export const DeleteWishlist = (id) => {
  return {
    type: "DELETE_WISHLIST_PRODUCT",
    id: id,
  };
};
