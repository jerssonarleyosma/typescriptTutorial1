(() => {
    //aca cuando imprimo id me imprime undefined
    type User = {
        email: string,
        password: number,
        id?: number
    }
    const login = (data: User) => {
        console.log(data.email, data.password, data.id);
    }

    login({
        email: 'jerssonarleyosma@gmail.com',
        password: 123456
    })

    //aca no se imprime undefined en id porque ni lo pushea
    const products: User[] = [];

    const addProduct = (data: User) => {
        products.push(data);
    }
    addProduct({
        email: 'jerssonarleyosma@gmail.com',
        password: 12, 
    });
    console.log(products);
})()