// Dummy Data In The Form Of Array Of An Object.
const myArray = [
    {id:1, name: "Akash Dhiman", productName:"laptop", price:38000},
    {id:2, name: "Raja Dhiman", productName:"Mobile", price:15000},
    {id:3, name: "Ravi Teja", productName:"TV", price:18000},
    {id:4, name: "Lootera", productName:"Mobile", price:14000},
    {id:5, name: "Chor Shor", productName:"Bike", price:5000},
    {id:5, name: "Chor Shor", productName:"Bike", price:10000},
    {id:5, name: "Chor Shor", productName:"Bike", price:50000},
    {id:5, name: "Chor Shor", productName:"Bike", price:90},
    {id:5, name: "Chor Shor", productName:"Bike", price:6000},
    {id:5, name: "Chor Shor", productName:"Bike", price:12},
    {id:5, name: "Chor Shor", productName:"Bike", price:50},
    {id:5, name: "Chor Shor", productName:"Bike", price:7000},
    {id:5, name: "Chor Shor", productName:"Bike", price:90000},
    {id:5, name: "Chor Shor", productName:"Bike", price:90000},
    {id:5, name: "Chor Shor", productName:"Bike", price:8000},
    {id:5, name: "Chor Shor", productName:"Bike", price:90000},
    {id:5, name: "Chor Shor", productName:"Bike", price:200},
    {id:5, name: "Chor Shor", productName:"Bike", price:3000},
    {id:5, name: "Chor Shor", productName:"Bike", price:400},
];

// This Is Every Method In JS
const everyOutput = myArray.every((data)=>{
    return data.price >= 14000; 
});
// This Is Every Method In JS In Single Line Statement
const everyOutput = myArray.every((data)=> data.price >= 14000);
// console.log(everyOutput);

// This Is find Method In JS
const findOutput = myArray.find((data)=>{
  return data.id == 3;
});
// console.log(findOutput);

// This Is reduce Method In JS
const reduceMethod = myArray.reduce((item, currentItem)=>{
    return item + currentItem.price;
},0)
// console.log(reduceMethod);

// This Is filter Method In JS
const filterOutput = myArray.filter((data)=>{
    return data.id % 2 == 0;
})
// console.log(filterOutput);

//This Is Sorting Low To High.
const sortOutput = myArray.sort((a,b)=>{
    return a.price - b.price;
})
// console.log(sortOutput);

//This Is Dorting High To Low.
const sortOutput2 = myArray.sort((a,b)=>{
    return b.price - a.price;
})
// console.log(sortOutput2);


// This Is map Method In JS.

const mapOutput = myArray.map((data, index)=>{
    return "Your ID Is " + data.id + " Your Name Is " + data.name + " And Total Price = " + data.price + " With Index " + index;
})

// console.log(mapOutput);