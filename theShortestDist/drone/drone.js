const createAsteroid = require("../asteroidPos");

function distance3D(posA, posB) {
  const dX = posA.X - posB.X;
  const dY = posA.Y - posB.Y;
  const dZ = posA.Z - posB.Z;
  return Math.sqrt(dX * dX + dY * dY + dZ * dZ);
};


module.exports = {
  fetchDisFromPos(dronePos) {
    return distance3D(dronePos, createAsteroid());
  }
}