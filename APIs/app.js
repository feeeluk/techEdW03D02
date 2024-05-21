let button = document.getElementById("buttonId");
button.addEventListener("click", function(){
    ShowData();
})

async function GetStuff()
{
    let response = await fetch("https://api.github.com/repos/feeeluk/philhenning");
    let json = await response.json();
    let myArray = Object.entries(json);

    return myArray;
}

async function ShowData()
{
    let array = await GetStuff();

    for(let i = 0; i < array.length; i++)
        {
            let newP = document.createElement("p");
            newP.innerText = i + ") " + array[i][0] + " : " + array[i][1];
            document.getElementById("returnedItems").appendChild(newP);
        }
}

