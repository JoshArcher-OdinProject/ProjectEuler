var i = 1;
var sum = 0;

while (i < 1001) {
  if (i%3 === 0 || i%5 === 0) {
  sum += i; 
  }
  i++
}
console.log(sum)

var sumTwo = 0; 
for (var i = 0; i <= 1000; i++ ) {
	if (i % 3 === 0 || i % 5 === 0) {
		sumTwo += i;
	}
}
console.log(sumTwo)
