const arr =[[1,2,3] ,[5,6,7],[9,10,11]]
const arra=[]
const array =[]
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++)
    {
        if(i==j){
            arra[i]=arr[i][j]
        }
        
    }
}
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++)
    {
        array[i]=arr[i][j-i]
        
    }
}
console.log(arra)
console.log(array)

const arr2 =arra.concat(array)
console.log(arr2)