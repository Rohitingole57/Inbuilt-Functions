// --------INBUILT FUNCTION--------------

var num1 = 12;
var num2 = 13;
console.log(typeof(num1), typeof(num2));

num1 = num1.toString();
num2 = num2.toString();
console.log(typeof(num1), typeof(num2));


// lastIndexOf for last index
// indexof for first index
var animals = ["kutra","makad","macchar","undir","bendook"];
console.log(animals.lastIndexOf('bendook'));


//arr.shift();  is for the removing the first element from the array

var arr = [1,2,3];
arr.shift();
console.log(arr);


//arr.unshift();  is for the adding the element to the starting of array

var arr = [1,2,3];
arr.unshift(4,5,6,7);
console.log(arr);


//arr.join();  is for the adding the element to the starting of array

var arr = [1,2,3];
var bag= arr.join("");
console.log(bag);
