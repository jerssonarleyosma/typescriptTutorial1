(()=> {
    let productTitle = 'My product title';
    productTitle = 'My new product title';
    console.log('productTitle', productTitle);
    const productDescription = "My product description";
    console.log('productDescription', productDescription);
    let productPrice = 100;
    let isNew = true;
    let sumary = `
        My new product description sumary
        titulo: ${productTitle}
        precio: ${productPrice}
        isNew: ${isNew}
    `;
    console.log('sumary', sumary);
})()