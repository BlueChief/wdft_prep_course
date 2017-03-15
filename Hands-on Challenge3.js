

for (var i = 0; i<101; i++){
    if ((i%3 == 0) && (i%5 == 0)) {
        console.log("fizzbuzz")
    }
    else if (i%3 == 0) {
        console.log("buzz")
    }
    else if (i%5 == 0) {
        console.log("fizz")
    }

    else 
        console.log(i)
}



/*

var check = "";
var size = 8
var width = 0
var height = 0
for (i = 0; i < 64; i++) {
    for (v = 0; v < size; v++)
        if ((width%size==0) && (width != 0)) {
            height = height + 1
            check = check + "\n"
        }
    if ((width%2 == 0 ) && (height%2 == 0)) {
        check = check + "#"
       
    }

    else if ((width%2 != 0) && (height%2 == 0)) {
        check = check + " "
    }

    else if ((width%2 == 0) && (height%2 != 0)) {
        check = check + " "
    }

    else {
        check = check +"#"

    }
    width = width + 1
}
    
console.log(check)

*/

for (i = 0; i<8; i++) {
     if (i % 2 === 0){
    console.log(" # # # #");
  }else {
    console.log("# # # # ");
  }
}