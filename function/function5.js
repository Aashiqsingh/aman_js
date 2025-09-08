function science(option){
    return option.fname + " ur admision confimr in scince with per :" + option.per
}

function commerce(option){
    // {fname:"dugri",per:98}
    return option.fname + " ur admision confimr in commerce with per :" + option.per
}

function arts(option){
    return option.fname + " ur admision confimr in arts with per :" + option.per
}

let percentage = parseInt(prompt("Enter percentage"));
let flag

if(percentage > 90){
    flag = science({
        fname:"aman",
        per:percentage
    })
}
else if(percentage > 70){
    flag = commerce({fname:"dugri",per:percentage})
}
else if(percentage > 50){
    flag = arts({fname:"shree",per:percentage})
}
else{
    console.log("percentage is less than 50")
}

console.log(flag);
