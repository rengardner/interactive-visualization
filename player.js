
// using this tutorial (at least vaguely): https://levelup.gitconnected.com/creating-a-simple-music-player-with-javascript-e825d93adff3

const song = document.querySelector('#song'); // audio object

const songTitle = document.querySelector('#music-title'); // element where track title appears

const progressBar = document.querySelector('#progress-bar'); // element where progress bar appears
let pPause = document.querySelector('#play-pause'); // element where play and pause image appears


// function where pp (play-pause) element changes based on playing boolean value - if play button clicked, change pp.src to pause button and call song.play() and vice versa.
let playing = true;
function playPause() {
    if (playing) {
        const song = document.querySelector('#song'),
        thumbnail = document.querySelector('#thumbnail');

        pPause.src = "images/morning/pause.gif"

        song.play();
        playing = false;
    } else {
        pPause.src = "images/morning/play.gif"

        song.pause();
        playing = true;
    }
}
// update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
    document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(song.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
    } else {
        document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(song.duration)));
    }
};

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

// function where progressBar.value is changed when slider thumb is dragged without auto-playing audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};
