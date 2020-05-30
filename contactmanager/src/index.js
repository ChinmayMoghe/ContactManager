import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

const App = () => {
    // added Initial Dummy values
    const [contacts, setContacts] = useState(["Elon Musk", "Chris Coyer", "Keanu Reeves", "Sandra Bullock"]);
    const addContacttoList = (contact) => {
        setContacts([...contacts,contact]);
    }
    return (
        <div className="container">
            <h1>Contact Manager</h1>
            <AddContact handleSubmit={addContacttoList}></AddContact>
            <ContactList contactList={contacts}></ContactList>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));