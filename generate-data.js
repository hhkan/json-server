const faker = require("faker");
const fs = require("fs");

//set local to user vn
faker.locale= "vi";
// random data
// console.log(faker.commerce.department);
// console.log(faker.commerce.productName);
// console.log(faker.commerce.productName);
// console.log(faker.commerce.productDescription);

// console.log(faker.random.uuid());
// console.log(faker.image.imageUrl());
// console.log(faker.name.findName());
const randomCategoryList = (n)=>{
if (n <= 0 ) return[];
    const categoryList = [];

    Array.from(new Array(n)).forEach(()=>{
        const category = {
            id: faker.random.uuid(),
            name: faker.commerce.department(),
            createAt: Date.now(),
            updateAt: Date.now(),
        };
        categoryList.push(category);
        
    });

    return categoryList;
};


//random product

const randomProductList = (categoryList,numberOfProducts) =>{
    if(numberOfProducts <= 0) return[];
    const productList =[];
    for(const category of categoryList){
        Array.from(new Array(numberOfProducts)).forEach(()=>{
            const product ={
                categoryId: category.id,
                id: faker.random.uuid(),
                name: faker.commerce.productName(),
                color: faker.commerce.color(),
                price: Number.parseFloat(faker.commerce.price()),
                description: faker.commerce.productDescription(),
                createAt: Date.now(),
                updateAt: Date.now(),
                thumbnaiUrl: faker.image.imageUrl(400,400),

            };
            productList.push(product);
        });
    }
    return productList;
};


//iffe
(() =>{
//random
const categoryList = randomCategoryList(4);
const productList = randomProductList(categoryList, 5);

    // prepare db obje  ct
    const db ={
        categories :categoryList,
        product:productList,
        profile:{
            name:"Po",
        },
    };


    // ghi vafo file db.json
    fs.writeFile("db.json",JSON.stringify(db),() =>{
    console.log("Generate data successfully =))" );
    });
})();