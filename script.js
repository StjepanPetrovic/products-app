var input = document.getElementById("one-product");
var add = document.getElementById("submit-button");
var remove = document.getElementById("remove-all-button");
var number = document.getElementById("number")
var counter = 0;

input.addEventListener("keydown", function(event)
{
    if (event.key == "Enter") 
    {
        counter++;
        number.innerHTML = counter;
        addProduct();
    }
})

add.addEventListener("click", function(event)
{
    if (document.getElementById("one-product").value)
    {
        counter++;
        number.innerHTML = counter;
        addProduct();
    }
})

remove.addEventListener("click", function(event)
{
    counter = 0;
    number.innerHTML = counter;
    eraseList();
})

function addProduct() 
{
    var product = document.getElementById("one-product").value;
    var h2 = document.createElement("h2");

    document.getElementById("one-product").value = '';

    h2.appendChild(document.createTextNode(product));

    var div = document.getElementById("all-products");

    div.insertAdjacentElement("beforeend", h2)
}

function incrementCounter()
{
    var div = document.createElement("div");

    div.appendChild(document.createTextNode(counter));
}

function eraseList()
{
    var list = document.getElementById("all-products");
    var counter = 0;

    while (counter < list.childNodes.length) 
    {
        list.removeChild(list.childNodes[counter]);
    }
}
