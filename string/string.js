// let str2 = "aman"

// console.log(str);
// console.log(str.length);

// let x = str.charAt(1)
// console.log(x);

// console.log(str.charAt(1));

// let x = str.charCodeAt(0)
// console.log(x);


// let x = str.concat(str2)
// console.log(x);

// console.log(str + str2);

// let x = str.endsWith("kul.")
// let x = str.startsWith("ahr")
// let x = str.includes("guru")
// console.log(x);


// let x = str.indexOf("r")
// let x = str.lastIndexOf("r")

// console.log(x);

// let x = str.repeat(3)
// console.log(x);

// let x = str.replace("guru","bhagwan")
// let x = str.replace("u","z")
// let x = str.replaceAll("u","z")
// console.log(x);
// let str = "ahree gurukrupa vidhya sankul.";
// console.log(str.length);

// let x = str.split("u")
// let x = str.split(" ")
// let x = str.split("")
// console.log(x);

// for(let i=0;i<x.length;i++){
//     console.log(x[i]);
// }

// let x = str.trim()
// let x = str.trimEnd()
// let x = str.trimStart()
// console.log(x.length);


// let x = str.slice(1)
// let x = str.slice(1,4)
// let x = str.slice(-4,-1) // substring
// console.log(x);


// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());


let str = "naman"
let ans = ""


for(let i=str.length-1;i>=0;i--){
    // console.log(x[i]);
    ans = ans + str[i]
}

console.log(ans);

if(ans == str){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}