import React, { PropTypes, Component } from 'react';
import {connect} from 'react-redux';
class TextField extends Component{

    render(){
        return (
            <div className="quote">
                <span className="tick">"</span><span className="content">{this.props.quote}</span>
                <br/>
                <span className="author">{this.props.author}</span>
            </div>
        )}

};

const Footer = () => (
    <footer className="footer-quote">
        <a className="button">Tweet</a>
        <a className="button">New quote</a>
    </footer>
);

const mapStateToProps = (state) => {
  return {
    author: state.author,
    quote: state.quote
  }
}

const QuoteText = connect(mapStateToProps)(TextField);
export const App = () => (
    <div className="board">
        <h3 className="title is-3">Quote generator</h3>
        <QuoteText/>
        <Footer/>
    </div>
)