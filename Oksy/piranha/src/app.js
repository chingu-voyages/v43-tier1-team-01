let inputElements = document.getElementsByTagName("input");
const buttonMad = document.getElementById("buttonMad");
buttonMad.addEventListener("click", goMad);

function goMad(event) {
  event.preventDefault();
  let inputPromises = [];
  for (const element of inputElements) {
    let elementValue = element.value;
    if (elementValue) {
      for (const vulgar of vulgarList) {
        if (elementValue.toLowerCase().trim() == vulgar) {
          element.value = "";

          element.setAttribute("placeholder", "No vulgar!");
          break;
        }
      }
      inputPromises.push(Promise.resolve(elementValue));
    } else {
      element.setAttribute("placeholder", "Word!");
      inputPromises.push(Promise.reject());
    }
  }

  Promise.allSettled(inputPromises).then((results) => {
    if (results.every((result) => result.status === "fulfilled")) {
      const inputValues = results.map((result) => result.value);
      showStory(inputValues);
    }
  });
}

function showStory(values) {
  let secondaryWrapper = document.getElementById("secondaryWrapper");
  secondaryWrapper.innerHTML = "";

  let newParagraph = document.createElement("p");
  let n = newParagraph.style;

  newParagraph.innerHTML =
    "If you are travelling in <span>country</span> and find yourself having to cross a piranha-filled river, here`s how to do it <span>adverb</span>. Piranhas are more <span>adjective</span> during the day, so cross the river at night. Avoid areas with netted <span>animal</span> traps-piranhas may be <span>verbIng</span> there looking to <span>verb</span> them. When <span>verbIng</span> the river, swim <span>adverb</span>, you don`t want to wake them up and make them <span>adjective</span>. Whatever you do, if you have an open wound, try to find another way to get to the <span>place</span>. Piranhas are attracted to fresh <span>liquid</span> and will most likely take a bite out of your <span>partOfbody</span> if you <span>verb</span> in the water!";

  newParagraph.setAttribute(
    "style",
    "font-size: 1.5rem; line-height:1.5; background-color: white; text-align: justify; padding: 2rem; color: rgb(70, 108, 131); border-radius: 1rem;"
  );

  secondaryWrapper.appendChild(newParagraph);

  let spanInput = newParagraph.querySelectorAll("span");
  spanInput.forEach((span) => {
    span.style.color = "rgb(211, 149, 60)";
  });

  for (var i = 0; i < spanInput.length; i++) {
    spanInput[i].innerHTML = values[i];
  }

  let goMadAgainButton = document.createElement("button");
  goMadAgainButton.innerHTML = "GO MAD AGAIN!";
  let h = goMadAgainButton.style;
  h.fontFamily = "Open Sans";
  h.display = "block";
  h.margin = "2rem auto 0 auto";
  h.borderRadius = "0.7rem";
  h.backgroundColor = "rgb(70, 108, 131)";
  h.transition = "all 0.2s ease-in-out";
  h.fontSize = "1.5rem";
  h.fontWeight = "750";
  h.color = "white";
  h.borderStyle = "none";
  h.padding = "0.9rem 1.9rem";
  goMadAgainButton.addEventListener("mouseenter", () => {
    h.backgroundColor = "rgb(211, 149, 60)";
  });
  goMadAgainButton.addEventListener("mouseleave", () => {
    h.backgroundColor = "rgb(70, 108, 131)";
  });
  goMadAgainButton.addEventListener("click", () => {
    location.reload();
  });
  secondaryWrapper.appendChild(goMadAgainButton);
}

for (let i = 1; i < 14; i++) {
  let buttonClicked = document.getElementById(`button${i}`);

  buttonClicked.addEventListener("click", showRandom(i));
}

function showRandom(i) {
  let input = document.getElementById(i);
  return function (event) {
    event.preventDefault();
    let inputClass = input.classList.toString();

    input.value =
      myRandom[inputClass][
        Math.floor(Math.random() * myRandom[inputClass].length)
      ];
  };
}

let buttonRandom = document.getElementById("buttonRandom");
buttonRandom.addEventListener("click", showRandomAll);

function showRandomAll(event) {
  event.preventDefault();

  for (let i = 1; i < 14; i++) {
    showRandom(i)(event);
  }
}
