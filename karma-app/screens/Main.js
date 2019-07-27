import React, { useState, useEffect } from 'react';
import ActionList from '../components/ActionList';
import FilterAction from '../components/FilterAction';

const Main = () => {
  const [actions, setActions] = useState([]);
  const [filter, setFilter] = useState([]);

  // load all actions
  useEffect(() => {
    fetch('http://192.168.1.148:3001/actions')
      .then(response => response.json())
      .then((data) => {
        setActions(data);
        setFilter(data);
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  }, []);

  // filter for actions
  const filterActions = (difficulty) => {
    const filteredActions = actions.filter(elements => elements.difficulty === difficulty);
    setFilter(filteredActions);
  };

  return (
    <>
      <FilterAction filter={filterActions} />
      <ActionList actions={filter} />
    </>
  );
};

export default Main;
