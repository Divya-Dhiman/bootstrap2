import React from 'react';
import imageb1 from '../Imageb1.jpg';
import imageb2 from '../imageb2.jpg';
import imageb3 from '../imageb3.jpg';
import imageb4 from '../imageb4.jpg';
import imageb5 from '../imageb5.jpg';



function Image() {
  return (
    <div>
      <div class="my-xl-0 my-4">
            <div class="mx-auto overflow-x-hidden">
               <div class="row row-cols-lg-5 row-cols-md-3 row-cols-2 justify-content-center g-1 mb-lg-7">
                  <div class="col">
                     <figure>
                        <img src={imageb1} alt="career" class="img-fluid"></img>
                     </figure>
                  </div>
                  <div class="col">
                     <figure>
                        <img src={imageb2} alt="career" class="img-fluid"></img>
                     </figure>
                  </div>
                  <div class="col">
                     <figure>
                        <img src={imageb3} alt="career" class="img-fluid"></img>
                     </figure>
                  </div>
                  <div class="col col-md-6">
                     <figure>
                        <img src={imageb4} alt="career" class="img-fluid"></img>
                     </figure>
                  </div>
                  <div class="col-12 col-md-6">
                     <figure>
                        <img src={imageb5} alt="career" class="img-fluid"></img>
                     </figure>
                  </div>
               </div>
            </div>
            <div class="container py-5">
               <div class="row">
                  <div class="col-lg-6 col-md-6">
                     <div class="mb-4 mb-sm-0">
                        <small class="text-uppercase ls-md fw-bold text-primary">Our culture</small>
                        <p class="mb-0 lead mt-3">We base our philosophy on the principles of learning, collaboration, transparency, experimentation and passion.</p>
                     </div>
                  </div>
                  <div class="offset-xl-1 col-xl-4 col-md-6">
                     <ul class="mb-0 list-unstyled">
                        <li class="mb-2 d-flex">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check-circle-fill text-dark mt-1" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                           </svg>
                           <span class="ms-2">
                              We are
                              <span class="text-dark fw-semibold">goal-driven</span>
                              and
                              <span class="text-dark fw-semibold">dedicated</span>
                           </span>
                        </li>
                        <li class="mb-2 d-flex">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check-circle-fill text-dark mt-1" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                           </svg>
                           <span class="ms-2">
                              We
                              <span class="text-dark fw-semibold">use our own tools</span>
                              every day
                           </span>
                        </li>
                        <li class="mb-2 d-flex">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check-circle-fill text-dark mt-1" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                           </svg>
                           <span class="ms-2">
                              We thrive together with our
                              <span class="text-dark fw-semibold">community</span>
                           </span>
                        </li>
                        <li class="mb-2 d-flex">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check-circle-fill text-dark mt-1" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                           </svg>
                           <span class="ms-2">
                              We are
                              <span class="text-dark fw-semibold">customer obsessed</span>
                           </span>
                        </li>
                        <li class="mb-2 d-flex">
                           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-check-circle-fill text-dark mt-1" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                           </svg>
                           <span class="ms-2">
                              We believe in
                              <span class="text-dark fw-semibold">people's ability to grow</span>
                           </span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
    </div>
  )
}

export default Image
