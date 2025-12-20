//************** */ if else statement example

// function canVote(age) {
//     if(age >= 18){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(canVote(20)); // Expected output: true
// console.log(canVote(16)); // Expected output: false
function canBuythephone(balance){
    if(balance >= 10000){
        return "You can buy the phone";
    }
    else if(balance >= 5000){
        console.log("you can not buy the phone");
        
    }
}
canBuythephone(6000);
console.log( canBuythephone(12000));
