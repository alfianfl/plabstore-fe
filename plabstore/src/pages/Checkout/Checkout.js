import React from "react";
import { GridContainer, GridItem } from "../../components/grid";
import { JustifyBetween, JustifyCenter } from "../../components/flex";
import "../../assets/css/checkout.css";
import { TextField } from "../../components/form";
import { Button } from "../../components/buttons";

import { AddProduct, RemoveProduct } from "../../redux";

import { useSelector, useDispatch } from "react-redux";
import { DeleteCartProduct } from "../../redux";

import ReactMidtrans from "react-midtrans/src";

import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

import { BsFillTrashFill } from "@react-icons/all-files/bs/BsFillTrashFill";

function Checkout() {
  const cartData = useSelector((state) => state.cartProduct);
  const dispatch = useDispatch();
  const itemPrice = cartData.reduce((a, c) => a + c.qty * c.harga, 0);

  return (
    <div className="checkout px-lg-4 px-2 px-md-2 my-5">
      <h1 className="text-center mb-5">Shopping Bag</h1>
      <div className="mt-lg-0 mt-5 d-flex ">
        <div class="content mr-2">
          <button class="button button--anthe">
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              {" "}
              <span>Home</span>
            </a>
          </button>
        </div>
        <div class="content mr-2">
          <button class="button button--anthe">
            <a
              href="/wishlist"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              {" "}
              <span>Wishlist</span>
            </a>
          </button>
        </div>
        <div class="content">
          <button class="button button--anthe">
            <a
              href="/listProduk"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              {" "}
              <span>Other Product</span>
            </a>
          </button>
        </div>
      </div>
      <GridContainer>
        <GridItem lg={8} xs={12}>
          {cartData
            .filter((item) => item.id !== 0)
            .map((item, index) => (
              <div
                key={index}
                className="checkout-thumbnail py-3 px-lg-3 px-0 mt-lg-4 mt-3 "
              >
                <GridContainer>
                  <JustifyCenter>
                    <GridItem lg={4} xs={3} sm={12}>
                      <div className="thumb-image">
                        <img
                          src={item.gambar}
                          alt="produk"
                          className={"img-fluid"}
                          width="100%"
                          height="200px"
                        />
                      </div>
                    </GridItem>
                    <GridItem lg={8} xs={9} sm={12}>
                      <JustifyBetween>
                        <div className=" ml-3 ">
                          <h3>{item.nama}</h3>

                          <div className="rounded-size my-lg-4 my-3 ">
                            <div>{item.size}</div>
                          </div>

                          <strong className=" mt-lg-0 mt-4 d-block">
                            Rp {item.harga}
                          </strong>
                        </div>
                        <div className="d-flex flex-column justify-content-between align-items-end">
                          <span
                            className="hapus-wishlist"
                            onClick={() => dispatch(DeleteCartProduct(index))}
                          >
                            <BsFillTrashFill />
                          </span>
                          <div className="qty-product">
                            <div class="number">
                              <span
                                class="minus"
                                onClick={() => dispatch(RemoveProduct(index))}
                              >
                                -
                              </span>
                              <input
                                type="text"
                                value={item.qty < 0 ? 0 : item.qty}
                                disabled
                              />
                              <span
                                class="plus"
                                onClick={() => dispatch(AddProduct(index))}
                              >
                                +
                              </span>
                            </div>
                          </div>
                          <div className=" mt-lg-0 mt-2">
                            <strong>
                              Total: Rp{" "}
                              {item.harga * item.qty < 0
                                ? 0
                                : item.harga * item.qty}
                            </strong>
                          </div>
                        </div>
                      </JustifyBetween>
                    </GridItem>
                  </JustifyCenter>
                </GridContainer>
              </div>
            ))}
        </GridItem>
        <GridItem lg={4} xs={12}>
          <div className="voucher-form mt-4">
            <h4>Anda punya voucher diskon?</h4>
            <TextField
              placeholder={"Masukkan voucher diskon..."}
              id={"standard-voucher-input"}
            />
          </div>
          <div className="checkout-form mt-3 px-lg-4 px-2">
            <div className="d-flex justify-content-between">
              <h4>Alamat</h4>
              <span className="ganti-alamat">Ganti Alamat</span>
            </div>
            <div>
              {" "}
              <strong>
                {" "}
                Jl. Sekian Kali 2 no. 19 Rt 09 Rw 10 blok J/09
              </strong>{" "}
            </div>
            <div className="my-3">
              <strong>Total Harga</strong>
              <h2>Rp {itemPrice < 0 ? 0 : itemPrice}</h2>
            </div>
            <ReactMidtrans clienttKey={"your-key"} token={"payment-token"}>
              <div className="btn-bayar">
                <Button size="medium" variant="contained" background="#94D0CC">
                  Bayar
                </Button>
              </div>
            </ReactMidtrans>
          </div>
        </GridItem>
      </GridContainer>
      <FloatingWhatsApp
        position="right"
        zIndex={999}
        size="55px"
        phone="089524013023"
      />
    </div>
  );
}

export default Checkout;
