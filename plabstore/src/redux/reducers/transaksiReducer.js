const initialState = {
    loading: false,
    transaksi: [],
    error: "",
};
const transaksiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TRANSAKSI_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_TRANSAKSI_SUCCESS":
            return {
                loading: false,
                transaksi: action.payload,
                error: "",
            };
        case "FETCH_TRANSAKSI_FAILURE":
            return {
                loading: false,
                transaksi: [],
                error: action.payload,
            };
        default:
            return state;
    }
};
export default transaksiReducer;
