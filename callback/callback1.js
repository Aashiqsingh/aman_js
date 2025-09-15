function demo(){
    console.log("demo function called...");
    
}


function test(x){
    // console.log(x);
    x()
}


// test(12)
// test("ram")
// test(true)
// test(12.4)

test(demo)