

// dynamic boxes
function createDynamicBox(imageSrc, description, price, discountPrice) {
    return `<div id="" class="  item box  flex justify-center item-center flex-col gap">
  <div class="flex gap img ">
    <button  class=" prevBtn cursor btn2">&lt;</button>
    <img class="productImage" src="${imageSrc}" alt="") >
    <button class=" nextBtn cursor btn2 " >&gt;</button>
  </div>
    <div class="description color-3 flex justify-center item-center">${description}</div> 
    <div class="description flex justify-center item-center color-2 bold">RS = ${price} <sub >RS =${discountPrice} </sub></div>
    <a href="#"><button class="btn cursor">Buy Now</button></a> 
  </div>`;
}
function addDynamicBoxToPage(imageSrc, description, price, discountPrice) {
    const container = document.getElementById("container");
    if (container) {
        const dynamicBoxHTML = createDynamicBox(imageSrc, description, price, discountPrice);
        container.insertAdjacentHTML("beforeend", dynamicBoxHTML);
    } else {
        console.error("Container not found.");
    }
}
addDynamicBoxToPage("assets/images/beauty.jpeg", "bisghafddfyuah", 300, 2656);
addDynamicBoxToPage("assets/images/toys.jpeg", "sasdgfjhhdkasti", 400, 500);
addDynamicBoxToPage("assets/images/sports.jpeg", "shaji brand", 400, 900);
addDynamicBoxToPage("assets/images/mobiles.jpeg", "shaji brand", 400, 57600);