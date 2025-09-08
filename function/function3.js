function science(fname,per){
    console.log(fname + " ur admision confimr in scince with per :" + per);
    
}

function commerce(fname,per){
    console.log(fname + " ur admision confimr in commerce with per :" + per);
}

function arts(fname,per){
    console.log(fname + " ur admision confimr in arts with per :" + per);
}

let percentage = parseInt(prompt("Enter percentage"));
if(percentage > 90){
    science("aman",percentage)
}
else if(percentage > 70){
    commerce("aman",percentage)
}
else if(percentage > 50){
    arts("aman",percentage)
}
else{
    console.log("percentage is less than 50")
}