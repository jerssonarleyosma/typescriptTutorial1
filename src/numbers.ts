(()=> {
    let price = 100;
    price = 12;
    console.log('price', price);

    let age: number = 32;
    age = age + 1; 
    console.log('age', age);


    let onlyNumber: number = 11;
    console.log('onlyNumber', onlyNumber);
    if (onlyNumber > 10) {
        console.log('si lo es')
    }

    let descontar = parseInt('123');
    console.log('descontar', descontar);

    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0b101000100;
    console.log('bin', bin);
})()