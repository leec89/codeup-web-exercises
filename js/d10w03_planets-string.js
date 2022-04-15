// (function(){
    "use strict";

    var d10w03_planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert d10w03_planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = d10w03_planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * */

    var planetsWithBreakTags = planetsArray.join('<br>')
    console.log(planetsWithBreakTags);

    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    const list = document.querySelector('.output ul');
// list.innerHTML = '';
const greetings = ['Happy Birthday!',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon'];

for (let greeting of greetings) {
    // Your conditional test needs to go inside the parentheses
    // in the line below, replacing what's currently there
    if (greeting) {
        const listItem = document.createElement('li');
        listItem.textContent = greeting;
        // list.appendChild(listItem);
    }
}



// })();
