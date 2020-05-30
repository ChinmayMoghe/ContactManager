import React from 'react';
import './ContactList.css';

const showContactList = (contactList) => {
    return contactList.map((contact,index)=><li className="contact" key={index}>{contact}</li>);
}

const ContactList = ({contactList}) => {
    return (
        <div className="contact-list-container">
            <ul className="contact-list">
                {showContactList(contactList)}
            </ul>
        </div>
    );
}
export default ContactList;