import React, {Component} from 'react';
import './style/css/app.css';

class TextField extends Component {
    render(){
        return (
            <div className="quote">
                <span className="tick">"</span><span class="content">This is a quote this is a quote this is a quote this is a quote</span>
                <br/>
                <span className="author">Fulano</span>
            </div>
        )
    }
}

class Footer extends Component{
    render(){
        return (
            <footer className="footer-quote">
                <a className="button">Tweet</a>
                <a className="button">New quote</a>
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