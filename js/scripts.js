var notes = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab"]; 
const note1 = document.getElementById("one")
const note2 = document.getElementById("two")
const note3 = document.getElementById("three")
const note4 = document.getElementById("four")
const note5 = document.getElementById("five")
const note6 = document.getElementById("six")
const note7 = document.getElementById("seven")
const note8 = document.getElementById("eight")
const note9 = document.getElementById("nine")
const note10 = document.getElementById("ten")
const note11 = document.getElementById("eleven")
const note12 = document.getElementById("twelve")
const note13 = document.getElementById("thirteen")

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