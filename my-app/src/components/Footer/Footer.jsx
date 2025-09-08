import LazyImage from '../../assets/hooks/LazyImage';
import logo from '/img/logo.svg';
import './Footer.scss';
import { footerSocial, footerLinks } from './footerdata';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-main__info">
              <LazyImage
                src={logo}
                alt="company logo"
                className="footer-logo"
              />
              <p className="footer-main__info-text text">
                Top learning experiences that create more talent in the world.
              </p>
            </div>
            <div className="footer-main__links">
              {footerLinks.map((elem) => (
                <div className="footer-main__links-wrapper" key={elem.title}>
                  <h4 className="footer-links__title">{elem.title}</h4>
                  <ul className="footer-links__list">
                    {elem.links.map((item) => (
                      <li key={item.text}>
                        <a href={item.link}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom__social">
              {footerSocial.map((elem) => (
                <div className="footer-bootom__social-icon" key={elem}>
                  <LazyImage
                    src={elem}
                    alt="social icon"
                    className="footer-icon"
                  />
                </div>
              ))}
            </div>
            <p className="footer-bottom__rights">
              © {year} Ed-Circle. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
