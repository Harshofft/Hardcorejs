let stud =[
  { username: "harsh", age: 21 },
  { username: "amit", age: 16 },
  { username: "neha", age: 25 }
]
function getAdults(users) {
    for (let i = 0; i < stud.length; i++) {
        if(users[i].age>=18 ){
            console.log(`${users[i].username} student can vote his age is ${users[i].age}`);
            
        }
        
    }

}
// getAdults(stud)


const product = [
  { name: "Mobile", price: 12000 },
  { name: "Pen", price: 10 },
  { name: "Laptop", price: 50000 }
]
 function getExpensiveProducts(products){
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        if(element.price>= 1000){
            console.log(`this are the product which has high value ${element['name']}`);
            
        }
    }
 }
 getExpensiveProducts(product)

 //assignment 3
const  user = [
  { username: "harsh", isLoggedIn: true },
  { username: "amit", isLoggedIn: false }
]

function getWelcomeMessages(users){
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if(element.isLoggedIn==true){
            console.log(`Welcome ${element.username}`);
        }
        else{
            console.log('Please login' + element.username);
            
        }
    }
}
getWelcomeMessages(user)