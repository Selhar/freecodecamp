import { connect } from 'react-redux';
import Quote from '../components/quote';

const mapStateToProps = (state) => {
    return {
        quote: state.quote,
        author: state.author
    }
}

export default QuoteRender = connect (mapStateToProps)(Quote);