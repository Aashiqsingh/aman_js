let a = parseInt(prompt("Enter first number "))
let b = parseInt(prompt("Enter second number "))

let choice = prompt("+ for add \n2 for sub \n3 for mul \n4 for div \n\nEnter your choice ")

switch(choice){
    case "+":
        console.log(a+b);
        break;
    case "2":
        console.log(a-b);
        break;
    case "3":
        console.log(a*b);
        break;
    case "4":
        console.log(a/b);
        break;
    default:
        console.log("Invalid choice");
        break;
}