/* Created approx. 31 Dec '21 - early Jan '22 */

/// NB: Find a way to display the sequence number of each flash card; using switch could work

// Flashcards and counter z
const cardFlip = ['a', 'b', 'c'];
const cardUnflip = ['app', 'bapp', 'capp'];

var z = 3;

// Start message and return button
var startMes = 'Press Start to display the flashcards.' + '<br>' + '<button class= "butts" onclick = "showFlash()"> Start </button>';
document.getElementById('flash').innerHTML = startMes;
function returna() {document.getElementById('flash').innerHTML = startMes;
                    document.getElementById('main').innerHTML = ' ';
                    document.getElementById('main').style.visibility = 'hidden';

                    document.getElementById('P').innerHTML = ' ';
                    document.getElementById('N').innerHTML = ' ';
                    document.getElementById('cno').innerHTML = ' ';

                    z = 3}

// voy and Start button
function showFlash() {document.getElementById('flash').innerHTML = '<button class = "butts" onclick = "front()"> Front </button>' + ' ' + '<button class = "butts" onclick = "back()"> Back </button>' + ' ' + '<button class = "butts" onclick = "returna()"> Return </button>';
                      document.getElementById('P').innerHTML = '<button class = "butts" onclick = "prev()"> Previous </button>';
                      document.getElementById('N').innerHTML = '<button class = "butts" onclick = "next()"> Next </button>';

                      document.getElementById('cno').innerHTML = "Card <div id = 'cardNo'></div> of 3";
                      document.getElementById('main').style.visibility = 'visible';
                      
                      document.getElementById('main').innerHTML = cardFlip[cardFlip.length - z]}
                     

// Previous button
function prev() {z = z + 1;
                 if (z > 3) {z = 1;}
                 document.getElementById('main').innerHTML = cardFlip[cardFlip.length - z]}

// Next button                                    
function next() {z = z - 1;
                 if (z <= 0) {z = 3;}
                 document.getElementById('main').innerHTML = cardFlip[cardFlip.length - z]}

// Flip and unflip
function front() {z;
                 document.getElementById('main').innerHTML = cardFlip[cardFlip.length - z]}

function back() {z;
                   document.getElementById('main').innerHTML = cardUnflip[cardUnflip.length - z]}

       // NB: If there's a need to show the end of the flash cards collection then put this code in: 
       // if (z <= 0) {document.getElementById('main').innerHTML = 'End of flash card collection'} //