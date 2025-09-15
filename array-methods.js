const products =[
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
    {name:'laptop',price:3200,brand:'lenovo',color:'black'},
];

// Map
// forEach
// filter
// find



const brands =products.map(p =>p.brand);
// console.log(brands);

// products.forEach(p =>console.log(p))
products.forEach(p =>{
    // console.log(p)
})

// includes

// filter
const cheap =products.filter(p =>p.price<3000);
console.log(cheap)