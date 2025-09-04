let employee = {
    name: "Aman",
    age: 19,
    isActive:true,
    email:"aman@gmail.com",
    phone:[7235083728,27354972732],
    address:{
        city:"Surat",
        state:"Gujarat",
        country:"India",
        room:96,
        building:12,
        street:{
            name:"Jawaharlal Nehru road",
            number:10
        }
    }
}

console.log(employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.email);

// console.log(employee.phone);
// console.log(employee.phone[0]);
// console.log(employee.phone[1]);


// for(let i=0;i<employee.phone.length;i++){
//     console.log(employee.phone[i]);
    
// }


console.log(employee.address);
console.log(employee.address.city);


console.log(employee.address.street);
console.log(employee.address.street.name);
