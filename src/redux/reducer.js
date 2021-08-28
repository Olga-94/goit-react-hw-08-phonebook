import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { fetchContacts, addContact, deleteContact } from './operations';

const items = createReducer([], {
    [fetchContacts.fulfilled]: (_, action) => action.payload,
    [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
    [deleteContact.fulfilled]: (state, { payload }) => state.filter(contact => contact.id !== payload),
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,
    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,

})

const error = createReducer(null, {
    [fetchContacts.pending]: null,
    [fetchContacts.rejected]: (_, action) => action.payload,
    [addContact.pending]: null,
    [addContact.rejected]: (_, action) => action.payload,
    [deleteContact.pending]: null,
    [deleteContact.rejected]: (_,action) => action.payload,
})

const filter = createReducer("", {
    [actions.changeFilter]: (_, action) => action.payload,
})

export default combineReducers({
    items,
    isLoading,
    error,
    filter,
})

// const initialContacts = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     { id: 'id-5', name: 'Olga Bezdetko', number: '596-91-79' },
//   ]; 
  
// const items = createReducer(initialContacts, {
//     [actions.addContact]: (state, { payload }) => {
//         if (state.find(contact => contact.name.toLowerCase() === payload.name.toLowerCase())) {
//             alert(`${payload.name} is already in contacts`);
//             return state;
//         }
//         return [payload, ...state]
//     } ,
        
        
//     [actions.deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
// })

// const filter = createReducer("", {
//     [actions.changeFilter]: (_, action) => action.payload,
// })

// export default combineReducers({
//     items,
//     filter,
// })