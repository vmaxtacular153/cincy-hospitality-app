import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <span className="copyright">
              © {new Date().getFullYear()}, made with ❤ by Vmaxtacular
            </span>
        </footer>
    )
}

export default Footer;