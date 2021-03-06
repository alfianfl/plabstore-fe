import React from "react";

import { GridContainer, GridItem } from "../../components/grid";
import { JustifyCenter } from "../../components/flex";
import swal from "sweetalert";

function StatusPembelian() {
  const checkout = () => {
    swal({
      title: "Apakah barang sudah sampai?",
      text: "Terima pesanan hanya ketika barang sudah sampai",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(() =>
      swal("Poof! Selamat pesanan telah diterima!", {
        icon: "success",
      })
    );
  };
  return (
    <GridContainer>
      <JustifyCenter>
        <GridItem lg={12} xs={12}>
          <h3 className="text-center my-3">Tabel Invoice Pembeli</h3>
          <div className="table-invoice my-5" style={{ overflow: "scroll" }}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Nama Barang</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Status Pesanan</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kemeja polo lev'is</td>
                  <td>10</td>
                  <td>Rp 2.000.000</td>
                  <td>
                    <span style={{ color: "red" }}>Tunggu komfirmasi</span>
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={checkout}
                      className="btn btn-success"
                      id="TooltipExample"
                    >
                      Terima Pesanan
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </GridItem>
      </JustifyCenter>
    </GridContainer>
  );
}

export default StatusPembelian;
