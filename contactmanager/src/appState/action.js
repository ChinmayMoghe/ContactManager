// this is an action creator - Action is just an object with a type and data needs to be added to current State
// Action is used to change state
const addPerson = (personName) => {
    return {
        type:'ADD_PERSON',
        personName
    }
};
export default addPerson;