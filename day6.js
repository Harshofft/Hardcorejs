let car = {
    brand: "tata",
    model: "altroz",
    price: 10000000
}

// console.log(car.brand);
// console.log(car.model);
// console.log(car.price);

//assignment 2 

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

function userLoggedIn() {
    for(i=0; i< user.length; i++){
        let hero = user[i]
        if(hero.isLoggedin==true){
            let present = user[i]
        }
        else if ( hero.isLoggedin==false){
            let absent = hero
            
        }
    }
}
userLoggedIn()