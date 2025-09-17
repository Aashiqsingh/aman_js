const pngHandler = (data)=>{
    return data.fname + " handled with pngHandler.."
    
}

const wordHandler = (data)=>{
    return data.fname + " handled with wordhandler.."
    
}

const pdfHandler = (data)=>{
    return data.fname + " handled with pdfHandler.."
    
}


const Handler = (option)=>{
    // option -- {fname:"aman.png",cb:pngHandler}
    let x = option.cb({fname:option.fname,size:"1000kb"})
    console.log(x);
    
}

let fileName = "aman.word";

if(fileName.endsWith(".png")){
    Handler({fname:fileName,cb:pngHandler})
}
else if(fileName.endsWith(".word")){
    Handler({fname:fileName,cb:wordHandler})
}
else if(fileName.endsWith(".pdf")){
    Handler({fname:fileName,cb:pdfHandler})
}
else{
    console.log("file extension is not supported")
}