// for each , filter , reducer , map , set 



//for in loop
const arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const str = "Hello World";
for (const i of arry) {
    
    
    const element = i
    // console.log(str[i]);
    
    // console.log(element);
    
}
 // map is an kind of object 

 //********************important note

 // for of loop is for directly give the value if we using on map it can give key and value both  as shown below
 const map = new Map();
 map.set('a',1);
 map.set('b',2);
 map.set('c',3);

 for (const [key, value] of map) {
    // console.log(map);
    // console.log(`${key}:- ${value}`);
    
    
 }

 // methode for object
 // for in  loop

 //********imp notes for for in  */
 
 //for in loop is used for object or array and it give the key of the object 
 // as shown below
 const languages = {
    js: "javaScript",
    py: "python",
    rb: "ruby",
    java: "java"
 }

 for (const key in languages) {
    // console.log(`${key} : ${languages[key]}`);
    
    
 }
 
 const langArry = ["js", "py", "rb", "java"];
 for (const key in langArry ) {

    
    const element = langArry[key];
    
   //  console.log(element);
    
 }

 //most important array methods forEach , map , filter , reduce
 
 //forEach
 const langArry2 = ["js", "py", "rb", "java"];

 langArry2.forEach((val , index, array) => {
   // console.log(`index is ${index} value is ${val}  and array is ${array}`);
   
 })
  
 // this we also can use for array of objects
 const userx = [
   {name: "john", age: 25, city: "New York"},
   {name: "alice", age: 30, city: "Los Angeles"},
   {name: "bob", age: 22, city: "Chicago"},
   {name: "eva", age: 28, city: "Miami"}
 ]

 userx.forEach((item) => {
   console.log(item.name+ `and his age is ${item.age} is from ` + item.city);  
   
 })