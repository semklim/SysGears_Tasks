module.exports = function include(data, conditions) {
  return data.filter(item => {
    return conditions.some(condition => {
      return Object.keys(condition).every(key => item[key] === condition[key]);
    });
  });
}