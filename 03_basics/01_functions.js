

const myFun = ()=>{
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("E");
    console.log("E");  
}

const addition = (number1 , number2)=>{

    return number1+number2;
}

function add(n1,n2){
    console.log(n1+n2);
    
}
addition(10,20) // its returning not printing
console.log(addition(10,20));
add(10,10) //not returning



// const login = (userName)=>{

//     if(userName === undefined){
//         console.log("Please enter the userName");
//         return
//     }
//     else{
//         console.log(`${userName} just loggedIn`);
        
//     }

// }

const login = (userName ="unknowUser")=>{

 console.log(`${userName} just loggedIn`);

}

login();//default value will be passed as parameter if no argument is passed

const priceCust = {
    userName : "shree",
    price:200
}

const handlingObject = (obj)=>{

    console.log(`Username is: ${obj.userName} and price is ${obj.price}`);
    
}

handlingObject(priceCust)