module.exports = function reverse(n) {
 
  if (Math.sign(n) === -1 || Math.sign(n) === -0) {
    let arr = String(n).split('')
    arr.splice(0,1)
    return Number(arr.reverse().join(''))
  } else {
    return Number(String(n).split('').reverse().join(''))
  }

}

