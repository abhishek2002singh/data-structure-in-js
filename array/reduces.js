//reducemethod  -- reduce method take call back function and return value

let array = [1,2,3,4,5,6,7,8,9]
const result = array.reduce((acc , curr)=>acc+curr,0)
console.log(result)