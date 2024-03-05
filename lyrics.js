const lyrics = [
    { time: "17:40", text: 'Loving can hurt.' },
    { time: "21:99", text: 'Loving can hurt sometimes.' },
    { time: "26:58", text: 'But it\'s the only thing that I know' }, 
    { time: "34:75", text: 'When it gets hard...' },
    { time: "39:20", text: 'You know it can get hard sometimes' },
    { time: "44:46", text: 'It is the only thing makes us feel alive' },
    { time: "54:42", text: 'We keep this love in a photograph' }, //
    { time: "59:10", text: 'We made these memories for ourselves' },
    { time: "62:72", text: 'Where our eyes are never closing' },
    { time: "65:42", text: 'Hearts are never broken' },
    { time: "67:67", text: 'And time\'s forever frozen still' }
];

function milisecondsChanger(time) {
    let timeFixed = time.split(':');
    let seconds = parseInt(timeFixed[0]);
    let milliseconds = parseInt(timeFixed[1]);
    return (seconds * 1000) + milliseconds;
}

function setTiming(lyrics) {
    for (const lyric of lyrics) {
        setTimeout(function() {
            console.log(lyric.text);
        }, milisecondsChanger(lyric.time));
    }
}

console.log('Ed Sheeran - Photograph');
console.log(secondsToMS("17:70"));

setTiming(lyrics);
