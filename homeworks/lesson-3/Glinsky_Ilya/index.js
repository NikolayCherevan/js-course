// easy task

function getSum(a, b) {
    let lower, higher;
    let result = 0;
    if(a == b) {
        return a;
    } else {
        if(a > b) {
            higher = a;
            lower = b;
        } else {
            higher = b;
            lower = a;
        }
        for(i = lower; i <= higher; i++) {
            result += i;
        }
    }
    return result;
}

// switch-case task


function arithmetic(a, b, operator) {
    ops = {"add": a+b, "subtract": a-b, "multiply":a*b, "divide":a/b}
    return ops[operator]
  }


//   for loop task