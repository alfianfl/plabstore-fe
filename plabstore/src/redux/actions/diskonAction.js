import axios from "axios";
export const fetchDiskon = () => {
    return (dispatch) => {
        dispatch(fetchDiskonRequest());
        axios
            .get(`http://localhost:3004/diskons`)
            .then((response) => {
                const Diskon = response.data;
                dispatch(fetchDiskonSuccess(Diskon));
            })
            .catch((err) => {
                const errMsg = err.message;
                dispatch(fetchDiskonFailure(errMsg));
            });
    };
};
export const fetchDiskonRequest = () => {
    return {
        type: "FETCH_DISKON_REQUEST",
    };
};

export const fetchDiskonSuccess = (Diskon) => {
    return {
        type: "FETCH_DISKON_SUCCESS",
        payload: Diskon,
    };
};
export const fetchDiskonFailure = (errMsg) => {
    return {
        type: "FETCH_DISKON_FAILURE",
        payload: errMsg,
    };
};
