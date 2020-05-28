import React from 'react';
import './AddContact.css';

const AddContact = ()=>{
    return (
        <form className={"form-container"}>
            <input type="text" name="contactField" id="contactField" placeholder="Add a contact Name"/>
            <button className={"form-submit"} type="submit">Save Contact</button>
        </form>
    );
};

export default AddContact;