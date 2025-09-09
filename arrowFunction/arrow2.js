const wordHandler = (option)=>{
    return option.name + " handle with word handler"
} 

const pngHandler = (option)=>{
    return option.name + " handle with png handler"
}

const jpgHandler = (option)=>{
    return option.name + " handle with jpg handler"
}

let fileName = "aman.jpg";
let output;

if(fileName.endsWith(".word")){
    output = wordHandler({name:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".png")){
    output = pngHandler({name:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".jpg")){
    output =jpgHandler({name:fileName,size:"1000kb"})
}
else{
    console.log("file not found")
}

console.log(output);
