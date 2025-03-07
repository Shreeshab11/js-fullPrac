const arrays = [1,2,3,4,5,6,7,8,9,10]

const myarray = arrays.forEach((num)=>{
    console.log(num);   
})

console.log(myarray);

const myfilter = arrays.filter((num)=>{
    return num >4
})

console.log(myfilter);


const maparray = arrays.map((num)=>{
    return num  + 5;
})

console.log(maparray);
