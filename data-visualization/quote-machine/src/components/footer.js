import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import fetchQuote from '../actions/actionsIndex';

class Footer extends Component{
    componentDidMount(){  
        this.props.teste();
    }
    
    render(){
        return(
        <footer className="footer-quote">
            <a className="button">Tweet</a>
            <a onClick={this.props.teste} className="button">New quote</a>
        </footer>
    )}
}

export default connect(
   state => state,
   dispatch =>({teste: bindActionCreators(fetchQuote, dispatch)})
)(Footer);