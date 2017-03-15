//magic eightball

var numberofreplys = 3;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'
    if (choice == 1)
        console.log("Yes");
    else if (choice == 2)
        console.log("No");
    else 
        console.log("Maybe.");
    /*
    write conditional logic here using if, else if, and else


    */

    console.log(choice);
}

ask();

var numberofreplys = 3;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'
    
    switch (choice) {
        case 1:
            console.log("Yes");
            break;
        case 2:
            console.log("No");
            break;
        case 3:
            console.log("Maybe.");
            break;
    }

    console.log(choice);
}

ask();