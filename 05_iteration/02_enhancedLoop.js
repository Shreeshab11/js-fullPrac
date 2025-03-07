const arr = [1,2,3,4,5,6,7];
const arr1 = [
    {name:"shree",age:"23"},
    {name:"yash",age:25},
    {name: "divu",age:28}
]
for(const a of arr){
    console.log(a);
    
}
for(const a of arr1){
    console.log(a);
    
}

const map = new Map();
map.set(1,"name");
map.set(2,"js");
map.set(3,"cpp");
map.set(4,"c#");

console.log(map);

for(const [key,value] of map){
    console.log(key,value);
    
}

