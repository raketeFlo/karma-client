import { URL_DEV } from 'react-native-dotenv';

const fetchRequest = (path, options) => {
  return fetch(URL_DEV + path, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

exports.loadUser = (userName) => {
  return fetchRequest(`/user/${userName}`);
};

exports.loadActions = () => {
  return fetchRequest('/actions');
};

exports.updateUser = (data) => {
  return fetchRequest('/users', {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

exports.signIn = (encodedData) => {
  return fetchRequest('/sign-in', {
    headers: {
      'Authorization': `Basic ${encodedData}`,
      'Content-Type': 'application/json',
    },
  });
}