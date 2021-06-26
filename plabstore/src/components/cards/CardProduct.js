import { useState } from "react";
import { SwiperBasic } from "../swiper";
import { SwiperSlide } from "swiper/react";
import { Button } from "../buttons";
import "../../assets/css/cardProduct.css";

function CardProduct() {
  const [products] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);
  const [sizes] = useState([
    { size: "S" },
    { size: "M" },
    { size: "L" },
    { size: "XL" },
    { size: "XXL" },
  ]);

  return (
    <SwiperBasic>
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="mx-lg-0 mx-3">
            <div className="card mx-2 " style={{ width: "18rem" }}>
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
                    <Button
                      size="medium"
                      variant="contained"
                      background="#94D0CC"
                    >
                      Beli
                    </Button>
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
                  <Button size="small" variant="contained" color="secondary">
                    Gamis
                  </Button>
                  <Button size="small" variant="contained" background="#94D0CC">
                    <span style={{ color: "white" }}>Pria</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperBasic>
  );
}

export default CardProduct;
