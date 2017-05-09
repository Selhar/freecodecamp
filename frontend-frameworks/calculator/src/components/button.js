import React, {Component} from 'react';

export default class Button extends Component{
    render(){
        const {label} = this.props;
        return(
        <div className="button">
            {label}
        </div>
    )}
}

// export default connect(
//    state => ({
//     }),
//    dispatch => ({
//     })
// )(Clock);