(()=>{
    let myDynamicVar: string | number;
    myDynamicVar = 1;
    myDynamicVar = 'hola';

    function greeting(myText: string | number) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()}`);
        } else if (typeof myText === 'number') {
            console.log(`number ${myText.toFixed(1)}`);
        }

    }
    greeting('hola');
    greeting(123.512);
})()