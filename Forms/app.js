const FORM = document.getElementById("formId");
FORM.addEventListener("submit", function(event){
    SubmitAction(event);
});

function SubmitAction(event)
{
    event.preventDefault();

    const FORMDATA = new FormData(event.target);
    
    const MYOBJECT = Object.fromEntries(FORMDATA);

    let = document.body.style.backgroundColor = MYOBJECT.colourName;
    console.log(event);
}