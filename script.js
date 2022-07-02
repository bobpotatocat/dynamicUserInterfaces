let focusPicture = function (pictures, position) {
  let mainContainer = document.getElementById("mainContainer");
  let leftContainer = document.getElementById("leftContainer");
  let rightContainer = document.getElementById("rightContainer");

  mainContainer.removeChild(mainContainer.firstElementChild);
  leftContainer.removeChild(leftContainer.firstElementChild);
  rightContainer.removeChild(rightContainer.firstElementChild);

  let mainImage = document.createElement("img");
  mainImage.src = pictures[position];
  let leftImage = document.createElement("img");
  let rightImage = document.createElement("img");

  mainImage.classList.add("picture");
  leftImage.classList.add("picture");
  rightImage.classList.add("picture");

  if (position == 0) {
    leftImage.src = pictures[pictures.length - 1];
    rightImage.src = pictures[position + 1];
  } else if (position == pictures.length - 1) {
    leftImage.src = pictures[position - 1];
    rightImage.src = pictures[0];
  } else {
    leftImage.src = pictures[position - 1];
    rightImage.src = pictures[position + 1];
  }
  mainContainer.appendChild(mainImage);
  leftContainer.appendChild(leftImage);
  rightContainer.appendChild(rightImage);
};

let toggleRight = function (pictures, position) {
  let newPosition = position + 1;
  if (newPosition == pictures.length) {
    newPosition = 0;
  }
  return newPosition;
};

let toggleLeft = function (pictures, position) {
  let newPosition = position - 1;
  if (newPosition < 0) {
    newPosition = pictures.length - 1;
  }
  return newPosition;
};

let refreshButtons = function (pictures, position) {
  let buttonContainer = document.getElementById("buttonContainer");
  //clear all buttons
  while (buttonContainer.firstElementChild) {
    buttonContainer.removeChild(buttonContainer.firstElementChild);
  }
  //create all buttons
  for (let i = 0; i < pictures.length; i++) {
    let newButton = document.createElement("img");
    newButton.src = "icons/dot.svg";
    newButton.classList.add("button");
    newButton.addEventListener("click", () => {
      focusPicture(pictures, i);
      refreshButtons(pictures, i);
    });
    buttonContainer.appendChild(newButton);
  }

  let currentButton = document.querySelector(
    `#buttonContainer :nth-child(${position + 1})`
  );
  // console.log(currentButton);
  currentButton.classList.add("selected");
};

let initUI = () => {
  let pictures = [
    "images/dog.jpeg",
    "images/dog.jpg",
    "images/dogfood.PNG",
    "images/puppy.jpg",
  ];
  let currentPosition = 1;
  refreshButtons(pictures, currentPosition);
  focusPicture(pictures, currentPosition);
  // //add event listeners to left and right images
  let leftContainer = document.getElementById("leftContainer");
  leftContainer.addEventListener("click", () => {
    currentPosition = toggleLeft(pictures, currentPosition);
    focusPicture(pictures, currentPosition);
  });

  let rightContainer = document.getElementById("rightContainer");
  rightContainer.addEventListener("click", () => {
    currentPosition = toggleRight(pictures, currentPosition);
    focusPicture(pictures, currentPosition);
    refreshButtons(pictures, currentPosition);
  });
};

initUI();
