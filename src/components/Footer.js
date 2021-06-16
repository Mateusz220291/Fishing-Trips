import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Dołącz do naszego newslettera aby otrzymywać najnowsze informacje o
          wyprawach
        </p>
        <p className="footer-subscription-text">
          Możesz przestać subskrybować w dowolnym momencie.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Twój Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subskrybuj</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>O nas</h2>
            <Link to="/sign-up">Jak działamy</Link>
            <Link to="/">Referencje</Link>
            <Link to="/">Zespół</Link>
            <Link to="/">Koncesje</Link>
          </div>
          <div className="footer-link-items">
            <h2>Kontakt</h2>
            <Link to="/sign-up">Kontakt</Link>
            <Link to="/">Wsparcie</Link>
            <Link to="/">Lokalizacje</Link>
            <Link to="/">Sponsoring</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>O ofercie</h2>
            <Link to="/sign-up">Oferta indywidualna</Link>
            <Link to="/">Oferta firmowa</Link>
            <Link to="/">Rodzaje wypraw</Link>
            <Link to="/">Vouchery</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sign-up">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Fishing <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">Fishing © 2021</small>
          <div className="social-icons">
            <Link
              className='social-icon-link facebook"='
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </Link>
            <Link
              className='social-icon-link instagram"='
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className='social-icon-link youtube"='
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              className='social-icon-link twitter"='
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              className='social-icon-link linkedin"='
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
