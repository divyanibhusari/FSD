let fruits =[
    {
        Name:"Mango",
        Color:"Yellow",
        StockUnit: 8,
        Description:"Delicious"
    },
    {
        Name:"Apple",
        Color:"Red",
        StockUnit: 5,
        Description:"Delicious"
    },
    {
        Name:"Bananas",
        Color:"Yellow Skin",
        StockUnit: 12,
        Description:"Curved"
    },
    {
        Name:"Grapes",
        Color:"green",
        StockUnit: 3,
        Description:"Juicy pulp"
    }
]
let FruitTable = document.querySelector("#Tabelfruit");
fruits.forEach((fruit)=>{
let NewRow = document.createElement("tr")
NewRow.classList ="fruit-row"   
// NewRow.classList ="Name"


           //css properties
for(let key in fruit){
    let newcolumn =document.createElement("th")
    newcolumn.innerText =fruit[key]
    newcolumn.classList =key
    NewRow.appendChild(newcolumn)
}
FruitTable.appendChild(NewRow)
})