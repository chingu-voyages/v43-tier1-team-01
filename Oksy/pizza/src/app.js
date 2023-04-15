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
  newParagraph.setAttribute(
    "style",
    "font-size: 1.5rem; line-height: 1.5; background-color: white; text-align: justify; padding: 2rem; color: rgb(238, 77, 48); border-radius: 1rem;"
  );
  newParagraph.innerHTML =
    "Pizza was invented by <span>adjective</span> <span>nationality</span> chef named <span>person</span>. To make a pizza you need to take a lump of <span>noun</span>, and make a thin, round <span>adjective</span> <span>noun</span>. Then you cover it with <span>adjective</span> sauce, <span>adjective</span> cheese, and fresh chopped <span>plural noun</span>. Next you need to bake it in a very hot <span>noun</span>. When it is done, cut it into <span>number</span> <span>shapes</span>. Some kids like <span>food</span> pizza the best, but my favourite is <span>food</span>. If I could, I would eat pizza <span>number</span> times a day!";

  secondaryWrapper.appendChild(newParagraph);

  let spanInput = newParagraph.querySelectorAll("span");
  spanInput.forEach((span) => {
    span.style.color = "rgb(119, 197, 35)";
  });

  for (var i = 0; i < spanInput.length; i++) {
    spanInput[i].innerHTML = values[i];
  }

  let goMadAgainButton = document.createElement("button");
  goMadAgainButton.innerHTML = "GO MAD AGAIN!";
  let h = goMadAgainButton.style;
  h.fontFamily = "Love Ya Like A Sister";
  h.display = "block";
  h.margin = "2rem auto 0 auto";
  h.borderRadius = "0.7rem";
  h.backgroundColor = "rgb(119, 197, 35)";
  h.transition = "all 0.2s ease-in-out";
  h.fontSize = "1.5rem";
  h.padding = "0.9rem 1.9rem";
  goMadAgainButton.addEventListener("mouseenter", () => {
    h.backgroundColor = "rgb(238, 77, 48)";
    h.color = "white";
  });
  goMadAgainButton.addEventListener("mouseleave", () => {
    h.backgroundColor = "rgb(119, 197, 35)";
    h.color = "";
  });
  goMadAgainButton.addEventListener("click", () => {
    location.reload();
  });
  secondaryWrapper.appendChild(goMadAgainButton);
}

for (let i = 1; i < 16; i++) {
  let buttonClicked = document.getElementById(`button${i}`);
  let showRandomResult = showRandom(i);

  buttonClicked.addEventListener("click", showRandomResult);
}

function showRandom(i) {
  let input = document.getElementById(i);
  return function (event) {
    event.preventDefault();
    let inputValue = input.classList.toString();

    input.value =
      myRandom[inputValue][
        Math.floor(Math.random() * myRandom[inputValue].length)
      ];
  };
}

let buttonRandom = document.getElementById("buttonRandom");
buttonRandom.addEventListener("click", showRandomAll);

function showRandomAll(event) {
  event.preventDefault();

  for (let i = 1; i < 16; i++) {
    showRandom(i)(event);
  }
}

//let randverb1 = Math.trunc(Math.random()*verbs.length)
