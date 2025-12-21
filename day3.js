// loop 

// for(let i = 1; i <= 5; i++) {
//     console.log("Iteration number: " + i);
// }

// ****************return loop

// for (let i=10 ; i>=1 ; i--){
//     console.log(i);
    
// }

//****************logic */

// let i =20 ;
// let result = i/2;
//this will be quesont
// let rem = i%2
// console.log(rem);
 
//**************** */ all even no 

// for(let i = 1; i<= 20 ; i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }

 //******* */ finding even with 2 loop 

// for(let i = 1; i<3; i++){
//     for (let j = 1 ; j<=10;j++){
//         if (i==2){
//             console.log(i*j);
            
//         }
//     }
// }
    let arryby3 = []
    let arryby2 = []
for (let i = 1; i<=30; i++){
   
    

    if (i%3==0) {
      arryby3.push(i)
        
    } 
    
   
    if (i%2==0) {
        arryby2.push(i)
    }
    
    

}
console.log("this is divisible by 2");
console.log(arryby2);
console.log("this is divisible by 3");
console.log(arryby3);
