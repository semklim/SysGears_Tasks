const { checkDirection } = require("./altPathCheck");
const createAsteroid = require("./asteroidPos");
const drone = require("./drone/drone");
const { generateError, generateResult } = require("./generateResponse/generateResponse");

const size = 100;
const pentagon = { X: 1, Y: 1, Z: 1 };
const asteroidPos = createAsteroid(size, 1);
const points = [];
const path = [pentagon];
const minDist = [null, Infinity];
let prevDist = Infinity;

const checkNeighbors = (X, Y, Z) => {
  const neighbors = [
    { X: X + 1, Y, Z },
    { X: X + 1, Y: Y + 1, Z },
    { X: X + 1, Y: Y + 1, Z: Z + 1 },
    { X, Y: Y + 1, Z: Z + 1 },
    { X: X + 1, Y, Z: Z + 1 },
    { X, Y, Z: Z + 1 },
    { X, Y: Y + 1, Z },
  ];
  return neighbors;
};

function findAsteroid(start) {
  while (true) {
    if (checkDirection({ minDist, path, points, prevDist, drone, asteroidPos })) {
      continue;
    }

    const neighbors = checkNeighbors(start.X, start.Y, start.Z);

    for (let index = 0; index < 7; index += 1) {
      const el = neighbors[index];
      const dist = drone.fetchDisFromPos(el);

      points.push(el);

      if (dist < minDist[1] && dist < prevDist) {
        prevDist = minDist[1];
        minDist[0] = el;
        path.push(el);
        minDist[1] = dist;
      };

      if (minDist[1] <= 0) {
        return generateResult(path, points);
      }
    }
    start = minDist[0];

    if (points.length >= size ** 3) {
      return generateError(asteroidPos, points, 'You are reach the limit');
    }
  }

}
console.time();
console.log(findAsteroid(pentagon));
console.timeEnd();