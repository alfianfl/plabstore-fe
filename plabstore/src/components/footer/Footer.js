import React from "react";
import { GridContainer, GridItem } from "../grid";
import "../../assets/css/footer.css";

function Footer() {
  return (
    <GridContainer>
      <div className="footer">
        <GridItem xs={12} sm={12}>
          <div className="nav-footer">
            <GridContainer>
              <GridItem xs={12} sm={12}>
                <div className="d-flex justify-content-between">
                  <div className=" list-footer-nav ml-2 ">
                    <ul>
                      <li>Plabstore for Us</li>
                      <li>Belanja di Plabstore</li>
                      <li>Dapatkan aplikasi</li>
                      <li>Tentang kami</li>
                      <li>Hubungi kami</li>
                    </ul>
                    <ul>
                      <li>Karier</li>
                      <li>Blog</li>
                      <li>Bantuan dan Dukungan</li>
                      <li>Afiliasi</li>
                    </ul>
                    <ul>
                      <li>Persyaratan</li>
                      <li>Kebijakan privasi</li>
                      <li>Peta situs</li>
                    </ul>
                  </div>
                  <div className="btnBahasa">
                    <div className="btn-group dropup mr-3">
                      <button
                        style={{
                          color: " #0f7c90",
                          border: "1px solid  #0f7c90",
                        }}
                        type="button"
                        className="btn btn-bahasa dropdown-toggle"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <strong style={{ color: " #0f7c90" }}>
                          <i className="fas fa-globe mr-2"></i>
                          <span>Bahasa Indonesia</span>
                        </strong>
                      </button>
                      <div className="dropdown-menu">
                        {/* Dropdown menu links */}
                      </div>
                    </div>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer>
              <GridItem xs={12} sm={12}>
                <div className="mr-3 ml-4 mt-5 last-footer">
                  <span style={{ color: "#73726c", fontSize: "12px" }}>
                    Plabstore © 2021 plabstore, Inc. © 2021 Plabstore, Inc.
                  </span>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </GridItem>
      </div>
    </GridContainer>
  );
}

export default Footer;
