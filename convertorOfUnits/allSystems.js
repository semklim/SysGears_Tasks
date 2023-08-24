const imperial = require('./systems/imperial');
const metric = require('./systems/metric');

const allSystems = {
  metric,
  imperial,
};

function allAvailableMeasure() {
  return Object.values(allSystems).map((el) => {
    return Object.keys(el).filter((key) => key !== 'system');
  });
}

module.exports = {
  allSystems,
  allAvailableMeasure: allAvailableMeasure(),
};