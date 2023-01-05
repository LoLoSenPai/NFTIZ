import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-container">
        <img src="./logo.png" alt="Logo" className="footer__logo" />
      </div>
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item"><a href="#" className="footer__nav-link">Accueil</a></li>
          <li className="footer__nav-item"><a href="#" className="footer__nav-link">Blog</a></li>
          <li className="footer__nav-item"><a href="#" className="footer__nav-link">A propos</a></li>
          <li className="footer__nav-item"><a href="#" className="footer__nav-link">Contact</a></li>
        </ul>
      </nav>
      <div className="footer__social-media">
        <a href="#" className="footer__social-media-link"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="footer__social-media-link"><i className="fab fa-twitter"></i></a>
        <a href="#" className="footer__social-media-link"><i className="fab fa-instagram"></i></a>
        <a href="#" className="footer__social-media-link"><i className="fa-brands fa-twitter"></i></a>
      </div>
      <div className="footer__legal">
        <ul className="footer__legal-list">
          <li className="footer__legal-item"><a href="#" className="footer__legal-link">Mentions légales</a></li>
          <li className="footer__legal-item"><a href="#" className="footer__legal-link">Conditions générales de vente</a></li>
          <li className="footer__legal-item"><a href="#" className="footer__legal-link">Politique de confidentialité</a></li>
        </ul>
      </div>
      <script src="https://kit.fontawesome.com/71d4afbc52.js" crossorigin="anonymous" />
    </footer>

  );
}

