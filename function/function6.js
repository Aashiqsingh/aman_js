function dubai(option){
    return option.fname + " ur tour confirm in dubai with package " + option.amount
}

function paris(option){
    // {fname:firstName,amount:budget,size:"small"}
    return option.fname + " ur tour confirm in paris with package " + option.amount 
}

function london(option){
    return option.fname + " ur tour confirm in london with package " + option.amount
}

function goa(option){
    return option.fname + " ur tour confirm in goa with package " + option.amount
}

let budget = parseInt(prompt("Enter your budget"))
let firstName = "dugri";
let output;

if(budget > 5000){
    output = dubai({fname:firstName,amount:budget})
}
else if(budget > 4000){
    output = paris({fname:firstName,amount:budget,size:"small"})
}
else if(budget > 3000){
    output = london({fname:firstName,amount:budget})
}
else if(budget > 2000){
    output = goa({fname:firstName,amount:budget})
}
else{
    console.log("you can't go")
}

console.log(output);
