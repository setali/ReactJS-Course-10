function sum (a = 0, b = 0) {
  return +a + +b
}

function sumString (a, b) {
  return `Sum is ${sum(a, b)}`
}

module.exports = {
  sum,
  sumString
}
