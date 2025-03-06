const JUser = {
    name: "shree",
    age:24,
    id:123456,
    gmail:"shreeshab11@gmail.com",
    state:"Maharashtra",
    Country: "India",
    isMarried: false,

}


console.log(JUser.name);
console.log(JUser["gmail"]);

JUser.name = "ShreeSPades"
console.log(JUser);

JUser.greeting = function(){
    console.log(`Greetings ${this.name}`);
    
}


console.log(JUser);


JUser.greeting();
