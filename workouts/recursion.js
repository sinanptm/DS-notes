let pali =str=>{
    if (str.length<=1) return true;
    if (str[0]!==str[str.length-1]) return false;
    str = str.slice(1,-1)
    return pali(str)
}


const reverse = str=>{
    if(str===''||str.length===1) return str;
    return str.slice(-1)+reverse(str.slice(0,-1));
}


const sum = num=>{
    if(num===0) return 0;
    return num + sum(num-1);
}

function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

