import React from "react";
import "./Footer.css";

function Footer() {
  return (
    // <footer className="row font-l justify-content-space-between">
    //  <div className="links d-flex justify-content-around col-6 col-md-4">
    //    <a href="https://vnyouthally.org/#vechungtoi-1">About Us</a>
    //    <span>|</span>
    //    <a href="https://vnyouthally.org/#vechungtoi-1">Contact Us</a>
    //  </div>
    //  <div className="icons d-flex justify-content-around flex-row col-6 col-md-4">
    //    <div>Follow us</div>
    //    <a href="facebook.com">
    //      <i className="fab fa-facebook"></i>
    //    </a>
    //    <a href="google.com">
    //      <i className="fas fa-globe-asia"></i>
    //    </a>
    //  </div>
    <div className="footer-container page-footer">
      <section className="about-us">
        <div className="vya">
          <a
            href="https://vnyouthally.org/#vechungtoi-1"
            target="_blank"
            rel="noreferrer"
            aria-label="About Us"
          >
            Về chúng mình
          </a>
        </div>
        <div className="contact">
          <p className="style-background">Theo dõi và liên hệ với chúng mình</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/vietnamyouthalliance"
              rel="noreferrer"
              target="_blank"
              aria-label="Facebook"
              className="style-background"
            >
              <i className="fab fa-facebook-f style-background" />
            </a>

            {/* <Link to="/" target="_blank" aria-label="Facebook">
             </Link> */}
            <a
              href="https://www.instagram.com/vnyouthally/"
              rel="noreferrer"
              target="_blank"
              aria-label="Instagram"
              className="style-background"
            >
              <i className="fab fa-instagram style-background" />
            </a>

            <a
              href="mailto:vietnam.youth.alliance@gmail.com"
              rel="noreferrer"
              target="_blank"
              aria-label="Facebook"
              className="style-background"
            >
              <i className="fa fa-envelope style-background" />
            </a>
          </div>
        </div>
        <div className="version">Phiên bản: Beta</div>
      </section>
      <section className="website-rights footer-copyright">
        © 2020 built by Vietnam Youth Alliance
      </section>
    </div>
    //  </footer>
  );
}

export default Footer;
