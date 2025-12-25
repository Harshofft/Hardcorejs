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
    
    console.log(element);
    
 }