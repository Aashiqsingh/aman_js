// let users = ["aman","dugri","ram","shyam","bhuwan","rahul","samir"]

// for(let i=0;i<users.length;i++){
//     console.log(users[i].toUpperCase());
    
// }

// users[i] === user

// forEach : void 
// users.forEach((u)=>{
//     console.log(u.toUpperCase());
    
// })

// users.forEach((user)=>{
//     if(user.length < 4){
//         console.log(user.toUpperCase());
//     }
// })








// let flag = false;
// for(let i=0;i<users.length;i++){
//     if(users[i].length < 4){
//         flag = true;
//     }
// }

// console.log(flag);

let users = ["aman","dugri","ram","shyam","bhuwan","rahul","samir"]

// some : boolean


//  ||   , &&
// let x = users.some((user)=>{
//     return user.length < 4
// })

// console.log(x);

// let x = users.some((user)=>{
//     return user.startsWith("s")
// })
// console.log(x);

let x = users.some((user)=> user.startsWith("z"))
console.log(x);
