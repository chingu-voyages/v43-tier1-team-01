// importing arrays from arrays,js

import { BadWordArray,adjectives,nouns,adverbs,verbs } from "./Arrays.js";


// TAKING USER-INPUTS
 

let adjective1 = document.querySelector('.adjective1');
let adjective2 = document.querySelector('.adjective2');
let adjective3 = document.querySelector('.adjective3');
let adjective4 = document.querySelector('.adjective4');
let adjective5 = document.querySelector('.adjective5');
let verb = document.querySelector('.verb');
let funnyVoice = document.querySelector('.funny-voice');
let noun1 = document.querySelector('.noun1');
let noun2 = document.querySelector('.noun2');
let noun3 = document.querySelector('.noun3');
let partOfABody = document.querySelector('.part-of-a-body');
let pluralNoun1 = document.querySelector('.pluralNoun1');
let pluralNoun2 = document.querySelector('.pluralNoun2');
let number = document.querySelector('.number');




const storyText = document.querySelector('.story-text');
const warningText = document.querySelector('.warning-text');
let createButton = document.querySelector('.create-story');
let inputFileds = Array.from(document.querySelectorAll('input'));
let clear = document.querySelector('.clear');
const warningCard = document.querySelector('.warning');
const hiddenSection = document.querySelector('.hidden-section');
const close = document.querySelector('.close');


// total counts
// console.log(`Adverb :  ${adverbs.length}`)
// console.log(`Verb :  ${verbs.length}`)
// console.log(`Adjective :  ${adjectives.length}`)
// console.log(`Noun :  ${nouns.length}`)


// selecting buttons for click event
let adjective1Button = document.querySelector('.adjective1Button');
let adjective2Button = document.querySelector('.adjective2Button');
let adjective3Button = document.querySelector('.adjective3Button');
let adjective4Button = document.querySelector('.adjective4Button');
let adjective5Button = document.querySelector('.adjective5Button');
let noun1Button = document.querySelector('.noun1Button');
let noun2Button = document.querySelector('.noun2Button');
let noun3Button = document.querySelector('.noun3Button');
let verbButton = document.querySelector('.verbButton');



// function for choosing random (noun,adjective,adverb,verb)

function GenerateRandomadjective(){
    let RandomNumberForAdjective = Math.floor(Math.random() * adjectives.length);
    return RandomNumberForAdjective;
}

function GenerateRandomnoun(){
    let RandomNumberFornoun = Math.floor(Math.random() * nouns.length);
    return RandomNumberFornoun;
}

function GenerateRandomverb(){
    let RandomNumberForverb = Math.floor(Math.random() * verbs.length);
    return RandomNumberForverb;
}

// showing those random (noun,adverb,adjective,verb)


adjective1Button.addEventListener('click', () => {
    let RandomNumberForAdjective = GenerateRandomadjective();
    let randomAdjective = adjectives[RandomNumberForAdjective];
    adjective1.value = randomAdjective;
})

adjective2Button.addEventListener('click', () => {
    let RandomNumberForAdjective = GenerateRandomadjective();
    let randomAdjective = adjectives[RandomNumberForAdjective];
    adjective2.value = randomAdjective;
})

adjective3Button.addEventListener('click', () => {
    let RandomNumberForAdjective = GenerateRandomadjective();
    let randomAdjective = adjectives[RandomNumberForAdjective];
    adjective3.value = randomAdjective;
})

adjective4Button.addEventListener('click', () => {
    let RandomNumberForAdjective = GenerateRandomadjective();
    let randomAdjective = adjectives[RandomNumberForAdjective];
    adjective4.value = randomAdjective;
})

adjective5Button.addEventListener('click', () => {
    let RandomNumberForAdjective = GenerateRandomadjective();
    let randomAdjective = adjectives[RandomNumberForAdjective];
    adjective5.value = randomAdjective;
})

noun1Button.addEventListener('click', () => {
    let RandomNumberFornoun = GenerateRandomnoun();
    let randomNoun = nouns[RandomNumberFornoun];
    noun1.value = randomNoun;
})

noun2Button.addEventListener('click', () => {
    let RandomNumberFornoun = GenerateRandomnoun();
    let randomNoun = nouns[RandomNumberFornoun];
    noun2.value = randomNoun;
})

noun3Button.addEventListener('click', () => {
    let RandomNumberFornoun = GenerateRandomnoun();
    let randomNoun = nouns[RandomNumberFornoun];
    noun3.value = randomNoun;
})

verbButton.addEventListener('click', () => {
    let RandomNumberForverb = GenerateRandomverb();
    let randomverb = verbs[RandomNumberForverb];
    verb.value = randomverb;
})


// function to check if any user inputs contains vulgar word(s).

function checkVulgarity(){
    for(let i = 0 ; i <= BadWordArray.length ; i++) {

        if( adjective1.value.toLowerCase() == BadWordArray[i] || 
            adjective2.value.toLowerCase() == BadWordArray[i] ||
            adjective3.value.toLowerCase() == BadWordArray[i] ||
            adjective4.value.toLowerCase() == BadWordArray[i] ||
            adjective5.value.toLowerCase() == BadWordArray[i] ||
            verb.value.toLowerCase() == BadWordArray[i] || 
            noun1.value.toLowerCase() == BadWordArray[i] ||
            noun2.value.toLowerCase() == BadWordArray[i] ||
            noun3.value.toLowerCase() == BadWordArray[i] ||
            number.value.toLowerCase() == BadWordArray[i] ||
            pluralNoun1.value.toLowerCase() == BadWordArray[i] || 
            pluralNoun2.value.toLowerCase() == BadWordArray[i] ||
            partOfABody.value.toLowerCase() == BadWordArray[i] ) {

                // show warning card and message.
                storyText.innerHTML = ' ';
                warningCard.classList.add('show-warning');
                hiddenSection.classList.add('show-hidden-section');
                warningText.innerHTML = 'Please Enter Appropriate words.';
                break;

            }

            else 

            storyText.classList.add('show-storyText');

            storyText.innerHTML = `
            Bird watching can be more fun than a barrel of ${pluralNoun1.value} Our ${adjective1.value} feathered friends are everywhere, waiting to be watched. An interesting bird to start with is the ${adjective2.value} oriole, which builds its nest in ${noun1.value} trees. Early in spring, we hear the oriole give its mating call, which sounds like this: "${funnyVoice.value}." Then the male and female get together and ${verb.value} Later, the female lays ${number.value} eggs. Isn't that ${adjective3.value} ? Another fascinating bird is the ${adjective4.value}-breasted nuthatch. The nuthatch is very tame. He will fly down and land right on your ${partOfABody.value} and eat out of your ${pluralNoun2.value}. Other birds to watch out for are the red-crested ${noun2.value}, the ${adjective5.value}-necked thrush, and the yellow-bellied ${noun3.value}sucker. Now that you know something about birds, get out there and watch!`;

        }
    }


    createButton.addEventListener('click',(e) => {

        e.preventDefault();
        checkVulgarity();
        
    })


// clear the inputs and story text.

clear.addEventListener('click',(e) => {
    e.preventDefault();
    storyText.classList.remove('show-storyText');
    inputFileds.forEach(input => {
    input.value = '';
    input.classList.remove('wrong-input');
    })
})


// close error message

close.addEventListener('click' , () => {
        warningCard.classList.remove('show-warning');
        hiddenSection.classList.remove('show-hidden-section');
})














