// Data Structures.
var array = ["Banana", "Apples", "Orange", "Blueberries"];

// Remove the Banana from the array.
array.shift();
'Banana'
array
(3)['Apples', 'Orange', 'Blueberries']

// Sort the array in order.
array.sort();
(3)['Apples', 'Blueberries', 'Orange']

// Put Kiwi at the end of the array.
var newArray = array.concat(["Kiwi"]);
newArray
(4)['Apples', 'Blueberries', 'Orange', 'Kiwi']

// Remove Apples from the array.
newArray.shift();
'Apples'
newArray
(3)['Blueberries', 'Orange', 'Kiwi']

// Sort the array in reverse order.
newArray.reverse();
(3)['Kiwi', 'Orange', 'Blueberries']

// Using this array, access Orange.
var array2 =  ['Banana', ['Apples', ['Orange'], 'Blueberries']]
undefined
console.log(array2[1][1][0]);
Orange