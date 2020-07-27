let menuButton = document.querySelector('.dropdown-menu-header');
let dropdownMenu = document.querySelector('.dropdown-menu-list');

menuButton.onclick = function showMenu() {
    dropdownMenu.classList.toggle('dropdown-menu-list-closed');
}

let productItems = document.querySelector('.product-items');

productItems.onclick = function(event) {
    let target = event.target;

    if(target.classList.contains("product-price")) return;

    let targetPopup = target.parentNode;
    while (!targetPopup.classList.contains("product-item")) {
        targetPopup = targetPopup.parentNode;
    }

    let productPopUp = document.createElement('figure');
    productPopUp.className = "product-popup";
    productPopUp.innerHTML = targetPopup.innerHTML;
    productItems.append(productPopUp);
   
    // targetPopup.style.backgroundColor = 'lightblue';
    console.log(targetPopup.innerHTML)
}

/* for(photo of productPhoto) {
    photo.addEventListener('click', showProduct)
}

function showProduct() {
    let productPopUp = document.createElement('figure');
        productPopUp.className = "product-popup";
        productPopUp.innerHTML = photo.innerHTML;

    document.body.append(productPopUp);
}
 */