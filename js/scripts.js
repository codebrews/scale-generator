var notes = ["A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "G#/Gb", "G", "G#/Gb"];

document.getElementById("one").innerHTML = notes[0];
document.getElementById("two").innerHTML = notes[1];
document.getElementById("three").innerHTML = notes[2];
document.getElementById("four").innerHTML = notes[3];
document.getElementById("five").innerHTML = notes[4];
document.getElementById("six").innerHTML = notes[5];
document.getElementById("seven").innerHTML = notes[6];
document.getElementById("eight").innerHTML = notes[7];
document.getElementById("nine").innerHTML = notes[8];
document.getElementById("ten").innerHTML = notes[9];
document.getElementById("eleven").innerHTML = notes[10];
document.getElementById("twelve").innerHTML = notes[11];
document.getElementById("thirteen").innerHTML = notes[0];

function chooseKey(key){
    if(notes[0] !== key)
        notes.push(notes.shift());

        document.getElementById("one").innerHTML = notes[0];
        document.getElementById("two").innerHTML = notes[1];
        document.getElementById("three").innerHTML = notes[2];
        document.getElementById("four").innerHTML = notes[3];
        document.getElementById("five").innerHTML = notes[4];
        document.getElementById("six").innerHTML = notes[5];
        document.getElementById("seven").innerHTML = notes[6];
        document.getElementById("eight").innerHTML = notes[7];
        document.getElementById("nine").innerHTML = notes[8];
        document.getElementById("ten").innerHTML = notes[9];
        document.getElementById("eleven").innerHTML = notes[10];
        document.getElementById("twelve").innerHTML = notes[11];
        document.getElementById("thirteen").innerHTML = notes[0];
};