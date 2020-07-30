let menuButton = document.querySelector('.dropdown-menu-header');
let dropdownMenu = document.querySelector('.dropdown-menu-list');

menuButton.onclick = function showMenu() {
    dropdownMenu.classList.toggle('dropdown-menu-list-closed');
}

let productItems = document.querySelector('.product-items');
let instaBlock = document.querySelector('.social-showcase');
let instaItems = document.querySelectorAll('.instagram-photo'), photo;

productItems.addEventListener('click', showProductPopup);

for(photo of instaItems) {
    photo.addEventListener('click', showInstaPopup);
}

function showProductPopup(){
    let target = event.target;

    if(target.classList.contains("product-price")) return;
    
    let targetPopup = target.parentNode;
    while (!targetPopup.classList.contains("product-item")) {
        targetPopup = targetPopup.parentNode;
    }

    let productPopUpWrapper = document.createElement('figure');
    productPopUpWrapper.className = "product-pop-up-wrapper";
    productPopUpWrapper.innerHTML = targetPopup.innerHTML;
    
    let productPopUp = document.createElement('div');
    productPopUp.className = "product-popup";
        if(document.querySelector('.product-popup') !== null) return;
    
    let learnMore = productPopUpWrapper.querySelector(".learn-more");
        learnMore.remove();
    
    productPopUp.append(productPopUpWrapper);
    productItems.append(productPopUp);

    let productDescription = document.createElement('article');
    productDescription.className = "popup-product-description";
    productDescription.innerHTML = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas fringilla tincidunt dui ac tincidunt. Cras faucibus sit amet augue sed ullamcorper.</p>';

    productPopUpWrapper.append(productDescription);
    addClosePopupButton(productPopUp);
            
/*     window.onclick = (event) => {
        let productPopUp = document.querySelector('.product-popup');
        if (event.target == productPopUp) {productPopUp.remove(); console.log('Done')};
        
    }
 */
}

function showInstaPopup(){

    let instaPopUp = document.createElement('figure');
    instaPopUp.className = "insta-popup";

    if(document.querySelector('.insta-popup') !== null) return;
    instaPopUp.innerHTML = event.target.parentNode.innerHTML;

    instaBlock.append(instaPopUp);

    addClosePopupButton(instaPopUp);
}

function addClosePopupButton(elem) {
    let closePopupButtonWrapper = document.createElement('div');
        closePopupButtonWrapper.className = "close-popup-button-wrapper";
        elem.prepend(closePopupButtonWrapper);

    let closePopupButton = document.createElement('button');
        closePopupButton.className = "close-popup-button";
    closePopupButtonWrapper.prepend(closePopupButton);
    closePopupButton.addEventListener('click', () => elem.remove());
}