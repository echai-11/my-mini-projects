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
    var item_$price;
    var cart_items ="";
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

       cart_items = "<div><input type='radio' class='checkboxes'><span>" + item.id + "</span>";
       cart_items += "<span class= 'price cart_price' value=" + item.value + ">$" + item.value + "</span></div>";
       displayCartDiv.innerHTML += cart_items; 
    }//end addButton click

    var removeButton = document.createElement("button");
        removeButton.setAttribute("type", "submit");
        removeButton.setAttribute("id", "removeButton");
        removeButton.innerHTML = "remove item";
    var addTotal = document.createElement("button");
        addTotal.setAttribute("type", "submit");
        addTotal.setAttribute("id", "addTotal");
        addTotal.innerHTML = "add total";
        addTotal.style.marginLeft ="5px";
    var addTotalDiv = document.getElementById('add-total');
    addTotalDiv.appendChild(removeButton);
    addTotalDiv.appendChild(addTotal);
    var displayTotalDiv = document.getElementById('display-total-inner');

    var cartPrices = document.getElementsByClassName('cart_price');
    
    
    addTotal.onclick = function(){
        var cartArr= [];
        for (i=0; i<cartPrices.length; i++){
            price = cartPrices[i].innerText;
            priceB = price.slice(1);
            cartArr.push(priceB);
        } 
        console.log(cartArr); 
        var total_amount = 0;
        for (i=0; i<cartArr.length; i++){
            var add = parseFloat(cartArr[i]);
            total_amount += add;
            displayTotalDiv.innerText = total_amount.toFixed(2);
        }      
    }//end addTotal

    removeButton.onclick = function(){
        var checkBoxes = document.getElementsByClassName('checkboxes');
        var isChecked = checkRadioButtons(checkBoxes).parentElement;
        isChecked.innerText= "";
        isChecked.innerHTML= "";
        isChecked.style.display = "none";
    }//end removeButton click

    } // xhr readyState and status
}; //onreadystatechange
xhr.open ("GET", "https://jsonblob.com/api/jsonBlob/dba6df84-1619-11e8-9e49-5f9fc41f80ec")
xhr.send();


