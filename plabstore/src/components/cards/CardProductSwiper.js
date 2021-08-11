import { useState, useEffect } from "react";
import { SwiperBasic } from "../swiper";
import { SwiperSlide } from "swiper/react";
import { Button } from "../buttons";
import "../../assets/css/cardProduct.css";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { fetchProducts } from "../../redux";

function CardProduct({ gender }) {
  const productData = useSelector((state) => state.product);
  const [cardLoad] = useState([{}, {}, {}, {}]);
  const dispatch = useDispatch();
  const [sizes] = useState([
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
    { size: "XXL" },
  ]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return productData.loading ? (
    <SwiperBasic>
      {cardLoad.map((product) => (
        <SwiperSlide key={product.id}>
          <div class="card-skeleton"></div>
        </SwiperSlide>
      ))}
    </SwiperBasic>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <div>
      <div>
        {productData && productData.products && (
          <SwiperBasic>
            {productData.products
              .filter((product) => product.category.jenis === gender)
              .map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="mx-lg-0 mx-3">
                    <div
                      className="card-product mx-2 bg-light"
                      style={{
                        width: "18rem",
                        border: "1px solid #a7a6a6",
                        backgroundColor: "red",
                      }}
                    >
                      <div
                        className="thumb-img-product"
                        style={{
                          backgroundImage: ` url(${product.gambar})`,
                          height: "250px",
                          backgroundSize: "100% 100%",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <form className="form-card">
                          <div className="list-size ">
                            {sizes.map((size, index) => (
                              <div key={index}>
                                <label className="container-radio">
                                  <input
                                    type="radio"
                                    defaultChecked="checked"
                                    name="radio"
                                    value={size.size}
                                  />
                                  <span className="checkmark">
                                    {size.size}{" "}
                                  </span>
                                </label>
                              </div>
                            ))}
                          </div>
                          <div className="button-beli">
                            <Link
                              to={`detailProduk/${product.id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <Button
                                size="medium"
                                variant="contained"
                                background="#94D0CC"
                              >
                                Beli
                              </Button>
                            </Link>
                          </div>
                        </form>
                      </div>

                      <div
                        className="card-body "
                        style={{ backgroundColor: "white" }}
                      >
                        <h5 className="card-title font-weight-bold">
                          {product.nama}
                        </h5>

                        <p className="card-text" style={{ fontSize: "14px" }}>
                          Stok: {product.qty}
                        </p>
                        <p className="price">
                          <strong>Rp {product.harga}</strong>
                        </p>
                        <div style={{ width: "30%", display: "flex" }}>
                          <div className="mr-2">
                            <Button
                              size="small"
                              variant="contained"
                              color="secondary"
                            >
                              {product.category.nama}
                            </Button>
                          </div>
                          <div>
                            <Button
                              size="small"
                              variant="contained"
                              background="#94D0CC"
                            >
                              <span style={{ color: "white" }}>
                                {product.category.jenis}
                              </span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </SwiperBasic>
        )}
      </div>
    </div>
  );
}

export default CardProduct;
