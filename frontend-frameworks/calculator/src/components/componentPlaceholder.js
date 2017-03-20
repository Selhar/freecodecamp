import React, {Component} from 'react';

class Placeholder extends Component{
    render(){
        return(
        <div>
        </div>
    )}
}

export default connect(
   state => ({
    }),
   dispatch => ({
    })
)(Clock);