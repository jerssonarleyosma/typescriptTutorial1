(()=>{
    //aca le digo que me retorne un string especificamente
    const calcTotal = (prices:number[], tax: number): number => {
        return prices.reduce((total, price) => total + price, 0) * (1 + tax);
    }
    
    const prices = [1, 2, 3, 4, 5];
    const tax = 0.2;
    const total = calcTotal(prices, tax);
    console.log('total', total);
})()