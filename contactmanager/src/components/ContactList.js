import React from 'react';
import './ContactList.css';
import { connect } from 'react-redux';

const showContactList = (contactList) => {
    return contactList.map((contact,index)=><li className="contact" key={index}>{contact}</li>);
}

const ContactList = (props) => {
    return (
        <div className="contact-list-container">
            <ul className="contact-list">
                {showContactList(props.contactList)}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ContactList);