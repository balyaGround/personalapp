export const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="container">
          <div className="section-title text-center mb-5" data-aos="fade-down">
            <h2>Contact</h2>
          </div>

          <div className="row" data-aos="zoom-in" data-aos-delay="500">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Jl.Sekata GG.Alfalah No.13 Kec. Medan Barat Kota Medan</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>Balyazulfikar@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+62 852 7535 7068</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8917413216554!2d98.66787051525144!3d3.612234151137348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031318d0c4d1493%3A0x9695b9c5ab048926!2sKoi%20Brothers!5e0!3m2!1sen!2sid!4v1625402654120!5m2!1sen!2sid"
                  frameborder="0"
                  style={{ border: 0, width: 100 + "%", height: 290 + "px" }}
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea className="form-control" name="message" rows="10" required></textarea>
                </div>
                <div className="text-center mt-5">
                  <button className="btn-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#84d5cc"
            fill-opacity="1"
            d="M0,224L30,213.3C60,203,120,181,180,181.3C240,181,300,203,360,202.7C420,203,480,181,540,181.3C600,181,660,203,720,224C780,245,840,267,900,234.7C960,203,1020,117,1080,90.7C1140,64,1200,96,1260,117.3C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>
    </div>
  );
};
