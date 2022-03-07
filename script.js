let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs.toUpperCase());
console.log(warmHugs.replace("like", "love"));
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

let beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled.slice(18));
// beenImpaled = beenImpaled.slice(18);
console.log(beenImpaled);

let dotDotDot = "...";
let skullBones = `I don't have a skull${dotDotDot} or bones.`;
console.log(skullBones);

console.log(Math.PI);

let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

//Bonus
console.log(" Let It Go!".toUpperCase().repeat(2).trim());

let reindeers = "Reindeers are better than people."
console.log("Reindeers are better than people.");
console.log(reindeers.replace(/ /g, `_`)); //"/'s are for special characters, the space in this case"
console.log(reindeers.replaceAll(` `, `_`));

let squareRoot = Math.sqrt(2);
console.log(squareRoot);

let newRandomNumber=Math.random()
newRandomNumber *= 17;
newRandomNumber = Math.floor(newRandomNumber);
newRandomNumber+= 7;
console.log(newRandomNumber)


// let newRandomNumber = Math.ceil((Math.random()817)+6);
// console.log(newRandomNumber);





