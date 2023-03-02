let bools = [true,true,false,true,false,false];

let res = bools.map((bool)=>{
    if(bool === true){
        return Math.random();
    } else {
        return 0;
    }
});

console.log(res);