function sumOfEven(start,end){
    if(typeof start !== 'number' || typeof end !== 'number'){
        return 'invalid number supplied'
    }
    else if(start > end){
        return 'start is too big'
    }
    var sum =0
    for(var i = start; i<=end; i++){
        if(i%2 === 0){
            sum = sum + i;
        }
    }
    return sum
}
var getSum = sumOfEven(1000,500);
console.log(getSum);
