

let btn = document.getElementById("btn");
btn.addEventListener('click',clickHandler);

function clickHandler()
{
    console.log("Button clicked");

    let http = new XMLHttpRequest();

    http.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    http.onload = function()
    {
        console.log(this.responseText);
    }

    http.send();
}