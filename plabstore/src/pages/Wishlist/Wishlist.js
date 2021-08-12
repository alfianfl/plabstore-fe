import React from "react";
import { GridContainer, GridItem } from "../../components/grid";
import { Button } from "../../components/buttons";
import { JustifyBetween, JustifyCenter } from "../../components/flex";

import { BsFillTrashFill } from "@react-icons/all-files/bs/BsFillTrashFill";
import "../../assets/css/wishlist.css";

import { DeleteWishlist, AddCartProduct } from "../../redux";

import { useSelector, useDispatch } from "react-redux";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist);

  const deleteWishlist = (index) => {
    dispatch(DeleteWishlist(index));
  };

  return (
    <div className="wishlist px-lg-5 px-2 px-md-2 my-5">
      <GridContainer>
        <GridItem lg={12} sm={12}>
          <h1 className="text-center">Wishlist</h1>

          {wishlistData.map((item, index) => (
            <div
              key={index}
              className="wishlist-thumbnail  py-3 px-lg-3 px-0 mt-lg-4 mt-3"
            >
              <GridContainer>
                <JustifyCenter>
                  <GridItem lg={4} xs={10} sm={12}>
                    <div className="thumb-image">
                      <img
                        src={item.gambar}
                        alt=""
                        className="img-fluid"
                        height="300px"
                        width="100%"
                      />
                    </div>
                  </GridItem>
                  <GridItem lg={8} xs={12} sm={12}>
                    <JustifyBetween>
                      <div className=" ml-lg-5  ml-3 w-50">
                        <h3>{item.nama}</h3>
                        <p
                          className=" product-rescription my-lg-5 my-0"
                          style={{ textAlign: "left" }}
                        >
                          Dapatkan jaminan 100% uang kembali jika produk yang
                          Anda terima tidak sesuai foto dan deskripsi kami.
                          Produk berkualitas dengan bahan terbaik.
                        </p>
                        <strong className=" mt-lg-0 mt-3 my-lg-2 my-0 d-block">
                          QTY: {item.qty}
                        </strong>
                        <div
                          className="thumb-button-category my-lg-2 my-0"
                          style={{ width: "30%" }}
                        >
                          <div className="mr-2 my-lg-2 my-0 ">
                            <Button
                              size="small"
                              variant="contained"
                              color="secondary"
                            >
                              {item.jenis}
                            </Button>
                          </div>
                          <div className="my-lg-2 my-0">
                            <Button
                              size="small"
                              variant="contained"
                              background="#94D0CC"
                            >
                              <span style={{ color: "white" }}>
                                {item.gender}
                              </span>
                            </Button>
                          </div>
                        </div>
                        <strong className=" mt-lg-0 mt-3 d-block ">
                          Rp {item.harga}
                        </strong>
                      </div>
                      <div className="d-flex flex-column justify-content-between align-items-end">
                        <span
                          onClick={() => dispatch(DeleteWishlist(index))}
                          className="hapus-wishlist"
                        >
                          <BsFillTrashFill />
                        </span>

                        <strong className=" mt-lg-0 mt-3 total d-flex justify-content-end w-100">
                          Total: {item.qty * item.harga}
                        </strong>
                      </div>
                    </JustifyBetween>
                  </GridItem>
                </JustifyCenter>

                <strong className=" d-flex justify-content-end w-100">
                  <a
                    href="/checkout"
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <button
                      className="button button--anthe py-lg-2 py-2 px-lg-4 px-3 mr-2 "
                      onClick={() => {
                        dispatch(
                          AddCartProduct({
                            nama: item.nama,
                            harga: item.harga,
                            gambar: item.gambar,
                            qty: item.qty,
                            id: item.id,
                            size: item.size,
                          })
                        );
                        deleteWishlist(index);
                      }}
                    >
                      {" "}
                      <span>Checkout</span>
                    </button>
                  </a>
                </strong>
              </GridContainer>
            </div>
          ))}
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default Wishlist;
