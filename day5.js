// **********printing every no 
let numbers = [10, 20, 30, 40,50];
function arry (){
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
    
} }
// funcition call
// arry()

//******greet user function 

 let namexs =["raman" , "sachine" , "heroine" , "harry"]
 function greetUser (){
 for(let i= 0 ; i<namexs.length ; i++){
    const userName = namexs[i]
    console.log(`hello ${userName}`);
 }}
// ****function call

// greetUser()

let marks = [50, 70, 60, 70 ,90, 35, 40,80,33];
function jobEl (){
    for(i=0;i<marks.length;i++){
        if (marks[i]>=50) {
            console.log(marks[i]);
            
        }
    }
}
jobEl()