import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Quote extends Component{
    render(){
        const {quote, author} = this.props;

    return (
        <div className="quote">
            <span className="tick">"</span><span className="content">{quote}</span>
            <br/>
            <span className="author">{author}</span>
        </div>
        )
    }
}

export default connect(
   state => ({quote: state.quote, author: state.author})
)(Quote);