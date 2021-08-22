import Math from 'math'

export function cToF(celsius) {
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  return Math.Round(cToFahr)
}

export function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  return Math.round(fToCel)
}