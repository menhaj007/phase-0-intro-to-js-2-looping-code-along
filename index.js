// Code your solutions in this file
function writeCards(arr, birthday) {
    const tmpArr = [];
    for (let i = 0; i < arr.length; i++) {
        tmpArr[i] = `Thank you, ${arr[i]}, for the wonderful ${birthday} gift!`;
    }
    debugger;
    return tmpArr;
}

function countDown(n) {
    
    while (n >= 0) {
        console.log(n);
        n--;
        debugger;
    }
    
}
