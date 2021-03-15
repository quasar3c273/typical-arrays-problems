
exports.min = function min(array) {
  if (array == undefined) return 0;
  if (array.length == 0) return 0;
  return Math.min(...array);
}

exports.max = function max(array) {
  if (array == undefined) return 0;
  if (array.length == 0) return 0;
  let result = 0;
  return Math.max(...array);
}

exports.avg = function avg(array) {
  if (array == undefined) return 0;
  if (array.length == 0) return 0;
  let sumArr = array.reduce((prev, current) => prev + current, 0);
  return sumArr / array.length;
}
