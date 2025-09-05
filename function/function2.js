// There are four types of functions in JavaScript
// 1. without return type without argument
// 2. without return type with argument
// 3. with return type without argument
// 4. with return type with argument


// 2. without return type with argument

// function add(a,b){
//     console.log("Addition = ",a+b);
// }

// // add(2,3)
// // add("shree","ram")

// let x = parseInt(prompt("Enter first number"));
// let y = parseInt(prompt("Enter second number"));

// add(x,y)


// function findReverse(num){
//     let rev = 0;
//     while(num!=0){
//         let rem = num % 10;
//         rev = rev*10 + rem;
//         num = Math.floor(num/10);
//     } 
//     console.log(rev);
    
// }

// function findReverse(){
// let num = parseInt(prompt("Enter a number"));
//     let rev = 0;
//     while(num!=0){
//         let rem = num % 10;
//         rev = rev*10 + rem;
//         num = Math.floor(num/10);
//     } 
//     console.log(rev);
    
// }

// findReverse(3456)


// findReverse(12345)

// findReverse(parseInt(prompt("Enter a number")))



// function add(){

//     let a = parseInt(prompt("Enter first number"));
//     let b = parseInt(prompt("Enter second number"));
//     console.log("Addition = ",a+b);
// }

// add()



// 3. with return type without argument

function greet(){
    // return "Hii how are you"
    // return true
    // return 456

    let avlbal = 65000;

    return avlbal
}

// let ans = greet()
// console.log(ans);

// console.log(greet() == true ? "Active" : "Not Active");

// console.log(greet());
// let x = greet();
// console.log(x);


// 4. with return type with argument

// function mul(x,y){
//     return "multiply = " + x*y;
// }

// let ans = mul(2,3)
// // console.log("multiply = ",ans);
// console.log(ans);


// prime number

// function isPrime(num){
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true;
// }
// // let x = isPrime(17) == true ? "Prime" : "Not Prime";
// let x = isPrime(18) ? "Prime" : "Not Prime";

// // console.log(x == true ? "Prime" : "Not Prime");
// console.log(x);


let flag = true;
// if(flag == true){
//     console.log("Aashiq");
// }
// else {
//     console.log("dugri");
    
// }

// if(flag){
//     console.log("Aashiq");
// }
// else {
//     console.log("dugri");
    
// }

// if(!flag){
//     console.log("dugri");
// }
// else {
//     console.log("Aashiq");
    
// }