const pngHandler = (data)=>{
    return data.fname + " handled with pngHandler.."
    
}

const wordHandler = (data)=>{
    return data.fname + " handled with wordhandler.."
    
}

const pdfHandler = (data)=>{
    return data.fname + " handled with pdfHandler.."
    
}


// const Handler = (option)=>{
//     // option -- {fname:"aman.png",cb:pngHandler}
//     let x = option.cb({fname:option.fname,size:"1000kb"})
//     // console.log(x);
//     return x;
    
// }

// const Handler = (option)=>{
//     // option -- {fname:"aman.png",cb:pngHandler}
//     return option.cb({fname:option.fname,size:"1000kb"})
//     // console.log(x);
    
    
// }


const Handler = (option)=> option.cb({fname:option.fname,size:"1000kb"})
    // console.log(x);


let fileName = "aman.pdf";
let ans;

if(fileName.endsWith(".png")){
    ans = Handler({fname:fileName,cb:pngHandler})
}
else if(fileName.endsWith(".word")){
    ans = Handler({fname:fileName,cb:wordHandler})
}
else if(fileName.endsWith(".pdf")){
    console.log(Handler({fname:fileName,cb:pdfHandler}))
}
else{
    console.log("file extension is not supported")
}

console.log(ans);
