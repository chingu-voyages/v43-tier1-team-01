const imagesDiv = document.querySelector(".images-div");
const imagesArray = Array.from(document.querySelectorAll(".image"));
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
let index = 0;

// function to check the current index value and to change the image according to that index number.

function changeImage() {
  if (index > imagesArray.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = imagesArray.length - 1;
  }

  // checking if the width of the viewers screen is less than 1050px then try to adjust the width of the images-div and images which are inside that images-div Div.

  let windowWidth = window.innerWidth;

  if (windowWidth < 1050) {
    imagesDiv.style.transform = `translate(${-index * 90}vw)`;
  } else imagesDiv.style.transform = `translate(${-index * 60}rem)`;
}

// button functionality

next.addEventListener("click", () => {
  index++;
  changeImage();
});

previous.addEventListener("click", () => {
  index--;
  changeImage();
});

// this is for the navbar display for responsive screen
