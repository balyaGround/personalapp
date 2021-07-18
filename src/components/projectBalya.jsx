import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Project = () => {
  return (
    <div>
      <section id="Project">
        <div class="container">
          <div class="row text-center mb-5" data-aos="zoom-in">
            <div class="col">
              <h2>My Gallery Project</h2>
            </div>
          </div>
          <div class="row justify-content-evenly" data-aos="flip-right" data-aos-delay="500">
            <div class="col-md-4 mb-3">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZGluZyUyMHBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Landing Page</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3" data-aos="flip-right" data-aos-delay="600">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Portofolio</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3" data-aos="flip-right" data-aos-delay="700">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZGluZyUyMHBhZ2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Company Profile</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3" data-aos="flip-right" data-aos-delay="800">
              <div class="card">
                <img
                  src="https://images.unsplash.com/photo-1603975711481-18b7aaca4caa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">E-commerce</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3" data-aos="flip-right" data-aos-delay="900">
              <div class="card">
                <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Hotel Booking</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#71dde925"
            fill-opacity="1"
            d="M0,128L48,122.7C96,117,192,107,288,117.3C384,128,480,160,576,160C672,160,768,128,864,128C960,128,1056,160,1152,149.3C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
};
