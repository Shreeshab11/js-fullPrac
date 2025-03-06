let a = 10;
const b = 20;

if(true){
    const b = 30;
    console.log(b);

     const user =  ()=> {
        console.log(b);
        console.log(b);  
        console.log(a);
        
    }
    user();
   
}

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  console.log(myFunc());
  


