(()=>{
    let myNull: null = null;
    let myUndefined: undefined = undefined;

    let myNumber: number | null = null; // en react mientras no cargue el template el valor es null por ende al inicio debe ser null
    myNumber = 12;
    console.log('myNumber', myNumber);

    let myString: string | undefined = undefined;
    myString = "hola";
    console.log('myString', myString);


    function hi(name: string | null) {
        let hello = "hola ";
        if (name) {
            hello += name;
        } else {
            hello += "nobody";
        }
        console.log(hello);
    }

    function hiV2(name: string | null) {
        let hello = "hola ";
        hello += name?.toLowerCase?.() || "nobody";  // el ?. solo valida lo anterior y si no retorna undefined
        console.log(hello);
    }

    hi("Nicolas");
    hi(null);
    hiV2("jersson");
    hiV2(null);
})()