import React, { useState, useEffect } from 'react';
import ActionList from '../components/ActionList';
import FilterAction from '../components/FilterAction';

const Main = () => {
  const [actions, setActions] = useState([]);

  // load all actions
  useEffect(() => {
    fetch('http://192.168.1.148:3001/actions')
      .then(response => response.json())
      .then(data => setActions(data))
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  }, []);

  return (
    <>
      <FilterAction />
      <ActionList actions={actions} />
    </>
  );
};

export default Main;
