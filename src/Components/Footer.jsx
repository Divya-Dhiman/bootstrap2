import React from 'react';
import blog from '../blog.svg';

function Footer() {
  return (
    <footer className="pt-7">
      <div className="container">
        <div className="row">
          <div className="col-xxl-5 col-lg-5 col-md-7">
            <div className="mb-7 mb-xl-0">
              <div className="mb-4">
                <a href="/blog">
                  <img src={blog} alt="blog" className="text-inverse" />
                </a>
              </div>
              <p className="mb-5">
                Build faster websites with Block multipurpose bootstrap 5
                template. Duis imper diet mollis leo, quis ultrices erat
                ultrices simple dummy.
              </p>

              <form className="needs-validation" noValidate>
                <h5 className="mb-3">Subscribe to our newsletter</h5>
                <div className="row g-2">
                  <div className="col-lg-9 col-8">
                    <label htmlFor="subscribeEmail" className="visually-hidden">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="subscribeEmail"
                      placeholder="Email address"
                      required
                    />
                    <div className="invalid-feedback">Please enter email.</div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div>
                      <button type="submit" className="btn btn-primary">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <FooterLinks />
          <div className="container mt-7 mb-3">
            <div className="row align-items-center">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks() {
  return (
    <div className="offset-xxl-1 col-xxl-6 col-lg-6 offset-md-1 col-md-4">
      <div className="row" id="ft-links">
        <LinkCategory title="Landings" items={['Saas', 'Software Company', 'Finance', 'Digital Agency', 'Conference', 'App Template']} />
        <LinkCategory title="Accounts" items={['Register', 'Login', 'Forgot Password', 'Reset Password', 'Profile']} />
        <LinkCategory title="Resources" items={['Docs', 'Support', 'Changelog', 'Help Center', 'Community', 'Webinars']}/>
      </div>
    </div>
  );
}

function LinkCategory({ title, items }) {
  return (
    <div className="col-lg-4 col-12">
      <div className="mb-3 pb-2 d-flex justify-content-between border-bottom border-bottom-lg-0 position-relative">
        <h5>{title}</h5>
        <a className="d-block d-lg-none stretched-link text-inherit" data-bs-toggle={`collapse`} href={`#collapse${title}`} role="button" aria-expanded="false" aria-controls={`collapse${title}`}>
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
      <div className={`collapse d-lg-block`} id={`collapse${title}`} data-bs-parent="#ft-links">
        <ul className="list-unstyled mb-0 py-3 py-lg-0">
          {items.map((item, index) => (
            <li key={index} className="mb-2 text-decoration-none text-reset">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer;
