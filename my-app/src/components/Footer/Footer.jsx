import LazyImage from '../../assets/hooks/LazyImage';
import logo from '/img/logo.svg';
import './Footer.scss';

export default function Footer() {
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
              <p className="footer-main__info-text">
                Top learning experiences that create more talent in the world.
              </p>
            </div>
            <div className="footer-main__links"></div>
          </div>
          <div className="footer-bottom"></div>
        </div>
      </div>
    </footer>
  );
}
