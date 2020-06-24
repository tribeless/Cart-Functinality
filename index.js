//adding functionality to remove button
var removeButton = document.querySelectorAll(".remove-btn");
removeButton.forEach(event=>event.addEventListener("click",removeRowElements));

function removeRowElements(){
    var clickedButton = this;
    clickedButton.parentElement.remove();
    updatePrice();
    
    
    
}

//adding functionality to quantity change

var valueChange = document.querySelectorAll(".item-quantity");
valueChange.forEach(event=>event.addEventListener("change",updatePrice));

function updatePrice(){

    var inputValueListener = this;
    if(isNaN(inputValueListener.value)|| inputValueListener.value<=0){
        inputValueListener.value = 1;
    }
    else{
        inputValueListener.value;
    }

    var activeProductRow = document.getElementsByClassName("product-cart-menu");
    var totalAmountInCart = 0;
    for(var i=0;i<activeProductRow.length;i++){
        var activeproductRow = activeProductRow[i];
        var productPrice = activeproductRow.querySelectorAll(".item-price")[0].innerHTML.replace("Ksh", "");
        var inputValue = activeproductRow.querySelectorAll(".item-quantity")[0].value;
        totalAmountInCart = totalAmountInCart+(productPrice*inputValue);
        
    }
    var totalAmount = document.querySelector(".total-btn");
    totalAmount.innerHTML = totalAmountInCart;
 
}

//adding new elemnts to cart
var addToCartButton = document.querySelectorAll(".cart-btn");
addToCartButton.forEach(event=>event.addEventListener("click",addElementToCart));

function addElementToCart(){

    var clickedAddToCartButton = this;
    var selectedProduct = clickedAddToCartButton.parentElement;
    var imageSrc = selectedProduct.querySelectorAll(".contents img")[0].src;
    var title = selectedProduct.querySelectorAll(".product-name")[0].innerHTML;
    var price = selectedProduct.querySelectorAll(".product-price")[0].innerHTML;
     
    addNewElementsToRow(imageSrc,title,price);
    updatePrice();

}

//creating new elementRow
function addNewElementsToRow(imageSrc,title,price){

    var itemTitle = document.querySelectorAll(".item-title");
    for(var i=0;i<itemTitle.length;i++){
        if (itemTitle[i].innerHTML===title) {
            alert("The item has alredy been added to the cart");
            return;
        }
    }
    

    var newElementRow = document.createElement("div");
    var parentCartRow = document.querySelector(".product-row");
    var alreadyExistingRow = `
    <div class="product-cart-menu">
                    <span class="item-image"><img src="${imageSrc}" alt=""></span>
                    <span class="item-title">${title}</span>
                    <input class="item-quantity" type="number" name="" value="1">
                    <span class="item-price">${price}</span>
                    <button type="button" class="remove-btn">REMOVE</button>
                </div>


    
    `;
    newElementRow.innerHTML = alreadyExistingRow;
    parentCartRow.append(newElementRow);

    var itemQuantity=document.querySelectorAll(".item-quantity");
    itemQuantity.forEach(event=>event.addEventListener("change",updatePrice));
    var deleteBtn = document.querySelectorAll(".remove-btn");
    deleteBtn.forEach(event => event.addEventListener("click", removeRowElements));
 
}