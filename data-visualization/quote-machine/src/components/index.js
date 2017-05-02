import React from 'react';
import Footer from '../components/footer';
import Quote from '../components/quote';

export default () => (
    <div className="board">
        <h3 className="title is-3">Quote generator</h3>
        <Quote />
        <Footer />
    </div>
)