import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import fetchQuote from '../actions/actionsIndex';

@connect((store) => {
    return{
        fetchQuote: store.fetchQuote
    };
})

export default class Footer extends Component{
    fetchQuote(){
        this.props.dispatch(fetchQuote());
    }
    componentDidMount(){
        this.props.dispatch(fetchQuote());
    }

    
    render(){
        return(
        <footer className="footer-quote">
            <a className="button">Tweet</a>
            <a onClick={this.fetchQuote.bind(this)} className="button">New quote</a>
        </footer>
    )}
}

