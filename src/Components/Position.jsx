import React from 'react'

function Position() {
  return (

    <div>
      <section className="mb-9 py-4" id="openPosition">
        <div className="container pb-7">
          <div className="row mb-7">
            <div className="col-lg-6 offset-lg-3 col-md-12">
              <div className="text-center mb-7">
                <h2>Open Positions</h2>
                <p className="mb-0">We're currently looking for help in the following areas:</p>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="location" className="form-label visually-hidden">
                    All Location
                  </label>
                  <select className="form-select" id="location">
                    <option disabled defaultValue>
                      All Location
                    </option>
                    <option value="United States">United States</option>
                    <option value="Germany">Germany</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="department" className="form-label visually-hidden">
                    All Department
                  </label>
                  <select className="form-select" id="department">
                    <option disabled defaultValue>
                      All Department
                    </option>
                    <option value="UI Designer">UI UX Designer</option>
                    <option value="Front End Developer">Front End Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="list-group list-group-flush">
                <a
                  href="#!"
                  className="list-group-item list-group-item-action d-flex align-items-center justify-content-between border-top p-4"
                >
                  <div>
                    <h4 className="mb-1">Technical Program Manager</h4>
                    <span className="text-primary fw-medium">United States</span>
                  </div>
                  <span className="icon-link icon-link-hover link-primary">
                    Apply
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      ></path>
                    </svg>
                  </span>
                </a>
                <a href="#!" className="list-group-item list-group-item-action d-flex align-items-center justify-content-between p-4" aria-current="true">
                           <div>
                              <h4>Software Engineer, Analytics</h4>
                              <span className="text-primary fw-medium">Germany</span>
                           </div>
                           <div>
                              <span className="icon-link icon-link-hover link-primary">
                              Apply
                                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                     <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                 </svg>
                              </span>
                           </div>
                        </a>
                        <a href="#!" className="list-group-item list-group-item-action d-flex align-items-center justify-content-between border-bottom p-4" aria-current="true">
                           <div>
                              <h4>Product Marketing Manager</h4>
                               <span className="text-primary fw-medium">Australia</span>
                            </div>
                            <div>
                               <span className="icon-link icon-link-hover link-primary">
                                  Apply
                                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                     <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path>
                                  </svg>
                               </span>
                            </div>
                        </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Position;

    