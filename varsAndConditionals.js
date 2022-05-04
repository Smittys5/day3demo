let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister");
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has better attack than Jon Snow");
} else {
    console.log("Jon Snow and Jamie Lannister have the same attack");
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow.........(dramatic pause)......is slain");
} else {
    // jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    jonSnowHealth -= jamieLannisterAttack;
    console.log(`Jon Snow's health is now ${jonSnowHealth}`);
}

jonSnowDefense += 25;

