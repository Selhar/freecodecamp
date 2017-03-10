import React from 'react';
import ReactDOM from 'react-dom';
const css = require('./main.scss');

console.log(React);
class TextField extends React.Component {
    render(){
        return (
            <div className="quote">
                <span className="tick">"</span><span className="content">This is a quote this is a quote this is a quote this is a quote</span>
                <br/>
                <span className="author">Fulano</span>
            </div>
        )
    }
}

class Footer extends React.Component{
    render(){
        return (
            <footer className="footer-quote">
                <a className="button">Tweet</a>
                <a className="button">New quote</a>
            </footer>
        )
    }
}

class App extends React.Component {
    getQuotes(){
        fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40', {
	        method: 'get'
        }).then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        }).catch((error) => {
            console.log("*****************************************\n"+error+"\n*****************************************");
        });
    }
    
    render() {
        console.log(this.getQuotes());
        return (
            <div className="board">
                <h3 className="title is-3">Quote generator</h3>
                <TextField/>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('main')
);