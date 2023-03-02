let items = ["light", "banana", "phone", "book", "mouse"];

let plural = items.map((item)=>{
    if(item === "mouse"){
        return "mice";
    } else {
        return (item + "s");
    }
});

console.log(plural);