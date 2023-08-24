const randomGenerator = require("./randomPos/randomGenerator")
let position = null;

const createAsteroid = (cosmosSize, startFrom) => {
  if (position) {
    return position;
  }
  position = {
    X: randomGenerator(startFrom, cosmosSize),
    Y: randomGenerator(startFrom, cosmosSize),
    Z: randomGenerator(startFrom, cosmosSize),
  }
  return position;
}
module.exports = createAsteroid;