function science(fname,per){
    return fname + " ur admision confimr in scince with per :" + per
    
}

function commerce(fname,per){
    return fname + " ur admision confimr in commerce with per :" + per
}

function arts(fname,per){
    return fname + " ur admision confimr in arts with per :" + per
}

let percentage = parseInt(prompt("Enter percentage"));
let output;

if(percentage > 90){
    output = science("aman",percentage)
}
else if(percentage > 70){
    output = commerce("aman",percentage)
}
else if(percentage > 50){
    output = arts("aman",percentage)
}
else{
    console.log("percentage is less than 50")
}

console.log(output);

// science()