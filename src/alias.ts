(()=>{
    
    //para los tipos se usa pascal case
    type UserId = string | number;
    
    let userId: UserId;


    //literal types
    // let shirtSize: 'S' | 'M' | 'L' | 'XL';  asi se usa sin declarar tipos antes si no directamente
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    
    let shirtSize: Sizes;
    shirtSize = 'M';
    shirtSize = 'XL';

    function greeting(myText: UserId, size: Sizes) {
        if (typeof myText === 'string') {
            console.log(`string ${myText.toLowerCase()} ${size}`);
        } else if (typeof myText === 'number') {
            console.log(`number ${myText.toFixed(1)} ${size}`);
        }

    }
    greeting(123, 'M');
    greeting('hola', 'L');
})()