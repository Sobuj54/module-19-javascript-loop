// all the even numbers from 1 to 20

var numbers = 1

// while (numbers <= 20) {
//   console.log(numbers)
//   numbers += 2
// }
while (numbers <= 20) {
  if (numbers % 2 == 0) {
    console.log(numbers)
    numbers++
  } else {
    numbers++
  }
}
