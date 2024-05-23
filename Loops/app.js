// FOR LOOP
// *******************************************

let listenFor = document.getElementById("forButtonId");
listenFor.addEventListener("click", RunFor);


function RunFor(){

    let howMany = document.getElementById("forInputId").value;

    for(let i = 0; i < howMany; i++){

        let newP = document.createElement("p");
        newP.innerText = i + ")";
        document.getElementById("forItems").appendChild(newP);
    }
}

// FOREACH LOOP
// *******************************************

let listenForEach = document.getElementById("forEachButtonId");
listenForEach.addEventListener("click", RunForEach);

let myArray = [1,2,3,4,5]

function RunForEach(){

myArray.forEach(function(i){
    let newP = document.createElement("p");
    newP.innerText = i + ")";
    document.getElementById("forEachItems").appendChild(newP);
})
    
}