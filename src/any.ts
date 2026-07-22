(()=>{
    let myDynamicVar: any;
    myDynamicVar = 1;
    myDynamicVar = true;
    myDynamicVar = {};
    myDynamicVar = 'hola'; //este valor define como se usara mas abajo en rta

    const metodo = myDynamicVar.prueba;
    console.log('metodo', metodo);

    //haciendo un cast (asercion de tipo)
    const rta = (myDynamicVar as string).toUpperCase(); // si lo trato como un string me ayuda a ver todos sus metodos aunque hoy en dia con ia eso no importa
    console.log('rta', rta);

    myDynamicVar = 1212;
    const rta2 = (<number>myDynamicVar).toFixed(2); // otra forma de hacer un cast
    console.log('rta2', rta2);
})()