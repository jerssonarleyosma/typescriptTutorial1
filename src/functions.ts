(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL';

    function createProductToJson ( 
        title: string, 
        createdAt: Date, 
        stock: Sizes,
        optional?: number
    ): number | string {
        return(`${title} --- ${createdAt} --- ${stock} --- ${optional}`);
    }

    console.log(createProductToJson('titulo', new Date(), 'L'));

    //arrow function
    const createProductToJsonV2 = (
        title: string, 
        createdAt: Date, 
        stock: Sizes 
    ): number | string => `${title} --- ${createdAt} --- ${stock}`;

    const probando = ( texto: string ): string => texto;
    console.log(probando('retorna un texto'));
})()