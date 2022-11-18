export function removeNonAlphanumbericChars(word) {
  return word.replace(/[^A-Za-z]/g, '')
}

export function lowerCase(word) {
  return word.toLowerCase()
}

export function onlyUnique(value, index, array) {
  return array.indexOf(value) === index
}
