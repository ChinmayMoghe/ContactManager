import React, { useState } from 'react';
import './AddContact.css';
import { connect } from 'react-redux';
import  addPerson  from '../appState/action';

const AddContact = (props) => {
    /*
    Note : We have not added this to
    store since this is used
    temporarily to handle form data.
    But we can do so by creating a new action and reducer.
    This is for sake of simplicity.
    */
    const [personName, setPersonName] = useState('');
    const handleNameChange = (e) => {
        setPersonName(e.target.value);
    }

    const handleSubmit = (e) => {
        if (personName !== '') {
            /*action creator available as prop due to mapDispatchToProps*/
            props.addPerson(personName);
            setPersonName('');
        }
        e.preventDefault();
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" name="contactField" onChange={handleNameChange} id="contactField" placeholder="Add a contact Name" value={personName} />
            <button className="form-submit" type="submit">Save Contact</button>
        </form>
    );
};

/*mapDispatchToProps must be an object or
function that return an object.
use of object consisting of actionCreators is favoured as it easy to read and understand and recommended.
*/
const mapDispatchToProps = {
    addPerson
}
export default connect(null,mapDispatchToProps)(AddContact);