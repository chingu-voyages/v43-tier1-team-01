    /* for the elements of inputs */
    let oneinput = document.getElementsByClassName("inputs");
 let spn =document.getElementsByClassName("spn");
 /*for the error message*/
  let errormsg = document.getElementById('msgerror');
 

    /*the buttons*/
  const gomad= document.getElementById('gomad');
  const  random= document.getElementById('random');
  const  clear =document.getElementById('clear');
  const back= document.getElementById('back');
  /*function verify the inputs if they are full or not */
  function verify (){
   let cnt = 0;
   for(let i=0;i<oneinput.length;i++){
     
       if(oneinput[i].value!= ' '||''){
         cnt++;
        
       }
        
         
     else{
       errormsg.style.display='block';
       errormsg.innerText='please fill all the field!';
       errormsg.style.color='orangered';
     }
         
   }
   return cnt;
   
 }

/*here we will go to make the button gomad to be clicked*/
function display ( storie){
 /* let inputPromises=[];
  for (const elem of oneinput){
    let elemval=elem.value;
    if (elemval){
      for (const vulgar of badWords){
         if(elemval.toLowerCase().trim()==vulgar){
          elem.value="";
          elem.setAttribute("placeholder","no vulgar");
          break;
         }
      }
      inputPromises.push(Promise.resolve(elemval));
    }
    else{ elem.setAttribute("placeholder","word");
    inputPromises.push(Promise.reject()); 
  }
  }*/

if((verify()==8 )&& (wrdvulgar()==true))

   {
    let story1=document.getElementById(storie);
            story1.style.display='block';
        back.style.display='block';   
        back.style.marginLeft='28%';    

        gomad.style.display='none';
        random.style.display='none';    
    let guide= document.getElementById('guide');
        guide.style.display='none';  
        clear.style.display='none';
        
    let tab= document.getElementById('tab');
        tab.style.display='none';    
        for (let i=0;i<spn.length;i++){
          spn[i].innerText= oneinput[i].value;
          spn[i].style.color='tomato';
         
       }
       errormsg.style.display='none'; 
  }    
}

/*fonction for the back button*/
function backstr (storie){
    let tab= document.getElementById('tab');
        tab.style.display='block';  
     let guide= document.getElementById('guide');
        guide.style.display='block';

        gomad.style.display='block';
        random.style.display='block';    
        clear.style.display='block';     

        
        back.style.display='none'; 
        let story1=document.getElementById(storie);
            story1.style.display='none';
}
/*function to clear the inputs*/

function clearinpt (){
     for ( let i=0;i<oneinput.length;i++){
        if((oneinput[i].value )!='' || ' ' ) {
           oneinput[i].value=" ";
        }
        
     } 
}
clear.addEventListener("click",clearinpt);
/*here we manege the vulgar words*/
const badWords = [
    "4r5e",
    "5h1t",
    "5hit",
    "a55",
    "anal",
    "anus",
    "ar5e",
    "arrse",
    "arse",
    "ass",
    "ass-fucker",
    "asses",
    "assfucker",
    "assfukka",
    "asshole",
    "assholes",
    "asswhole",
    "a_s_s",
    "b!tch",
    "b00bs",
    "b17ch",
    "b1tch",
    "ballbag",
    "balls",
    "ballsack",
    "bastard",
    "beastial",
    "beastiality",
    "bellend",
    "bestial",
    "bestiality",
    "bi+ch",
    "biatch",
    "bitch",
    "bitcher",
    "bitchers",
    "bitches",
    "bitchin",
    "bitching",
    "bloody",
    "blow job",
    "blowjob",
    "blowjobs",
    "boiolas",
    "bollock",
    "bollok",
    "boner",
    "boob",
    "boobs",
    "booobs",
    "boooobs",
    "booooobs",
    "booooooobs",
    "breasts",
    "buceta",
    "bugger",
    "bum",
    "bunny fucker",
    "butt",
    "butthole",
    "buttmuch",
    "buttplug",
    "c0ck",
    "c0cksucker",
    "carpet muncher",
    "cawk",
    "chink",
    "cipa",
    "cl1t",
    "clit",
    "clitoris",
    "clits",
    "cnut",
    "cock",
    "cock-sucker",
    "cockface",
    "cockhead",
    "cockmunch",
    "cockmuncher",
    "cocks",
    "cocksuck",
    "cocksucked",
    "cocksucker",
    "cocksucking",
    "cocksucks",
    "cocksuka",
    "cocksukka",
    "cok",
    "cokmuncher",
    "coksucka",
    "coon",
    "cox",
    "crap",
    "cum",
    "cummer",
    "cumming",
    "cums",
    "cumshot",
    "cunilingus",
    "cunillingus",
    "cunnilingus",
    "cunt",
    "cuntlick",
    "cuntlicker",
    "cuntlicking",
    "cunts",
    "cyalis",
    "cyberfuc",
    "cyberfuck",
    "cyberfucked",
    "cyberfucker",
    "cyberfuckers",
    "cyberfucking",
    "d1ck",
    "damn",
    "dick",
    "dickhead",
    "dildo",
    "dildos",
    "dink",
    "dinks",
    "dirsa",
    "dlck",
    "dog-fucker",
    "doggin",
    "dogging",
    "donkeyribber",
    "doosh",
    "duche",
    "dyke",
    "ejaculate",
    "ejaculated",
    "ejaculates",
    "ejaculating",
    "ejaculatings",
    "ejaculation",
    "ejakulate",
    "f u c k",
    "f u c k e r",
    "f4nny",
    "fag",
    "fagging",
    "faggitt",
    "faggot",
    "faggs",
    "fagot",
    "fagots",
    "fags",
    "fanny",
    "fannyflaps",
    "fannyfucker",
    "fanyy",
    "fatass",
    "fcuk",
    "fcuker",
    "fcuking",
    "feck",
    "fecker",
    "felching",
    "fellate",
    "fellatio",
    "fingerfuck",
    "fingerfucked",
    "fingerfucker",
    "fingerfuckers",
    "fingerfucking",
    "fingerfucks",
    "fistfuck",
    "fistfucked",
    "fistfucker",
    "fistfuckers",
    "fistfucking",
    "fistfuckings",
    "fistfucks",
    "flange",
    "fook",
    "fooker",
    "fuck",
    "fucka",
    "fucked",
    "fucker",
    "fuckers",
    "fuckhead",
    "fuckheads",
    "fuckin",
    "fucking",
    "fuckings",
    "fuckingshitmotherfucker",
    "fuckme",
    "fucks",
    "fuckwhit",
    "fuckwit",
    "fudge packer",
    "fudgepacker",
    "fuk",
    "fuker",
    "fukker",
    "fukkin",
    "fuks",
    "fukwhit",
    "fukwit",
    "fux",
    "fux0r",
    "f_u_c_k",
    "gangbang",
    "gangbanged",
    "gangbangs",
    "gaylord",
    "gaysex",
    "goatse",
    "God",
    "god-dam",
    "god-damned",
    "goddamn",
    "goddamned",
    "hardcoresex",
    "hell",
    "heshe",
    "hoar",
    "hoare",
    "hoer",
    "homo",
    "hore",
    "horniest",
    "horny",
    "hotsex",
    "jack-off",
    "jackoff",
    "jap",
    "jerk-off",
    "jism",
    "jiz",
    "jizm",
    "jizz",
    "kawk",
    "knob",
    "knobead",
    "knobed",
    "knobend",
    "knobhead",
    "knobjocky",
    "knobjokey",
    "kock",
    "kondum",
    "kondums",
    "kum",
    "kummer",
    "kumming",
    "kums",
    "kunilingus",
    "l3i+ch",
    "l3itch",
    "labia",
    "lust",
    "lusting",
    "m0f0",
    "m0fo",
    "m45terbate",
    "ma5terb8",
    "ma5terbate",
    "masochist",
    "master-bate",
    "masterb8",
    "masterbat*",
    "masterbat3",
    "masterbate",
    "masterbation",
    "masterbations",
    "masturbate",
    "mo-fo",
    "mof0",
    "mofo",
    "mothafuck",
    "mothafucka",
    "mothafuckas",
    "mothafuckaz",
    "mothafucked",
    "mothafucker",
    "mothafuckers",
    "mothafuckin",
    "mothafucking",
    "mothafuckings",
    "mothafucks",
    "mother fucker",
    "motherfuck",
    "motherfucked",
    "motherfucker",
    "motherfuckers",
    "motherfuckin",
    "motherfucking",
    "motherfuckings",
    "motherfuckka",
    "motherfucks",
    "muff",
    "mutha",
    "muthafecker",
    "muthafuckker",
    "muther",
    "mutherfucker",
    "n1gga",
    "n1gger",
    "nazi",
    "nigg3r",
    "nigg4h",
    "nigga",
    "niggah",
    "niggas",
    "niggaz",
    "nigger",
    "niggers",
    "nob",
    "nob jokey",
    "nobhead",
    "nobjocky",
    "nobjokey",
    "numbnuts",
    "nutsack",
    "orgasim",
    "orgasims",
    "orgasm",
    "orgasms",
    "p0rn",
    "pawn",
    "pecker",
    "penis",
    "penisfucker",
    "phonesex",
    "phuck",
    "phuk",
    "phuked",
    "phuking",
    "phukked",
    "phukking",
    "phuks",
    "phuq",
    "pigfucker",
    "pimpis",
    "piss",
    "pissed",
    "pisser",
    "pissers",
    "pisses",
    "pissflaps",
    "pissin",
    "pissing",
    "pissoff",
    "poop",
    "porn",
    "porno",
    "pornography",
    "pornos",
    "prick",
    "pricks",
    "pron",
    "pube",
    "pusse",
    "pussi",
    "pussies",
    "pussy",
    "pussys",
    "rectum",
    "retard",
    "rimjaw",
    "rimming",
    "s hit",
    "s.o.b.",
    "sadist",
    "schlong",
    "screwing",
    "scroat",
    "scrote",
    "scrotum",
    "semen",
    "sex",
    "sh!+",
    "sh!t",
    "sh1t",
    "shag",
    "shagger",
    "shaggin",
    "shagging",
    "shemale",
    "shi+",
    "shit",
    "shitdick",
    "shite",
    "shited",
    "shitey",
    "shitfuck",
    "shitfull",
    "shithead",
    "shiting",
    "shitings",
    "shits",
    "shitted",
    "shitter",
    "shitters",
    "shitting",
    "shittings",
    "shitty",
    "skank",
    "slut",
    "sluts",
    "smegma",
    "smut",
    "snatch",
    "son-of-a-bitch",
    "spac",
    "spunk",
    "s_h_i_t",
    "t1tt1e5",
    "t1tties",
    "teets",
    "teez",
    "testical",
    "testicle",
    "tit",
    "titfuck",
    "tits",
    "titt",
    "tittie5",
    "tittiefucker",
    "titties",
    "tittyfuck",
    "tittywank",
    "titwank",
    "tosser",
    "turd",
    "tw4t",
    "twat",
    "twathead",
    "twatty",
    "twunt",
    "twunter",
    "v14gra",
    "v1gra",
    "vagina",
    "viagra",
    "vulva",
    "w00se",
    "wang",
    "wank",
    "wanker",
    "wanky",
    "whoar",
    "whore",
    "willies",
    "willy",
    "xrated",
    "xxx",
  ];
   function wrdvulgar (){
  let bad = true;
  for (let i = 0; i<oneinput.length; i++){
     for(let j=0;j<badWords.length;j++){
        if((oneinput[i].value)==(badWords[j])){
          errormsg.style.display='block';
        errormsg.innerText='please add appropriate words in the text filds!';
        errormsg.style.color='orangered';
        bad=false;
        }
     }
  }
  return bad;
}
  

const adjectifs = [
    "kind",
    "white",
    "long",
    "short",
    "stubborm",
    "thin",
    "wonderfull",
    "yellow",
    "black",
    "big"
];
const nouns=[
  "mother",
  "boss",
  "father",
  "uncle",
  "crocodile",
  "cat",
  "lemur",
  "husband",
  "wife",
  "co-worker",
  "monkey",
  "summer",
  "noon",
  "day",
  "winter",
  "son",
  "daugther",
  "chameleon",
  "touristic-guide",
  "afternoon",
];
const verbs=[
    "visited",
    "think",
    "will follow",
    "beaten",
    "plaied",
    "did",
    "eat",
    "smelled",
    "saw",
    "spilt",
];
const adverbs=[
      "last saturday",
      "quickly",
      "clearly",
      "of course",
      "widely",
      "priority",
      "strictly",
      "sunddenly",
      "properly",
      "everyday",
];

/*function for the random */

function rand(event){
  event.preventDefault();
  let randadjcf1 = Math.trunc(Math.random()*(adjectifs.length+1));

  let randverb1= Math.trunc(Math.random()*(verbs.length+1));
  let randverb2 = Math.trunc(Math.random()*(verbs.length+1));

  let randadverb1 = Math.trunc(Math.random()*(adverbs.length+1));
  let randadverb2 = Math.trunc(Math.random( )*(adverbs.length+1));

  let randnoun1 = Math.trunc(Math.random( )*(nouns.length+1));
  let randnoun2 = Math.trunc(Math.random( )*(nouns.length+1));
  let randnoun3 = Math.trunc(Math.random( )*(nouns.length+1));


  oneinput[0].value =adverbs[randadverb1];
  oneinput[1].value =verbs[randverb1];
  oneinput[2].value =adjectifs[randadjcf1];
  oneinput[3].value=nouns[randnoun1];
  oneinput[4].value=nouns[randnoun2];
  oneinput[5].value=adverbs[randadverb2];
  oneinput[6].value=nouns[randnoun3];
  oneinput[7].value=verbs[randverb2];

  };
  random.addEventListener("click",rand) 

