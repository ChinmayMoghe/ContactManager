import React, {useState} from 'react';
import './AddContact.css';

const AddContact = (props)=>{
    const [person,setPerson] = useState('');
    const handleNameChange = (e) => {
        setPerson(e.target.value);
    }

    const handleSubmit = (e) => {
        if(person!=='') {
            props.handleSubmit(person);
            setPerson('');
        }
        e.preventDefault();
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" name="contactField" onChange={handleNameChange} id="contactField" placeholder="Add a contact Name" value={person}/>
            <button className="form-submit" type="submit">Save Contact</button>
        </form>
    );
};

export default AddContact;