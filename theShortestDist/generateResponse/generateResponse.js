function generateResult(path, points) {
  return JSON.stringify({
    result: {
      location: path[path.length - 1],
      probes: {
        count: points.length,
        coordinates: points
      }
    }
  });
}

function generateError(asteroidPos, points, message) {
  return JSON.stringify({
    error: message,
    result: {
      location: asteroidPos
    },
    probes: {
      count: points.length
    }
  });
}

module.exports = {
  generateResult,
  generateError,
}