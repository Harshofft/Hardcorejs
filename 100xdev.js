let objectAry = {
                 food: [10, 20, 30],
                 travel: [5, 15],
                 bills: [40, 60] 
                }

const total =()=>{
    let totalFood = objectAry.food[0]+objectAry.food[1]+objectAry.food[2];
    let totalTravel = objectAry.travel[0]+objectAry.travel[1];
    let totalBills = objectAry.bills[0]+objectAry.bills[1];
    objectAry.food = totalFood;
    objectAry.travel = totalTravel;
    objectAry.bills = totalBills;
    console.log(objectAry);
    
    

}
// total();

const fruitAry = ["apple", "banana", "apple", "orange", "banana", "apple"]

// const countFruits = () => {
//         let appleCount =0 ;
//         let bananaCount =0;
//         let orangeCount = 0;
//     for (let i = 0; i < fruitAry.length; i++) {
        
//         if (fruitAry[i]=="apple") {
//             appleCount ++
//         }
//         else if(fruitAry[i]=="banana"){
//             bananaCount++
//         }
//         else{
//             orangeCount++
//         }
//     }
//     console.log(`apple:${appleCount} , banana:${bananaCount} , orange:${orangeCount}`);
    
// }
const countFruits = () => {
    const count = {};
    fruitAry.forEach(fruit => {
        count[fruit] = (count[fruit] || 0) + 1;
        
    });
    console.log(count);
}
 countFruits();


 