import { useState } from "react";
import { SwiperBasic } from "../swiper";
import { SwiperSlide } from "swiper/react";

function CardProduct() {
  const [products] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ]);

  return (
    <SwiperBasic>
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="card mx-2" style={{ width: "18rem" }}>
            <div
              className="thumb-img-product d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: ` url("https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60")`,
                height: "250px",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="button-beli">
                <button className="btn ">Beli Produk</button>
              </div>
            </div>

            <div className="card-body ">
              <h5 className="card-title font-weight-bold">Baju Kemeja Polo</h5>

              <p className="card-text" style={{ fontSize: "14px" }}>
                Stok: 150
              </p>
              <p className="price">
                <strong>Rp 20.000</strong>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperBasic>
  );
}

export default CardProduct;
