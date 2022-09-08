import { createAction } from '@reduxjs/toolkit';


export const changeFilter = createAction('contacts/changeFilter');

//pending
export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
//fulfilled
export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
//rejected
export const fetchContactsError = createAction('contacts/fetchContactsError');


export const addContactsRequest = createAction('contacts/addContactsRequest');
export const addContactsSuccess = createAction('contacts/addContactsSuccess');
export const addContactsError = createAction('contacts/addContactsError');

export const deleteContactsRequest = createAction('contacts/deleteContactsRequest');
export const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess');
export const deleteContactsError = createAction('contacts/deleteContactsError');

const editContactsRequest = createAction('contacts/editContactsRequest');
const editContactsSuccess = createAction('contacts/editContactsSuccess');
const editContactsError = createAction('contacts/editContactsError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactsRequest,
    addContactsSuccess,
    addContactsError,
    deleteContactsRequest,
    deleteContactsSuccess,
    deleteContactsError,
    editContactsRequest,
    editContactsSuccess,
    editContactsError,
    changeFilter,
  };