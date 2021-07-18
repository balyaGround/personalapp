import css from "../img/css.png";
import html from "../img/html.png";
import java from "../img/javascript.png";
export const MySkils = () => {
  return (
    <div>
     <section id="Myskils">
      <div className="container justify-content-center">
        <div className="row text-center mb-3" data-aos="fade-down">
          <div className="col">
            <h3>My Skliss</h3>
          </div>
        </div>
        <div className="row justify-content-center" data-aos="flip-left" data-aos-delay="500">
          <div className="col-9">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1000">
                  <img src={java} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={css} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={html} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffff"
          fill-opacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,138.7C384,128,480,160,576,176C672,192,768,192,864,192C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
    </div>
  );
};
