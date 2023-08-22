const { allSystems, allAvailableMeasure } = require('./allSystems');
const ratioBetweenSystems = require('./ratioBetweenSystems');

const input = '{"distance": {"unit": "m", "value": 0}, "convertTo": "kmq"}';

function getSystem(units) {
  const length = allSystems.length;

  for (let i = 0; i < length; i += 1) {
    const system = allSystems[i];

    if (system[units]) {
      return {
        ...system[units],
        system: system.system,
      }
    }
  }
  return null;
}

function convertor(json) {
  const { distance: { unit, value }, convertTo } = JSON.parse(json);
  const from = getSystem(unit);
  const to = getSystem(convertTo);

  if (!from || !to) {
    throw new Error(`One of unit is not valid. \n
    All available measure units: ${allAvailableMeasure.join(' | ')}`)
  }

  if (typeof value !== 'number') {
    throw new Error('Value is not a number');
  }

  if (unit === convertTo) {
    return value;
  }

  if (from.system === to.system) {
    return from.to_default * value / to.to_default;
  } else {
    let result = ratioBetweenSystems[from.system][to.system].ratio * (value * from.to_default);

    result = result / to.to_default;

    return JSON.stringify({
      name: to.name.singular,
      unit: convertTo,
      value: result
    });
  }
}

try {
  console.log(convertor(input));
} catch (error) {
  console.log(error.message);
}