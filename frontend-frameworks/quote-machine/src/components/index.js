import React from 'react';
import FooterRender from '../containers/requestQuote';
import QuoteRender from '../containers/renderQuote';

const Index = () => (
    <div className="board">
        <h3 className="title is-3">Quote generator</h3>
        <QuoteRender />
        <FooterRender />
    </div>
)

export default Index;