import React, {PropTypes} from 'react';

const Footer = ({onClick}) => (
    <footer onClick={onClick} className="footer-quote">
        <a className="button">Tweet</a>
        <a className="button">New quote</a>
    </footer>
);

Footer.PropTypes = {
    onClick: PropTypes.func.isRequired
}

export default Footer;