const lyrics = [
    { time: 17000, text: 'Loving can hurt.' },
    { time: 21000, text: 'Loving can hurt sometimes.' },
    { time: 26000, text: 'But it\'s the only thing that I know' }, //
    { time: 35000, text: 'When it gets hard...' },
    { time: 38900, text: 'You know it can get hard sometimes' },
    { time: 43300, text: 'It is the only thing makes us feel alive' },
    { time: 54000, text: 'We keep this love in a photograph' },
    { time: 58000, text: 'We made these memories for ourselves' },
    { time: 60800, text: 'Where our eyes are never closing' },
    { time: 63000, text: 'Hearts are never broken' },
    { time: 65000, text: 'And time\'s forever frozen still' }
];

function setTiming(lyrics) {
    for (const lyric of lyrics) {
        setTimeout(function() {
            console.log(lyric.text);
        }, lyric.time);
    }
}

console.log('Ed Sheeran - Photograph');

setTiming(lyrics);