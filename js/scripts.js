var notes = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"]; 
const note1 = document.getElementById("note1")
const note2 = document.getElementById("note2")
const note3 = document.getElementById("note3")
const note4 = document.getElementById("note4")
const note5 = document.getElementById("note5")
const note6 = document.getElementById("note6")
const note7 = document.getElementById("note7")
const note8 = document.getElementById("note8")
const note9 = document.getElementById("note9")
const note10 = document.getElementById("note10")
const note11 = document.getElementById("note11")
const note12 = document.getElementById("note12")
const note13 = document.getElementById("note13")

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

function chooseKey(key){
    while(notes[0] !== key){
        notes.push(notes.shift());
    }
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

const key = document.querySelector('#key');

key.addEventListener('change', (event) => {
    chooseKey(event.target.value);
});

// function chooseScale(scale){
//     const scale = document.querySelector('#scale');
//     if (scale === "major") {
        
//     }
// }

// const scale = document.querySelector('#scale');

// scale.addEventListener('change', (event) => {
//     chooseScale(event.target.value);
// });