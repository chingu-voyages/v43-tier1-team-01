const data = document.getElementById("madlibs");
const storyPart = document.getElementById("article");

const buildMadLibs = (event) => {
  let nounatxt = document.querySelector("#nouna").value;
  let adjectiveatxt = document.querySelector("#adjectivea").value;
  let verbatxt = document.querySelector("#verba").value;
  let verbbtxt = document.querySelector("#verbb").value;
  let numberatxt = document.querySelector("#numbera").value;
  let adjectivebtxt = document.querySelector("#adjectiveb").value;
  let numberbtxt = document.querySelector("#numberb").value;
  let numberctxt = document.querySelector("#numberc").value;
  let verbctxt = document.querySelector("#verbc").value;

  const badWords = [
    "ass",
    "ass-fucker",
    "asses",
    "assfucker",
    "assfukka",
    "asshole",
    "assholes",
    "asswhole",
    "bitch",
    "bitcher",
    "fuck",
    "porno",
    "pornography",
    "pussi",
    "pussies",
    "pussy",
    "rimming",
    "scrotum",
    "semen",
    "slut",
    "sluts",
    "smegma",
    "smut",
    "snatch",
    "son-of-a-bitch",
    "vagina",
    "viagra",
    "vulva",
  ];
  let bad = true;
  for (let i = 0; i < badWords.length; i++) {
    if (
      nounatxt == badWords[i] ||
      adjectiveatxt == badWords[i] ||
      verbatxt == badWords[i] ||
      verbbtxt == badWords[i] ||
      numberatxt == badWords[i] ||
      adjectivebtxt == badWords[i] ||
      numberbtxt == badWords[i] ||
      numberctxt == badWords[i] ||
      verbctxt == badWords[i]
    ) {
      bad = true;
      break;
    } else {
      bad = false;
    }
  }
  if (bad) {
    alert("Please don't use bad words");
  } else {
    event.preventDefault();
    data.classList.add("hidden");

    const form = new FormData(event.target);
    const playStory = Object.fromEntries(form);

    const history = `
  <h2>Full story</h2>
  <p class="texte">The <span class= textInserting>${playStory.nouna}</span>, Madagascar’s largest carnivorous mammal, is also <span class="textInserting">${playStory.adjectivea}</span> to the large island nation. This super predator <span class="textInserting">${playStory.verba}</span> to the eupleridae family, and <span class="textInserting">${playStory.verbb}</span> in the forests of the island. A fossa can live for <span class="textInserting">${playStory.numbera}</span> years. Despite being Madagascar’s largest carnivorous mammal the foosa is <span class="textInserting">${playStory.adjectiveb}</span> with measurements of <span class="textInserting">${playStory.numberb}</span> cm in length and a weight of 5 to <span class="textInserting">${playStory.numberc}</span> kilograms. This predator <span class="textInserting">${playStory.verbc}</span> on birds, reptiles, frogs, rodents and small mammals.</p>`;
    storyPart.innerHTML += history;
    storyPart.classList.remove("hidden");

    const resetButton = `
        <button class="reset" onclick="reset()">Reset</button>
    `;
    storyPart.innerHTML += resetButton;
  }
};

const reset = () => {
  storyPart.classList.add("hidden");
  storyPart.innerHTML = "";
  data.reset();
  data.classList.remove("hidden");
};
