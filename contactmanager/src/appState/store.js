// Used to create a store for app
import {createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    contactList : ["Elon Musk", "Chris Coyer", "Keanu Reeves", "Sandra Bullock"]
};

function configureStore(state = initialState) {
    return createStore(reducer,state);
}
export default configureStore;