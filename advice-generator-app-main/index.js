
const advice = [
    "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    "Procrastination is the thief of time.",
    "It's OK to be wrong, it's unfogivable to stay wrong.",
    "Life is just a blank slate, what matters most is what you write on it.",
    "Little minds are tamed and subdued by misfortune; but great minds rise above it.",
    "The future belongs to those who believe in the beauty of their dreams."
];

var dice = 0;

//console.log(advice);

document.querySelector(".dice").addEventListener("click", ()=>{
    dice =  Math.floor(Math.random() * 6);
    console.log(advice[dice], dice);
    let newAdvice = advice[dice];
    let newId = `ADVICE  #${dice + 1}`;
    document.querySelector(".quote").textContent = newAdvice;
    document.querySelector(".advice-id").innerHTML = newId;;
})



































































