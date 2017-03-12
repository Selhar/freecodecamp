import Footer from '../components/footer';
import {connect} from 'react-redux';
import {actionTypes} from '../actions/actionsIndex';

const mapDispatchProps = (dispatch) => {
    return {
        onClick: (quote, author) => {
            dispatch(actionTypes.ADD_QUOTE(quote, author));
        }
    }
}

export default FooterRender = connect (mapDispatchProps)(Footer);