function science(option){
    console.log(option.fname + " ur admision confirm in scince with per " + option.per);   
}

function commerce(option){
    console.log(option.fname + " ur admision confirm in commerce with per " + option.per);   
}

function arts(option){
    console.log(option.fname + " ur admision confirm in arts with per " + option.per);   
}


// cb -- callback 
function admission(fname,per,cb){
    cb({
        fname:fname,
        per:per
    })
}

let percentage = 72;

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