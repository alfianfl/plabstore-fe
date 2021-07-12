import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../../assets/css/cardProduct.css";

import ReactPaginate from "react-paginate";

import { Button } from "../buttons";

function CardProduct() {
  const [products] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
  ]);
  const [sizes] = useState([
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
    { size: "XXL" },
  ]);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 8;
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(products.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="product">
      <div className="container-fluid">
        <div className="row justify-content-md-center justify-content-lg-start">
          {products
            .slice(pagesVisited, pagesVisited + usersPerPage)
            .map((product) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mx-lg-0 my-4 mx-md-5 mx-0">
                <div className="mx-lg-0 mx-3">
                  <div className="card-product">
                    <div
                      className="thumb-img-product"
                      style={{
                        backgroundImage: ` url("https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60")`,
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
                                <span className="checkmark">{size.size} </span>
                              </label>
                            </div>
                          ))}
                        </div>

                        <div className="button-beli">
                          <Link
                            to={`produk/${product.id}`}
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
                        Baju Kemeja Polo
                      </h5>

                      <p className="card-text" style={{ fontSize: "14px" }}>
                        Stok: 150
                      </p>
                      <p className="price">
                        <strong>Rp 20.000</strong>
                      </p>
                      <div style={{ width: "30%", display: "flex" }}>
                        <div className="mr-2">
                          <Button
                            size="small"
                            variant="contained"
                            color="secondary"
                          >
                            Gamis
                          </Button>
                        </div>
                        <div>
                          <Button
                            size="small"
                            variant="contained"
                            background="#94D0CC"
                          >
                            <span style={{ color: "white" }}>Pria</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
    </div>
  );
}

export default CardProduct;
