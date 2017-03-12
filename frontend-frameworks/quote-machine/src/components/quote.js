import React, {PropTypes} from 'react';

const Quote = ({quote, author}) => (
 
    <div className="quote">
        <span className="tick">"</span><span className="content">{quote}</span>
        <br/>
        <span className="author">{author}</span>
    </div>
)

Quote.propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Quote;