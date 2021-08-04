import React from "react";

import "../../assets/css/detailProductPage.css";

import img1 from "../../assets/img/images.jpg";
import img2 from "../../assets/img/images2.jpg";

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
  const [products] = React.useState([
    { img: img1 },
    { img: img2 },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4d7wDgfF3ujiJt6cyboHWau_IZDU2tAfpeoT32zEuohL8QZ19RFw5g1xbmJbO9g5dZNNu7HVO&usqp=CAc",
    },
  ]);

  const changeImage = (id) => {
    document.querySelector("#featured").src = id;
  };
  const imageZoom = (imgID) => {
    let img = document.getElementById(imgID);
    let lens = document.getElementById("lens");

    lens.style.backgroundImage = `url( ${img.src} )`;

    let ratio = 2.5;

    lens.style.backgroundSize =
      img.width * ratio + "px " + img.height * ratio + "px";

    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens() {
      /*
          Function sets sets position of lens over image and background image of lens
          1 - Get cursor position
          2 - Set top and left position using cursor position - lens width & height / 2
          3 - Set lens top/left positions based on cursor results
          4 - Set lens background position & invert
          5 - Set lens bounds
      
          */

      //1
      let pos = getCursor();
      //console.log('pos:', pos)

      //2
      let positionLeft = pos.x - lens.offsetWidth / 2;
      let positionTop = pos.y - lens.offsetHeight / 2;

      //5
      if (positionLeft < 0) {
        positionLeft = 0;
      }

      if (positionTop < 0) {
        positionTop = 0;
      }

      if (positionLeft > img.width - lens.offsetWidth / 3) {
        positionLeft = img.width - lens.offsetWidth / 3;
      }

      if (positionTop > img.height - lens.offsetHeight / 3) {
        positionTop = img.height - lens.offsetHeight / 3;
      }

      //3
      lens.style.left = positionLeft + "px";
      lens.style.top = positionTop + "px";

      //4
      lens.style.backgroundPosition =
        "-" + pos.x * ratio + "px -" + pos.y * ratio + "px";
    }

    function getCursor() {
      /* Function gets position of mouse in dom and bounds
           of image to know where mouse is over image when moved
          
          1 - set "e" to window events
          2 - Get bounds of image
          3 - set x to position of mouse on image using pageX/pageY - bounds.left/bounds.top
          4- Return x and y coordinates for mouse position on image
          
           */

      let e = window.event;
      let bounds = img.getBoundingClientRect();

      //console.log('e:', e)
      //console.log('bounds:', bounds)
      let x = e.pageX - bounds.left;
      let y = e.pageY - bounds.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;

      return { x: x, y: y };
    }
  };
  return (
    <div className="detail-produk">
      <section id="detail-produk">
        <GridContainer>
          <GridItem xs={12} lg={12}>
            <div className="container px-sm-0  py-3 px-lg-3 d-flex  flex-wrap">
              <div className="thumb-image-produk mb-5">
                <div
                  className="gambar-produk"
                  id="img-container"
                  onMouseOver={() => imageZoom("featured")}
                  style={{ position: "relative" }}
                >
                  <div id="lens"></div>
                  <img
                    id="featured"
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4d7wDgfF3ujiJt6cyboHWau_IZDU2tAfpeoT32zEuohL8QZ19RFw5g1xbmJbO9g5dZNNu7HVO&usqp=CAc`}
                    alt="produk"
                    height="330px"
                    width="100%"
                  />
                </div>
                <div className="thumb-other-image mt-5 d-flex justify-content-between">
                  {products.map((product, index) => (
                    <div key={index}>
                      <img
                        src={product.img}
                        alt="img"
                        className="img-fluid"
                        height="110px"
                        width="110px"
                        onClick={() => changeImage(product.img)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="deskripsi-produk ml-lg-3 ml-sm-0 "
                style={{ zIndex: "999999" }}
              >
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
                        className="w-100"
                        style={{
                          textDecoration: "none",
                          color: "white",
                          display: "block",
                        }}
                      >
                        Tambah ke keranjang
                      </a>
                    </button>
                    <button className="btn-wishlist mx-1 mb-3">
                      <a
                        href="/wishlist"
                        className="w-100"
                        style={{
                          textDecoration: "none",
                          color: "white",
                          display: "block",
                        }}
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
