// push  -- push is add element in last index of array . and return length of array . he modify original array 

// const array = ['apple' , 'banana']

// const size=  array.push('papaya')

// console.log(array)

// console.log(size)

//pop --pop are delete element from last index of array . and return delete element . it modify original array

// const arr = ['kamal' , 'lalu' , 'ujjwal' , 'abhishek' , 'ram sajeevan']

// const deleteelement = arr.pop()

// console.log(arr)
// console.log(deleteelement)


//shift method  --- shift method are delete array element of first index . original array is modify . and return deleted element

// const checkarray = [9,5,63,24,78,5,654,23]
// const deleteelement = checkarray.shift()
// console.log(deleteelement)
// console.log(checkarray)

//unshift method- -unshift element are add element of first index . and return array size . its modify original array

// const arr = [1,45,6,3,2,5,9,4,6]
// const size = arr.unshift(5)
// console.log(arr)
// console.log(size)


// slice method- slice method are return a portision of array . its does not modify original array . 

// const array = ['banana' , 'apple' , 'papaya', 'orange' , 'grapes']

// const slicemethod = array.slice(1,3)

// console.log(slicemethod)

// console.log(array)


// splice method --  splice method are add or remove element . it modify original array 

// const array = ['banana' , 'apple' , 'papaya', 'orange' , 'grapes']

// const check= array.splice(1,1 ,'peer')

// console.log(check)
// console.log(array)


// concat method   ---  concat method are add one or more array in one new array . its does not modify original array

// const array1=[1,2,3,4,5]

// const array2=[6,7,8,9]

// const array3=[10,11,12,13,14,15]

// const newarray = array1.concat(array2,array3)
// console.log(newarray)


//join method  -- join method are use seperate array . means change array to string . it does not modify original array . he return new array

// const array1=['apple','banana','papaya']
// const newarray = array1.join(',')
// console.log(newarray)
// console.log(typeof newarray)


//reverse method -- reverse method are reverse the array element . it is modify original array

// const array = [1,2,3,4,5,6,7,8,9]
// const check = array.reverse()
// console.log(array)
// console.log(check)


//sort method -- sort mrthod are sort the array element in increasing or decreasing manner . 

const array1 = ['papaya' , 'banana' , 'apple' , 'grapes']
const array2 = [9,5,3,7,4,61,14,28,99,36,12]
console.log(array1.sort())
const newarray = array2.sort((a,b)=>a-b)
console.log(newarray)