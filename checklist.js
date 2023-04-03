var guestList = ['Kei', 'Julia', 'Siyi', 'Karin', 'Ryan', 'Bong'];
var input = prompt('Your name please');
// for (var i = 0; i <= (guestList.length - 1); i++) {
//     if (input == guestList[i]) {
//         console.log(guestList[i]);
//     } else {
//         console.log('Sorry');
//     }
// }

if (guestList.includes(input)) {
    alert('Welcome');
} else {
    alert('Sorry, you cannot get in');
}