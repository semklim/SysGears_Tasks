const { allSystems } = require("../allSystems");

function extendSystem(option) {
  if (typeof option.system.name !== 'string' || !option.system) {
    throw new Error('option.system is not string or it is empty string.  You have a mistake(mistakes) in JSON string')
  }

  const unit = Object.keys(option.system)[1];

  if (allSystems[option.system.name]) {
    allSystems[option.system.name][unit] = option.system[unit];
  } else {
    allSystems[option.system.name] = option.system;
  }
}

module.exports = {
  extendSystem
}