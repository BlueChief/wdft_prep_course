var name = "Feeras";
console.log("Hello " + name)

var x = 1125;

var answer = x%2;
console.log(answer)

var a = true;
var b = false;
var c= true;

console.log(a||b||c)

var answer1 = 10 - 3 * 5/4 + 202 % 3;
var answer2 = 10 - (3 * (5/4) + (202 % 3));

console.log(answer1);
console.log(answer2);

var y = String(12);
var z = Number("113");
var w = parseFloat("1.123456");
var x = parseInt("Hello World");

console.log(x)

var str = "I am a BrainStation student";

var n = str.search(/brainstation/i);

var str1 = "I am a student";

var p = str1.search(/brainstation/i);

console.log(n)
console.log(p)

var r = str.replace(/brainstation student/i, "Juniour Developer")

console.log(r)

var l = ('34' + 5);

console.log(l)

var myArray = new Array();

myArray.push('Apples');
myArray.push('Oranges');
var length = myArray.push('Pears');

console.log(length);

var yourArray = ['apples', 'oranges', 'pears'];
yourArray[3] = 'cherries';
yourArray[4] = 'bananas';

console.log(yourArray);