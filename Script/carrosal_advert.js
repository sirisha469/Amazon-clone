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

const rightButton = document.querySelector(".fa-greater-than");

rightButton.addEventListener("click", () => {
  count = count + 1;

  if(count >= 6){
    count = 0;
  };

  img.src = imgArray[count];
});

const leftButton = document.querySelector(".fa-less-than");

leftButton.addEventListener("click", () => {
  count = count - 1;

  if(count < 0){
    count = 5;
  }

  img.src = imgArray[count];
});