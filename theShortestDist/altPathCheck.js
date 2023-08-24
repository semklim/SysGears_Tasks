const getDirection = (prevPos, curPos) => {
  return {
    X: curPos.X + (curPos.X - prevPos.X),
    Y: curPos.Y + (curPos.Y - prevPos.Y),
    Z: curPos.Z + (curPos.Z - prevPos.Z),
  }
};


const checkDirection = ({ minDist, path, points, prevDist, drone, asteroidPos }) => {
  if (minDist[0]) {
    const el = getDirection(path[path.length - 2], minDist[0]);
    const dist = drone.fetchDisFromPos(el);

    points.push(el);

    if (dist < minDist[1] && dist < prevDist) {
      prevDist = minDist[1];
      minDist[0] = el;
      path.push(el);
      minDist[1] = dist;
      if (minDist[1] <= 0) {
        return JSON.stringify({
          result: {
            location: asteroidPos,
            last: minDist[0],
            probes: {
              count: points.length,
              coordinates: points
            },
          }
        });
      }
      return true;
    }
  }
}

module.exports = {
  getDirection,
  checkDirection
}