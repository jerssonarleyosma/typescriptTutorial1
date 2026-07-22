(()=>{
    let isEnable = true;
    isEnable = false;
    console.log('isEnable', isEnable);
    let isNew: boolean = false;
    console.log('isNew', isNew);
    isNew = true;
    console.log('isNew', isNew);
    const random = Math.random();
    console.log('random', random);
    isNew = random > 0.5 ? true : false; // debe retornar un booleano si no salta alerta
    console.log('isNew', isNew);
})()