//  Array of notes to be manipulated and displayed on page
var notes = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"]; //an array of notes

//  Divs to contain note names
const note1 = document.getElementById("note1");
const note2 = document.getElementById("note2");
const note3 = document.getElementById("note3");
const note4 = document.getElementById("note4");
const note5 = document.getElementById("note5");
const note6 = document.getElementById("note6");
const note7 = document.getElementById("note7");
const note8 = document.getElementById("note8");
const note9 = document.getElementById("note9");
const note10 = document.getElementById("note10");
const note11 = document.getElementById("note11");
const note12 = document.getElementById("note12");
const note13 = document.getElementById("note13");

//  displays default order of note names from array to divs on page
note1.innerHTML = notes[0];
note2.innerHTML = notes[1];
note3.innerHTML = notes[2];
note4.innerHTML = notes[3];
note5.innerHTML = notes[4];
note6.innerHTML = notes[5];
note7.innerHTML = notes[6];
note8.innerHTML = notes[7];
note9.innerHTML = notes[8];
note10.innerHTML = notes[9];
note11.innerHTML = notes[10];
note12.innerHTML = notes[11];
note13.innerHTML = notes[0];

//  Drop down menu elements
const key = document.querySelector('#key');
const scale = document.querySelector('#scale');

//  Event listeners for drop down menus
key.addEventListener('change', (event) => {
    chooseKey(event.target.value);
});

scale.addEventListener('change', (event) => {
    resetNotes();
    chooseScale(event.target.value);
});

// Functionns!!!
function chooseKey(key) {                                 
    while(notes[0] !== key){                //moves first note to end of array until chosen note or key is first in array            
        notes.push(notes.shift());
    }
    note1.innerHTML = notes[0];             //displays new order of notes on page
    note2.innerHTML = notes[1];
    note3.innerHTML = notes[2];
    note4.innerHTML = notes[3];
    note5.innerHTML = notes[4];
    note6.innerHTML = notes[5];
    note7.innerHTML = notes[6];
    note8.innerHTML = notes[7];
    note9.innerHTML = notes[8];
    note10.innerHTML = notes[9];
    note11.innerHTML = notes[10];
    note12.innerHTML = notes[11];
    note13.innerHTML = notes[0];
};

function chooseScale(scale) {                            //fades display of notes that don't belong in scale based on user's scale choice
    if (scale === "major") {
        note2.classList.add("fade");
        note4.classList.add("fade");
        note7.classList.add("fade");
        note9.classList.add("fade");
        note11.classList.add("fade");
    }
    else if (scale === "minor") {
        note2.classList.add("fade");
        note5.classList.add("fade");
        note7.classList.add("fade");
        note10.classList.add("fade");
        note12.classList.add("fade");
    }
    else if (scale === "majorPentatonic") {
        note2.classList.add("fade");
        note4.classList.add("fade");
        note6.classList.add("fade");
        note7.classList.add("fade");
        note9.classList.add("fade");
        note11.classList.add("fade");
        note12.classList.add("fade");
    }
    else if (scale === "minorPentatonic") {
        note2.classList.add("fade");
        note3.classList.add("fade");
        note5.classList.add("fade");
        note7.classList.add("fade");
        note9.classList.add("fade");
        note10.classList.add("fade");
        note12.classList.add("fade");
    }
    else {
        resetNotes();
    }
};

function resetNotes() {
    var noteDivs = document.getElementsByClassName("note");
    for(i = 0; i < noteDivs.length; i++){
        noteDivs[i].className = "note";
    }
};