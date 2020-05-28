import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import AddContact from './components/AddContact';

const App = () => {
    return (
        <div className={"container"}>
            <h1>Contact Manager</h1>
            <AddContact></AddContact>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));