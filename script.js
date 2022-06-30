let dropdowncontainer = document.getElementById("dropdowncontainer");
let dropdownbox = document.getElementById("dropdownbox");
let optionsContainer = document.getElementById("optionsContainer");

let options = ["option 1", "option 2", "option 3"];

dropdownbox.addEventListener("click", (e) => {
  if (!optionsContainer.classList.contains("addedOptions")) {
    options.forEach((option) => {
      let optionCard = document.createElement("li");
      optionCard.classList.add("option");
      optionCard.textContent = option;
      optionCard.addEventListener("click", () => {
        dropdownbox.textContent = option;
        dropdownbox.classList.add("done");
        optionCard.classList.add("selected");
        optionsContainer.classList.remove("displayed");
      });

      //show options
      optionsContainer.appendChild(optionCard);
    });
  }

  optionsContainer.classList.add("addedOptions");
  optionsContainer.classList.add("displayed");
});

// //close dropdown when clicked outside
