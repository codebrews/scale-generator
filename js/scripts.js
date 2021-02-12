//  Array of notes to be manipulated and displayed on page
var notes = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"]; 

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

//  Drop down menu elements
const key = document.querySelector('#key');
const scale = document.querySelector('#scale');

//  Event listeners for drop down menus
key.addEventListener('change', (event) => {
    chooseKey(event.target.value);
    listNotes(scale.value);
});

scale.addEventListener('change', (event) => {
    resetNoteDisplay();
    chooseScale(event.target.value);
    listNotes(event.target.value);
});

//  displays default order of note names from array to divs on page
function displayNotes() {
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
};
displayNotes();

// Functionns!!!

//moves first note to end of array until chosen note or key is first in array
function chooseKey(key) {                                 
    while(notes[0] !== key){
        notes.push(notes.shift());
    }
    displayNotes();
};

//fades display of notes that don't belong in scale based on user's scale choice
function chooseScale(scale) {
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
};

// resets the default display of the notes if no scale or chromatic scale is selected
function resetNoteDisplay() {
    var noteDivs = document.getElementsByClassName("note");
    for(i = 0; i < noteDivs.length; i++){
        noteDivs[i].className = "note";
    }
};

// Lists the summary of notes in scale 
function listNotes(scale) {
    const scaleNotes = document.querySelector("#scaleNotes");
    if (scale === "chromatic") {
        scaleNotes.innerHTML = `${notes[0]}, ${notes[1]}, ${notes[2]}, ${notes[3]}, ${notes[4]}, ${notes[5]}, ${notes[6]}, ${notes[7]}, ${notes[8]}, ${notes[9]}, ${notes[10]}, ${notes[11]}, ${notes[0]}`;
    }
    else if (scale === "major") {
        scaleNotes.innerHTML = `${notes[0]}, ${notes[2]}, ${notes[4]}, ${notes[5]}, ${notes[7]}, ${notes[9]}, ${notes[11]}, ${notes[0]}`;
    }
    else if (scale === "minor") {
        scaleNotes.innerHTML = `${notes[0]}, ${notes[2]}, ${notes[3]}, ${notes[5]}, ${notes[7]}, ${notes[8]}, ${notes[10]}, ${notes[0]}`;
    }
    else if (scale === "majorPentatonic") {
        scaleNotes.innerHTML = `${notes[0]}, ${notes[2]}, ${notes[4]}, ${notes[7]}, ${notes[9]}, ${notes[0]}`;
    }
    else if (scale === "minorPentatonic") {
        scaleNotes.innerHTML = `${notes[0]}, ${notes[3]}, ${notes[5]}, ${notes[7]}, ${notes[10]}, ${notes[0]}`;
    }
};
listNotes("chromatic");

// lists triads in scale (may not apply to all scales)
function listTriads (scale) {
    const triads = document.querySelector("scaleTriads");
};

// // A function to display the order of notes on the page ****** why doesn't it work??? ********
// function printNotes() {
//     for (i = 0; i < 12; i++); {
//         noteDivs[i].innerHTML = notes[i];
//     };
//     noteDivs[12].innerHTML = notes[0];
// };
// printNotes();

// const noteDivs = document.getElementsByClassName("note"); // goes with above function
