const { allAvailableMeasure } = require("../allSystems");

module.exports = function validationHandler(from, to, value) {
  if (!from || !to) {
    throw new Error(`One of unit is not valid. \n
    All available measure units: ${allAvailableMeasure.join(' | ')}`)
  }

  if (typeof value !== 'number') {
    throw new Error('Value is not a number');
  }

  if (typeof from.to_default !== 'number' || typeof to.to_default !== 'number') {
    throw new Error('to_default is undefined. You have a mistake(mistakes) in JSON string');
  }
}