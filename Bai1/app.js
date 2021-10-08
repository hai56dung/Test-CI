let inputArray = [2,3,-5,-2,4]

function adjacentElementsProduct(inputArray) {
    let maxVol = inputArray[0]*inputArray[1];
    
    for (let i = 1; i < inputArray.length - 1; i++){
        if(maxVol < inputArray[i]*inputArray[i+1]){
            maxVol = inputArray[i]*inputArray[i+1];
        }
        

}
    return maxVol;
}
console.log(adjacentElementsProduct(inputArray))
