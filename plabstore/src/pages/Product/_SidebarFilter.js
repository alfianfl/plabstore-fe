import React from "react";

function SidebarFilter() {
  return (
    <div className="card px-4 py-4 mx-lg-0 mx-3">
      {/* Section: Sidebar */}
      <section>
        {/* Section: Filters */}
        <section>
          <h5>Filters</h5>
          {/* Section: Condition */}
          <section className="mb-5">
            <h6 className="font-weight-bold mb-3">Condition</h6>
            <div className="form-check  mb-3">
              <input
                type="checkbox"
                className="form-check-input filled-in"
                id="new"
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor="new"
              >
                New
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input filled-in"
                id="used"
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor="used"
              >
                Used
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input filled-in"
                id="collectible"
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor="collectible"
              >
                Collectible
              </label>
            </div>
            <div className="form-check mb-3 pb-1">
              <input
                type="checkbox"
                className="form-check-input filled-in"
                id="renewed"
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor="renewed"
              >
                Renewed
              </label>
            </div>
          </section>

          {/* Section: Price */}
          <section className="mb-4">
            <h6 className="font-weight-bold mb-3">Price</h6>
            <div className="form-check  mb-3">
              <input
                type="radio"
                className="form-check-input"
                id="under25"
                name="materialExampleRadios"
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor="under25"
              >
                Under $25
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                type="radio"
                className="form-check-input"
                id={2550}
                name="materialExampleRadios"
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor={2550}
              >
                $25 to $50
              </label>
            </div>
            <div className="form-check  mb-3">
              <input
                type="radio"
                className="form-check-input"
                id={50100}
                name="materialExampleRadios"
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor={50100}
              >
                $50 to $100
              </label>
            </div>
            <div className="form-check  mb-3">
              <input
                type="radio"
                className="form-check-input"
                id={100200}
                name="materialExampleRadios"
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor={100200}
              >
                $100 to $200
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                type="radio"
                className="form-check-input"
                id="200above"
                name="materialExampleRadios"
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor="200above"
              >
                $200 &amp; Above
              </label>
            </div>
            {/* <form>
              <div className="d-flex align-items-center mt-4 pb-1">
                <div className="md-form md-outline my-0">
                  <input id="from" type="text" className="form-control mb-0" />
                  <label htmlFor="form">$ Min</label>
                </div>
                <p className="px-2 mb-0 text-muted"> - </p>
                <div className="md-form md-outline my-0">
                  <input id="to" type="text" className="form-control mb-0" />
                  <label htmlFor="to">$ Max</label>
                </div>
              </div>
            </form> */}
          </section>
          {/* Section: Price */}
          {/* Section: Size */}
          <section className="mb-4">
            <h6 className="font-weight-bold mb-3">Size</h6>
            <div className="form-check  mb-3">
              <input
                type="checkbox"
                className="form-check-input filled-in"
                id={34}
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor={34}
              >
                34
              </label>
            </div>
            <div className="form-check  mb-3">
              <input
                type="checkbox"
                className="form-check-input filled-in"
                id={36}
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor={36}
              >
                36
              </label>
            </div>
            <div className="form-check  mb-3">
              <input
                type="checkbox"
                className="form-check-input filled-in"
                id={38}
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor={38}
              >
                38
              </label>
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input filled-in"
                id={40}
              />
              <label
                className="form-check-label small text-uppercase card-link-secondary"
                htmlFor={40}
              >
                40
              </label>
            </div>
            <div className="collapse pt-3" id="collapseExample">
              <div className="form-check  mb-3">
                <input
                  type="checkbox"
                  className="form-check-input filled-in"
                  id={42}
                />
                <label
                  className="form-check-label small text-uppercase card-link-secondary"
                  htmlFor={42}
                >
                  42
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input filled-in"
                  id={44}
                />
                <label
                  className="form-check-label small text-uppercase card-link-secondary"
                  htmlFor={44}
                >
                  44
                </label>
              </div>
              <div className="form-check  mb-3">
                <input
                  type="checkbox"
                  className="form-check-input filled-in"
                  id={46}
                />
                <label
                  className="form-check-label small text-uppercase card-link-secondary"
                  htmlFor={46}
                >
                  46
                </label>
              </div>
              <div className="form-check  mb-3">
                <input
                  type="checkbox"
                  className="form-check-input filled-in"
                  id={50}
                />
                <label
                  className="form-check-label small text-uppercase card-link-secondary"
                  htmlFor={50}
                >
                  50
                </label>
              </div>
            </div>
          </section>
          {/* Section: Size */}
        </section>
        {/* Section: Filters */}
      </section>
      {/* Section: Sidebar */}
    </div>
  );
}

export default SidebarFilter;
