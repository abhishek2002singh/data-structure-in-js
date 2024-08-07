let num1=[3,5,2,7]
let num2=[10,1,9]
const numb1=num1.sort((a,b)=>a-b)
const numb2=num2.sort((a,b)=>a-b)
const arr1=new Set(numb1)
const arr2=new Set(numb2)
for(let value of arr1){
    if(arr2.has(value)){
        console.log(value)
        break
    }
}
console.log(numb1[0] ,numb2[0])