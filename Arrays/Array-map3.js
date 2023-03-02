let prices = [1.23,19.99,85.2,32.87,8,5.2];

let pricesAfterTax = prices.map((price)=>{
    if(price > 10){
        let tax = price*20/100;
        return price+tax;
    } else {
        return price;
    }
});

console.log(pricesAfterTax);