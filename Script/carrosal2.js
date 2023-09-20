const imgArray = [
  "https://onlinejpgtools.com/images/examples-onlinejpgtools/orange-flower.jpg",
  "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
  "https://onlinejpgtools.com/images/examples-onlinejpgtools/mountains-near-water.jpg",
  "https://onlinejpgtools.com/images/examples-onlinejpgtools/fudge-cake-with-sugar.jpg",
  "https://onlinejpgtools.com/images/examples-onlinejpgtools/mouse.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flower_11.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pink_flower.jpg",
  "https://onlinejpgtools.com/images/examples-onlinejpgtools/orange-flower.jpg",
  "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
  "https://onlinejpgtools.com/images/examples-onlinejpgtools/mountains-near-water.jpg",
  "https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
];

const img1 = document.querySelector(".image1")

const img2 = document.querySelector(".image2")

const img3 = document.querySelector(".image3")

const img4 = document.querySelector(".image4")

const img5 = document.querySelector(".image5")

img1.src = imgArray[0];
img2.src = imgArray[1];
img3.src = imgArray[2];
img4.src = imgArray[3];
img5.src = imgArray[4];


const rightButton = document.querySelector(".lesser");
var count = 0;
rightButton.addEventListener("click", () => {
    console.log("Hi");
    if(count < 15){
      img1.src = imgArray[count++];
      img2.src = imgArray[count++];
      img3.src = imgArray[count++];
      img4.src = imgArray[count++];
      img5.src = imgArray[count++];
    }
    
});


const leftButton = document.querySelector(".greater")

// var count = 0;

leftButton.addEventListener("click", () => {
  count = count -2;
  if(count >= 0){
    img1.src = imgArray[count--];
    img2.src = imgArray[count--];
    img3.src = imgArray[count--];
    img4.src = imgArray[count--];
    img5.src = imgArray[count--];
  }
});



