import React, { PropTypes } from 'react';

export const TextField = () => (
    <div className="quote">
        <span className="tick">"</span><span className="content">This is a quote this is a quote this is a quote this is a quote</span>
        <br/>
        <span className="author">Fulano</span>
    </div>
);

export const Footer = () => (
    <footer className="footer-quote">
        <a className="button">Tweet</a>
        <a className="button">New quote</a>
    </footer>
);

