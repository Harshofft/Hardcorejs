function checkNumber(params) {
    if(params>0){
        console.log(`positive ${params}`);
        
    }
    else if (params<0){
        console.log(`negative ${params}`);
        
    }
    else{
        console.log("this is zero");
        
    }
}
// this is function call

// checkNumber(-5);
// checkNumber(7);
// checkNumber(0);

//this is
 let csharp = [10, 45, 60, 30, 90]
//  for (let index = 0; index < csharp.length; index++) {
//     if (csharp[index]>=50) {
//         console.log(`This no is greater then 50 is ${csharp[index]}`);
//     }
    
    
//  }

 let user = [{
    userName: "harsh",
    email: "harshofft@gmail.com",
    isLoggedin: true
},
{
    userName: "harry",
    email : "hdharsh122@gmail.com",
    isLoggedin : false
},
{
    userName: "firoz",
    email : "hdharsh122@gmail.com",
    isLoggedin : false
},
{
    userName: "zp",
    email : "hdharsh122@gmail.com",
    isLoggedin : true
}
]
function greetUser() {
    

for(let i = 0 ; i< user.length ; i++){
    if(user[i].isLoggedin==true){
        console.log(`Welcome ${user[i].userName}`);
    }
}
}
// ************fun call
// greetUser();

const stud = [
  { name: "Amit", marks: 70 },
  { name: "Ravi", marks: 35 },
  { name: "Sonia", marks: 80 },
  { name: "Neha", marks: 45 },
]
 function passedStudents() {
    for (let i = 0; i < stud.length; i++) {
        if (stud[i].marks >= 40) {
            console.log(`This student passed the exam: ${stud[i].name} who scored ${stud[i].marks} marks.`);
        }
    }

 }
// **********fun call
passedStudents();