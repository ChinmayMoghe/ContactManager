// dispatched action is handled by reducer
// reducer returns the next state of the app and store saves that store.
export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_PERSON':
            return { contactList: [...state.contactList, action.personName] }
        default:
            return state;
    }
}