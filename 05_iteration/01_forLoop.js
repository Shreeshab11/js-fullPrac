for (let index = 0; index <=10; index++) {
    
    console.log(index);
    
}

for(let i= 0;i<=5;i++){

    for(let j=0;j<=10;j++){
        if(i==4){
            continue;
           }
        console.log(`outer Loop ${j} : inner Loop ${i}`);
       
    }
}

const array = ["hello","world", "true" ];
for (let index = 0; index < array.length; index++) {
   console.log(array[index]);
   
    
}