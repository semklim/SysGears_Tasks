const { allSystems, extendSystem } = require('./allSystems');
const ratioBetweenSystems = require('./ratioBetweenSystems');
const validationHandler = require('./validation/validationHandler');

const input = `{
  "distance": {"unit": "ftm", "value": 1}, 
  "convertTo": "m", 
  "option": {
    "system": {
      "name": "metric",
      "dm":{
        "name": {
          "singular": "Decimeter",
          "plural": "Decimeters"
        },
        "to_default": 1e-1
      }
    }
  }
}`;

function getSystem(units) {
  const systems = Object.values(allSystems);
  const length = systems.length;

  for (let i = 0; i < length; i += 1) {
    const system = systems[i];

    if (system[units]) {
      return {
        ...system[units],
        system: system.name,
      }
    }
  }
  return null;
}

function formatResult(unit, unitName, convertResult) {
  return JSON.stringify({
    unit,
    name: unitName,
    value: convertResult,
  });
}

function convertor(json) {
  const { distance: { unit, value }, convertTo, option } = JSON.parse(json);
  let result;

  if (option) {
    extendSystem(option);
  }

  const from = getSystem(unit);
  const to = getSystem(convertTo);

  validationHandler(from, to, value);

  if (unit === convertTo) {
    return formatResult(convertTo, to.name.singular, value);
  }

  if (from.system === to.system) {
    result = from.to_default * value / to.to_default;
  } else {
    result = ratioBetweenSystems[from.system][to.system].ratio * (value * from.to_default);

    result = result / to.to_default;

  }
  return formatResult(convertTo, to.name.singular, result);
}

try {
  console.log(convertor(input));
} catch (error) {
  console.log(error.message);
}