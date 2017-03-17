import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateInput} from '../actions/indexAction';
import {bindActionCreators} from 'redux';
import marked from 'marked';

class processedInput extends Component{
    render(){
        const {text} = this.props;
        const createMarkup = {
            __html: marked(text)
        }
        console.log(createMarkup.__html)
        return(
            <div dangerouslySetInnerHTML={createMarkup} disabled></ div>
    )}
}

export default connect(
   state => ({
       text: state.text
    })
)(processedInput);