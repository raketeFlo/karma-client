import { URL } from 'react-native-dotenv';

const fetchRequest = (path, options) => fetch(URL + path, options)
  .then((res) => res.json())
  .catch((err) => console.error(err));


exports.loadUser = (userName) => fetchRequest(`/user/${userName}`);

exports.loadActions = () => fetchRequest('/actions');

exports.updateUser = (data) => fetchRequest('/users', {
  method: 'PUT',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
});

exports.signIn = (encodedData) => fetchRequest('/sign-in', {
  headers: {
    'Authorization': `Basic ${encodedData}`,
    'Content-Type': 'application/json',
  },
});