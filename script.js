
function buyCar() {
   const cars = [
    "Porsche", 
   "Ford", 
   "Honda", 
   "Chevrolet", 
   "Nissan", 
   "Bmw", 
   "Mitsubishi",
    "Audi",
    "Ferrari",
    "Bugatti",
    "Delebil :)"
    
];


let newOut = document.getElementById("randomElementOut");

let child = newOut.firstChild;

while(child){
    newOut.removeChild(child)

    child = newOut.firstChild;
}

let RandomBrand = Math.floor(Math.random() * cars.length);

let newBrand = document.createElement("span");

newBrand.textContent = cars[RandomBrand];

newOut.appendChild(newBrand);

return newOut;

}
