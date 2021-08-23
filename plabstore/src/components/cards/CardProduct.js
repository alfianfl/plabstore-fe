import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../../assets/css/cardProduct.css";

import ReactPaginate from "react-paginate";

import { Button } from "../buttons";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../redux";
import { useParams } from "react-router-dom";
function CardProduct() {
  const productData = useSelector((state) => state.product);
  const [cardLoad] = useState([{}, {}, {}, {}, {}, {}]);
  const dispatch = useDispatch();
  const { kategori } = useParams();
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
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(productData.products.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return productData.loading ? (
    <div className="row">
      {cardLoad.map((product) => (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center mx-lg-0 mb-4 mt-0 mx-md-5 mx-0">
          <div class="card-skeleton"></div>
        </div>
      ))}
    </div>
  ) : productData.error ? (
    <h2>{productData.error}</h2>
  ) : (
    <div className="product" id="product-list">
      <div className="container-fluid">
        <div className="d-lg-flex d-none justify-content-between align-items-center d-mobile">
          <h2>List Product</h2>
          <div>
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
        {kategori ? (
          <div className="row justify-content-md-center justify-content-lg-start">
            {productData.products
              .filter((product) => product.category.jenis === kategori)
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((product) => (
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center mx-lg-0 mb-4 mt-0 mx-md-5 mx-0">
                  <div className="mx-lg-0 mx-3">
                    <div className="card-product">
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

                      <div className="card-body ">
                        <h5 className="card-title font-weight-bold">
                          {product.nama}
                        </h5>

                        <p className="card-text" style={{ fontSize: "14px" }}>
                          Stok: {product.stok}
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
                </div>
              ))}
          </div>
        ) : (
          <div className="row justify-content-md-center justify-content-lg-start">
            {productData.products
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((product) => (
                <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-flex justify-content-center mx-lg-0 mb-4 mt-0 mx-md-5 mx-0">
                  <div className="mx-lg-0 mx-3">
                    <div className="card-product">
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

                      <div className="card-body ">
                        <h5 className="card-title font-weight-bold">
                          {product.nama}
                        </h5>

                        <p className="card-text" style={{ fontSize: "14px" }}>
                          Stok: {product.stok}
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
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CardProduct;
