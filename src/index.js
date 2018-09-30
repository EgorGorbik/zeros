module.exports = function getZerosCount(number) {
var result = 0;

for (var i = 5 ; i <= number ; i*=5) {
	var temp = Math.floor(number/i);
	result += temp;
} 
	return result;
}