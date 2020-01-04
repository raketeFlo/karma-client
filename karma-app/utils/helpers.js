const people = require('../assets/Icons/b2b.png');
const volunteer = require('../assets/Icons/charity.png');
const transport = require('../assets/Icons/bus.png');
const environment = require('../assets/Icons/planet-earth.png');
const relationship = require('../assets/Icons/friends.png');

exports.showIcon = (category) => {
  if (category === 'People') {
    return people;
  } else if (category === 'Relationship') {
    return relationship;
  } else if (category === 'Transports') {
    return transport;
  } else if (category === 'Volunteering') {
    return volunteer;
  } else if (category === 'Environment') {
    return environment;
  }
};