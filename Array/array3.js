let users = ["aman","dugria","ram","shyam","bhuwan","rahul","samir"]

// every : boolean , &&

// let x = users.every((user)=>{
//     return user.length > 2
// })
// console.log(x);


let x = users.every((user)=> user.includes("a"))
console.log(x);
