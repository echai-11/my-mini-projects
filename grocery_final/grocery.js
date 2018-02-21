var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
    var groceries = JSON.parse(xhr.responseText);
    var groceryHTML = "<ul class = 'grocery-list'>";
    for (i = 0; i < groceries.length; i ++){
        groceryHTML += "<li><input type='radio' name='selected' class='myGroceries' id=" + groceries[i].item + " value=" + groceries[i].price + ">";
        groceryHTML += "<span>" + groceries[i].item + "</span>";
        groceryHTML += "<span class='price'>$" + groceries[i].price + "</span>";
        groceryHTML += "</li>"
    }
    groceryHTML += "</ul>";
    document.getElementById('grocery-list').innerHTML = groceryHTML; 

    var addButton = document.createElement("button");
        addButton.setAttribute("type", "submit");
        addButton.setAttribute("id", "addToCart");
        addButton.innerHTML = "add to cart";
    var addButtonDiv = document.getElementById('le-Button');
    addButtonDiv.appendChild(addButton);
    var displayCartDiv = document.getElementById('cartinner');

    var item;
    var item_name;
    var item_price;
    var item_$price;
    var cart_items ="";
    var total_amount=0;
    var radioButtons = document.getElementsByTagName('input');
    function checkRadioButtons(radio_group){
        for (i=0; i< radio_group.length; i++){
            var checked_button = radio_group[i];
            if (checked_button.checked){
                return checked_button;
            }
        }
    }//end checkRadiobuttons
    addButton.onclick = function(){
       item = checkRadioButtons(radioButtons);
       item_name = item.id;
       item_price = item.value;
       item_$price = parseFloat(item_price);
       total_amount += item_$price;
       cart_items += "<span>" + item_name + "</span>";
       cart_items += "<span class= 'price'>$" + item_price + "</span><br>";
       displayCartDiv.innerHTML = cart_items; 
    }//end addButton click
    var addTotal = document.createElement("button");
        addTotal.setAttribute("type", "submit");
        addTotal.setAttribute("id", "addTotal");
        addTotal.innerHTML = "add total";
    var addTotalDiv = document.getElementById('add-total');
    addTotalDiv.appendChild(addTotal);
    var displayTotalDiv = document.getElementById('display-total-inner');

    addTotal.onclick = function(){
        displayTotalDiv.innerHTML = "$" + total_amount.toFixed(2); 
    }//end addTotal
    } // xhr readyState and status
}; //onreadystatechange
xhr.open ("GET", "https://jsonblob.com/api/jsonBlob/dba6df84-1619-11e8-9e49-5f9fc41f80ec")
xhr.send();


