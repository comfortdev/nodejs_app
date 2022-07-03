function addInteger (int1, int2) {
  if (typeof int1 !== 'number' || typeof int2 !== 'number') {
    throw new Error('Invalid type of arguments, only number is allowed here.')
  }
  return int1 + int2
}

module.exports = {
  addInteger
}
