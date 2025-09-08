import './Header.scss';
import LazyImage from '../../assets/hooks/LazyImage';
import logo from '/img/logo.svg';
import burger from '/img/burgerMenu.svg';
import { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';

const menuLisd = [
  { text: 'Home', link: '/' },
  { text: 'About us', link: '#about' },
  { text: 'Courses', link: '#courses' },
  { text: 'Reviews', link: '#reviews' },
  { text: 'FAQ’s', link: '#faq' },
];

export default function Header({ openModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-menu">
            <button className="burger-btn" onClick={toggleMenu}>
              <LazyImage
                src={burger}
                alt="company logo"
                className="header-logo"
              />
            </button>
            <ul
              ref={menuRef}
              className={`header-menu__list ${isMenuOpen ? 'open' : ''}`}
            >
              {menuLisd.map((elem) => (
                <li
                  className="header-menu__list-item"
                  key={elem.text}
                  onClick={closeMenu}
                >
                  <a href={elem.link}> {elem.text} </a>
                </li>
              ))}
            </ul>
          </div>
          <LazyImage src={logo} alt="company logo" className="header-logo" />
          <Button text="Sign in" onClick={openModal} className="header-btn" />
        </div>
      </div>
    </header>
  );
}
