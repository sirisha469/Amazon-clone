const imgArray = [
  "https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
];

const img = document.querySelector(".image");
let count = 0;

img.src = imgArray[0];

const rightButton = document.querySelector(".ad-right-arrow");

rightButton.addEventListener("click", () => {
  count = count + 1;

  if(count >= 6){
    count = 0;
  };

  img.src = imgArray[count];
});

const leftButton = document.querySelector(".ad-left-arrow");

leftButton.addEventListener("click", () => {
  count = count - 1;

  if(count < 0){
    count = 5;
  }

  img.src = imgArray[count];
});

// visibility of the advertisement of the carrosal effect
const body = document.querySelector(".body");
body.addEventListener("click", ()=>{
  rightButton.style.visibility='hidden';
  leftButton.style.visibility='hidden';
});

rightButton.addEventListener("click", (event) => {
  rightButton.style.visibility='visible';
  leftButton.style.visibility='hidden';
  event.stopPropagation();
});
  
leftButton.addEventListener("click", (event) => {
  leftButton.style.visibility='visible';
  rightButton.style.visibility='hidden';
  event.stopPropagation();
});
  
