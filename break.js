// break statement terminates the loop if condition is met
var numbers = [22, 25, 42, 45, 58, 78, 75, 98]
var len = numbers.length
// console.log(len)

for (var i = 0; i < len; i++) {
  // it will terminate the loop if any number above 50 is encountered
  if (numbers[i] > 50) {
    break
  }

  console.log(numbers[i])
}

//break in array of string
var names = ['notebook', 'pen', 'house', 'computer']
var leng = names.length

for (var i = 0; i < leng; i++) {
  if (names[i] == 'house') {
    break
  }
  console.log(names[i])
}
