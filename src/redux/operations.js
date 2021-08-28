import { createAsyncThunk } from '@reduxjs/toolkit';
import * as Api from '../services/Api';

export const fetchContacts = createAsyncThunk(
    "contacts/getContacts", async (_, { rejectWithValue }) => {
    try {
        const contacts = await Api.fetchContacts();
        return contacts;
    } catch (error) {
        return rejectWithValue(error);
    }
}
);

export const addContact = createAsyncThunk(
    "contacts/addContact", async (contact, { rejectWithValue }) => {
    try {
        const data = await Api.addContact(contact);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
    
});

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async (id, { rejectWithValue }) => {
        try {
            await Api.deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
});

