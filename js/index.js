let menuButton = document.querySelector('.dropdown-menu-header'),
    dropdownMenu = document.querySelector('.dropdown-menu-list');

menuButton.onclick = () => dropdownMenu.classList.toggle('dropdown-menu-list-closed');

let productItems = document.querySelector('.product-items'),
    instaBlock = document.querySelector('.social-showcase');

productItems.addEventListener('click', showProductPopup);



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
    setTimeout(addWindowPopupClosing, 0, productPopUp);
}


let instaItems = document.querySelectorAll('.instagram-gallery a'), photo;

for(photo of instaItems) {
    photo.addEventListener('touchend', showInstaPopup);
}

function showInstaPopup(){

    console.log(event.target)

    let instaPopUp = document.createElement('figure');
        instaPopUp.className = "insta-popup";

    let instaPreview = event.target.parentNode.querySelector('.instagram-preview');

    if(document.querySelector('.insta-popup') !== null) return;

    instaPreview.style.display = 'none';
    instaPopUp.innerHTML = event.target.parentNode.innerHTML;

    instaBlock.append(instaPopUp);

    addClosePopupButton(instaPopUp);
    setTimeout(addWindowPopupClosing, 0, instaPopUp);
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

function addWindowPopupClosing(elem) {
    document.body.addEventListener('click', () => elem.remove());
}

/* 
let statistic = document.querySelector('.statistics');
    currentBikesSold = 409;
    
function isStatisticVisible() {
    let statisticVisible = statistic.getBoundingClientRect(),
    windowHeight = document.documentElement.clientHeight;

    let topVisible = statisticVisible.top > windowHeight && statisticVisible.top < 0;

    return topVisible
}

function statisticCounter() {
        
    if (isStatisticVisible()) {
        growingStatistic = document.querySelector('.statistics-item-value__bikes'),
        growingStatisticValue = 0;
        growStatistic()
    }
}

function growStatistic() {
    growingStatisticValue += 1;
    growingStatistic.innerHTML = growingStatisticValue;
    if (growingStatisticValue < currentBikesSold){
        setTimeout(growStatistic, 5)
    }
}

function onScroll() {
    if (!isStatisticVisible()) {
        window.onscroll = statisticCounter;
        return true
    }
} */