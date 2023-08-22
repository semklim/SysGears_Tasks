const imperial = require('./systems/imperial');
const metric = require('./systems/metric');
const ratioBetweenSystems = require('./ratioBetweenSystems');

const input = '{"distance": {"unit": "m", "value": 0.5}, "convertTo": "ft"}';

function convertor(json) {
  const { distance: { unit: from, value }, to } = JSON.parse(json);
  console.log(from);
}

convertor(input);