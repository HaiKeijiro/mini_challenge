prompt('Your Name: ');
prompt('Her Name: ');

var score = Math.floor(Math.random() * 100 + 1);
console.log(score + "%");

if (score > 70) {
    console.log("Your love score is" + score + "%" + " You love each other.");
} else {
    console.log("Your love score is" + score + "%");
}