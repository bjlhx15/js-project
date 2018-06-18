import React, {Component,Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

function TestGlossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                // Without the `key`, React will fire a key warning
                <Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </Fragment>
            ))}
        </dl>
    );
}
function ListItem({ item }) {
    return (
        //<>
        //    <dt>{item.term}</dt>
        //    <dd>{item.description}</dd>
        //</>
        <div/>
    );
}
class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <label htmlFor="namedInput">Name:</label>
                <input id="namedInput" type="text" name="name"/>
            </div>
        );
    }
}

export default App;
