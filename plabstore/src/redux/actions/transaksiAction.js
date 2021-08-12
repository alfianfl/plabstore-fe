import axios from "axios";
export const fetchTransaksi = () => {
    return (dispatch) => {
        dispatch(fetchTransaksiRequest());
        axios
            .get(`http://localhost:3004/transaksis`)
            .then((response) => {
                const Transaksi = response.data;
                dispatch(fetchTransaksiSuccess(Transaksi));
            })
            .catch((err) => {
                const errMsg = err.message;
                dispatch(fetchTransaksiFailure(errMsg));
            });
    };
};
export const fetchTransaksiRequest = () => {
    return {
        type: "FETCH_TRANSAKSI_REQUEST",
    };
};

export const fetchTransaksiSuccess = (Transaksi) => {
    return {
        type: "FETCH_TRANSAKSI_SUCCESS",
        payload: Transaksi,
    };
};
export const fetchTransaksiFailure = (errMsg) => {
    return {
        type: "FETCH_TRANSAKSI_FAILURE",
        payload: errMsg,
    };
};
