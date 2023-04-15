// importing arrays from arrays,js

import { BadWordArray,adjectives,nouns,adverbs,verbs } from "./Arrays.js";


// TAKING USER-INPUTS

let adjective1 = document.querySelector('.adjective1');
let adjective2 = document.querySelector('.adjective2');
let adjective3 = document.querySelector('.adjective3');
let adjective4 = document.querySelector('.adjective4');
let adverb = document.querySelector('.adverb');
let color = document.querySelector('.color');
let noun1 = document.querySelector('.noun1');
let noun2 = document.querySelector('.noun2');
let noun3 = document.querySelector('.noun3');
let noun4 = document.querySelector('.noun4');
let noun5 = document.querySelector('.noun5');
let noun6 = document.querySelector('.noun6');
let noun7 = document.querySelector('.noun7');
let number = document.querySelector('.number');
let pluralNoun = document.querySelector('.pluralNoun');




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
let noun1Button = document.querySelector('.noun1Button');
let noun2Button = document.querySelector('.noun2Button');
let noun3Button = document.querySelector('.noun3Button');
let noun4Button = document.querySelector('.noun4Button');
let noun5Button = document.querySelector('.noun5Button');
let noun6Button = document.querySelector('.noun6Button');
let noun7Button = document.querySelector('.noun7Button');
let adverbButton = document.querySelector('.adverbButton');



// function for choosing random (noun,adjective,adverb,verb)

function GenerateRandomadjective(){
    let RandomNumberForAdjective = Math.floor(Math.random() * adjectives.length);
    return RandomNumberForAdjective;
}

function GenerateRandomadverb(){
    let RandomNumberForAdverb = Math.floor(Math.random() * adverbs.length);
    return RandomNumberForAdverb;
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

noun4Button.addEventListener('click', () => {
    let RandomNumberFornoun = GenerateRandomnoun();
    let randomNoun = nouns[RandomNumberFornoun];
    noun4.value = randomNoun;
})

noun5Button.addEventListener('click', () => {
    let RandomNumberFornoun = GenerateRandomnoun();
    let randomNoun = nouns[RandomNumberFornoun];
    noun5.value = randomNoun;
})

noun6Button.addEventListener('click', () => {
    let RandomNumberFornoun = GenerateRandomnoun();
    let randomNoun = nouns[RandomNumberFornoun];
    noun6.value = randomNoun;
})

noun7Button.addEventListener('click', () => {
    let RandomNumberFornoun = GenerateRandomnoun();
    let randomNoun = nouns[RandomNumberFornoun];
    noun7.value = randomNoun;
})

adverbButton.addEventListener('click', () => {
    let RandomNumberForAdverb = GenerateRandomverb();
    let randomAdjverb = adverbs[RandomNumberForAdverb];
    adverb.value = randomAdjverb;
})

// function to check if any user inputs contains vulgar word(s).

    function checkVulgarity(){


        for(let i = 0 ; i <= BadWordArray.length ; i++) {

            if( adjective1.value.toLowerCase() == BadWordArray[i] || 
                adjective2.value.toLowerCase() == BadWordArray[i] ||
                adjective3.value.toLowerCase() == BadWordArray[i] ||
                adjective4.value.toLowerCase() == BadWordArray[i] ||
                adverb.value.toLowerCase() == BadWordArray[i] || 
                noun1.value.toLowerCase() == BadWordArray[i] ||
                noun2.value.toLowerCase() == BadWordArray[i] ||
                noun3.value.toLowerCase() == BadWordArray[i] ||
                noun4.value.toLowerCase() == BadWordArray[i] ||
                noun5.value.toLowerCase() == BadWordArray[i] ||
                noun6.value.toLowerCase() == BadWordArray[i] ||
                noun7.value.toLowerCase() == BadWordArray[i] ||
                number.value.toLowerCase() == BadWordArray[i] ||
                pluralNoun.value.toLowerCase() == BadWordArray[i] ) {

                // show warning card and message

                storyText.innerHTML = ' ';
                warningCard.classList.add('show-warning');
                hiddenSection.classList.add('show-hidden-section');
                warningText.innerHTML = 'Please Enter Appropriate words.';
                break;
                }

                        
                else
                storyText.classList.add('show-storyText');


                storyText.innerHTML = `
                It has often been said that "a dog is a man's best ${noun1.value}." Dogs are very  ${adjective1.value} and can be taught many ${adjective2.value} tricks. A dog can be trained to carry a ${noun2.value} in his mouth. And if you throw his ${noun2.value}, he will run and fetch it. Dogs will also bark  ${adverb.value} if someone tries to break into your ${noun3.value} during the night. One of the most popular canine pets today is the ${color.value} Spaniel. Spaniels have curly ${noun4.value} coats and ${adjective3.value} ears. They also have very ${adjective4.value} dispositions and live to be ${number.value} years old. Other popular dogs are ${noun5.value} Terriers, German ${noun6.value}, and the ${noun7.value} Poodle. Every home should have a loyal dog for a ${pluralNoun.value}.`

            warningText.innerHTML = ' ';

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











