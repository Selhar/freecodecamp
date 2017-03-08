import React, {Component} from 'react';
import './style/css/app.css';

class TextField extends Component {
    render(){
        return (
            <div></div>
        )
    }
}

class Footer extends Component{
    render(){
        return (
            <footer className="footer-quote">
                <a className="button">New quote</a>
                <a className="button">Tweet</a>
            </footer>
        )
    }
}
class App extends Component {
    render() {
        return (
            <div className="board">
                <h3 className="title is-3">Quote generator</h3>
                <TextField/>
                <Footer/>
            </div>
        );
    }
}

export default App;