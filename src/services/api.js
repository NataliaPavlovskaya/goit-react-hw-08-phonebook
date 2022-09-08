import axios from 'axios';

axios.defaults.baseURL = 'http://connections-api.herokuapp.com';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');

  return data;
};

export const addContact = async contact => {
  const postData = await axios.post('/contacts', contact);

  return postData;
};

//export asyns function fetchContacts () {
//const { data } = await axios.get(`/contacts`);
// return data;
//}
// export asyns function addContact (contact) {
// const { data } = await axios.get(`/contacts/&{contact}`);
// return data;
//}