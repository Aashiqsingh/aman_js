function science(option){
    return option.fname + " ur admision confirm in scince with per " + option.per  
}

function commerce(option){
    return option.fname + " ur admision confirm in commerce with per " + option.per 
}

function arts(option){
    return option.fname + " ur admision confirm in arts with per " + option.per 
}


// cb -- callback 
function admission(fname,per,cb){
    let x = cb({
        fname:fname,
        per:per
    })

    console.log(x);
    
}

let percentage = 92;

if(percentage > 90){
    admission("aman",percentage,science)
}
else if(percentage > 70){
    admission("aman",percentage,commerce)
}
else if(percentage > 50){
    admission("aman",percentage,arts)
}
else{
    console.log("percentage is less than 50")
}