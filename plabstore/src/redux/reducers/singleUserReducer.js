const initialState = {
    loading: false,
    user: {},
    error: "",
};
const singleUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_SINGLEUSER_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_SINGLEUSER_SUCCESS":
            return {
                loading: false,
                user: action.payload,
                error: "",
            };
        case "FETCH_SINGLEUSER_FAILURE":
            return {
                loading: false,
                user: {},
                error: action.payload,
            };
        default:
            return state;
    }
};
export default singleUserReducer;
