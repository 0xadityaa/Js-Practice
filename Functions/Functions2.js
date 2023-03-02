const noRemainder = (num, mod) => {
    if(num%mod === 0){
        return true;
    } else {
        return false;
    }
}

const res1 = noRemainder(10,7);
const res2 = noRemainder(100,10);

console.log(res1);
console.log(res2);