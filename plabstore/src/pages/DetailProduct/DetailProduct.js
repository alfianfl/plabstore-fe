import React from "react";

import "../../assets/css/detailProductPage.css";

import { CardProductSwiper } from "../../components/cards";
import { GridContainer, GridItem } from "../../components/grid";

function DetailProduct() {
  const [sizes] = React.useState([
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
    { size: "XXL" },
  ]);
  return (
    <div className="detail-produk">
      <section id="detail-produk">
        <GridContainer>
          <GridItem xs={12} lg={12}>
            <div className="container px-sm-0  py-3 px-lg-3 d-flex  flex-wrap">
              <div className="thumb-image-produk mb-5">
                <div className="gambar-produk">
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4d7wDgfF3ujiJt6cyboHWau_IZDU2tAfpeoT32zEuohL8QZ19RFw5g1xbmJbO9g5dZNNu7HVO&usqp=CAc`}
                    alt="produk"
                    height="330px"
                    width="100%"
                  />
                </div>
              </div>
              <div className="deskripsi-produk ml-lg-3 ml-sm-0 ">
                <div className="px-1">
                  <h4>Kemeja Polo Lev`is</h4>
                  <div>Kemeja polos kualitas terbaik</div>
                  <p>
                    <strong>Stok : 20 </strong>
                  </p>
                  <p>
                    <strong>Rp 200.000 </strong>
                  </p>
                </div>
                <div className="list-size-detail">
                  {sizes.map((size, index) => (
                    <div key={index}>
                      <label className="container-radio">
                        <input
                          type="radio"
                          defaultChecked="checked"
                          name="radio"
                          value={size.size}
                        />
                        <span className="checkmark">{size.size} </span>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="thumb-checkout" style={{ height: "70%" }}>
                  <div className="my-2">
                    <h4>Kuantitas</h4>
                    <button className="btn-kuantitas">-</button>
                    <input type="number" className="kuantitas" disabled />
                    <button className="btn-kuantitas">+</button>
                  </div>
                  <div className="d-flex my-4 w-100 justify-content-between">
                    <button className="btn-beli mr-1 mb-3">
                      <a
                        href="/checkout"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Tambah ke keranjang
                      </a>
                    </button>
                    <button className="btn-wishlist mx-1 mb-3">
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        href="/wishlist"
                      >
                        Tambah ke wishlist
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} lg={12}>
            <h3 className="text-center my-5 mx-3">Anda mungkin menyukai ini</h3>
            <CardProductSwiper />
          </GridItem>
        </GridContainer>
      </section>
    </div>
  );
}

export default DetailProduct;
