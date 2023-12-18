import React from 'react';
import imageb1 from '../Imageb1.jpg';
import imageb2 from '../imageb2.jpg';
import imageb3 from '../imageb3.jpg';
import imageb4 from '../imageb4.jpg';
import imageb5 from '../imageb5.jpg';

function Image() {
  return (
    <>
      <div className="my-xl-0 my-4">
        <div className="mx-auto overflow-x-hidden">
          <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2 justify-content-center g-1 mb-lg-7">
            {[imageb1, imageb2, imageb3, imageb4, imageb5].map((image, index) => (
              <div className="col" key={index}>
                <figure>
                  <img src={image} alt={`career-${index + 1}`} className="img-fluid" />
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="mb-4 mb-sm-0">
                <small className="text-uppercase ls-md fw-bold text-primary">Our culture</small>
                <p className="mb-0 lead mt-3">
                  We base our philosophy on the principles of learning, collaboration, transparency, experimentation, and passion.
                </p>
              </div>
            </div>
            <div className="offset-xl-1 col-xl-4 col-md-6">
              <ul className="mb-0 list-unstyled">
                {[
                  'We are goal-driven and dedicated.',
                  'We use our own tools every day.',
                  'We thrive together with our community.',
                  'We are customer obsessed.',
                  'We believe in people\'s ability to grow.',
                ].map((item, index) => (
                  <li className="mb-2 d-flex" key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-check-circle-fill text-dark mt-1" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                    </svg>
                    <span className="ms-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
