// Used to create a store for app
import { createStore } from 'redux';
import reducer from './reducer';
/*Store must be a single object, do not assign list item to it directly*/
const initialState = {
    contactList: ["Elon Musk", "Chris Coyer", "Keanu Reeves", "Sandra Bullock"]
};

function configureStore(state = initialState) {
    return createStore(reducer, state);
}
export default configureStore;