import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
/*Provider provides access to store to the nested elements -
should be used for root level component in order to provide access to store for all components*/
import { Provider } from 'react-redux';
/*configureStore will set the initial state of the app , will be passed as prop to Provider.*/
import configureStore from './appState/store';

const App = () => {
    // added Initial Dummy values - commented out previous state management for App
    // const [contacts, setContacts] = useState(["Elon Musk", "Chris Coyer", "Keanu Reeves", "Sandra Bullock"]);
    // const addContacttoList = (contact) => {
    //     setContacts([...contacts, contact]);
    // }
    return (
        <div className="container">
            <h1>Contact Manager</h1>
            {/*No need of props to pass data as store can be accessed by any component now*/}
            <AddContact />
            <ContactList />
        </div>
    );
};

ReactDOM.render(<Provider store={configureStore()}><App /></Provider>, document.querySelector("#root"));