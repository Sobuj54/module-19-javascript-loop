// continue statement skips the statement if condition is met
var numbers = [22, 25, 42, 45, 58, 78, 75, 98, 11]
var len = numbers.length
// console.log(len)

for (var i = 0; i < len; i++) {
  // it will terminate the loop if any number above 50 is encountered
  if (numbers[i] > 50) {
    continue
  }

  console.log(numbers[i])
}

//continue in array of string
var names = ['notebook', 'pen', 'house', 'computer']
var leng = names.length

for (var i = 0; i < leng; i++) {
  if (names[i] == 'house') {
    continue
  }
  console.log(names[i])
}
