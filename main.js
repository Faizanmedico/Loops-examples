//   for (starting value, condition, step increment)   FOR LOOP
for (var i_1 = 0; i_1 < 3; i_1++) {
    console.log("Block statement execution no." + i_1);
}
//for(setup; condition; counter_increment) 
// {
// execution code
// }
var i = 1;
for (var i = 1; i <= 5; i++) {
    console.log("Iteration no till now: " + i);
    i++;
}
var arr = [10, 20, 30, 40];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var val = arr_1[_i];
    console.log(val); // prints values: 10, 20, 30, 40
}
var str = "Hello World";
for (var _a = 0, str_1 = str; _a < str_1.length; _a++) {
    var char = str_1[_a];
    console.log(char); // prints chars: H e l l o  W o r l d
}
var ar = [10, 20, 30, 40];
for (var index in ar) {
    console.log(index); // prints indexes: 0, 1, 2, 3
    console.log(ar[index]); // prints elements: 10, 20, 30, 
}
for (var i_2 = 0; i_2 <= 5; i_2++) {
    console.log("Iteration number: " + String(i_2 + 1));
}
//   uuuuu
var person = { name: "Bob", age: 20, profession: "Lawyer", gender: "male" };
for (var key in person) {
    console.log(key + " : " + person[key]);
}
var xyz = ["dog", "cat", "goat", "sheep"];
for (var idx in xyz) {
    console.log(xyz[idx]);
}
var x = 0;
while (x < 10) {
    console.log(x);
    x++;
}
//      for(Initialization; Condition; Updation)
for (var i_3 = 45; i_3 < 50; i_3++) {
    // This statement is repeated
    console.log(i_3);
}
var colors = ['red', 'black', 'blue', 'white', 'pink'];
for (var _b = 0, colors_1 = colors; _b < colors_1.length; _b++) {
    var i_4 = colors_1[_b];
    // Print each element of the array
    console.log(i_4);
}
var country = ['Pakistan', 'India', 'Bangladesh', 'USA', 'UK', 'UAE', 'Russia'];
for (var i_5 in country) {
    // Print each element of the array
    console.log(i_5, country[i_5]);
}
