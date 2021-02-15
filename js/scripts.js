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
    listTriads(scale.value)
    listIntervals(scale.value)
});

scale.addEventListener('change', (event) => {
    resetNoteDisplay();
    chooseScale(event.target.value);
    listNotes(event.target.value);
    listTriads(event.target.value)
    listIntervals(event.target.value)
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
function listTriads(scale) {
    const triads = document.querySelector("#scaleTriads");
    if (scale === "chromatic") {
        triads.innerHTML = "All possible triads"
    }
    else if (scale === "major") {
        triads.innerHTML = `${notes[0]}maj: ${notes[0]}, ${notes[4]}, ${notes[7]}<br>
        ${notes[2]}min: ${notes[2]}, ${notes[5]}, ${notes[9]}<br>
        ${notes[4]}min: ${notes[4]}, ${notes[7]}, ${notes[11]}<br>
        ${notes[5]}maj: ${notes[5]}, ${notes[9]}, ${notes[0]}<br>
        ${notes[7]}maj: ${notes[7]}, ${notes[11]}, ${notes[2]}<br>
        ${notes[9]}min: ${notes[9]}, ${notes[0]}, ${notes[4]}<br>
        ${notes[11]}dim: ${notes[11]}, ${notes[2]}, ${notes[5]}`
    }
    else if (scale === "minor") {
        triads.innerHTML = `${notes[0]}min: ${notes[0]}, ${notes[3]}, ${notes[7]}<br>
        ${notes[2]}dim: ${notes[2]}, ${notes[5]}, ${notes[8]}<br>
        ${notes[3]}maj: ${notes[3]}, ${notes[7]}, ${notes[10]}<br>
        ${notes[5]}min: ${notes[5]}, ${notes[8]}, ${notes[0]}<br>
        ${notes[7]}min: ${notes[7]}, ${notes[10]}, ${notes[2]}<br>
        ${notes[8]}maj: ${notes[8]}, ${notes[0]}, ${notes[3]}<br>
        ${notes[10]}maj: ${notes[10]}, ${notes[2]}, ${notes[5]}`
    }
    else {
        triads.innerHTML = "N/A"
    }
};
listTriads("chromatic");

// this lists the intervals of the scale 
function listIntervals(scale) {
    const intervals = document.querySelector("#scaleIntervals");
    if (scale === "major") {
        intervals.innerHTML = "P1, M2, M3, P4, P5, M6, M7"
    }
    else if (scale === "minor") {
        intervals.innerHTML = "P1, M2, m3, P4, P5, m6, m7"
    }
    else if (scale === "majorPentatonic") {
        intervals.innerHTML = "P1, M2, M3, P5, M6"
    }
    else if (scale === "minorPentatonic") {
        intervals.innerHTML = "P1, m3, P4, P5, m7"
    }
    else if (scale === "chromatic") {
        intervals.innerHTML = "P1, m2, M2, m3, M3, P4, TT, P5, m6, M6, m7, M7"
    }
};
listIntervals("chromatic");

// // A function to display the order of notes on the page ****** why doesn't it work??? ********
// function printNotes() {
//     for (i = 0; i < 12; i++); {
//         noteDivs[i].innerHTML = notes[i];
//     };
//     noteDivs[12].innerHTML = notes[0];
// };
// printNotes();

// const noteDivs = document.getElementsByClassName("note"); // goes with above function
