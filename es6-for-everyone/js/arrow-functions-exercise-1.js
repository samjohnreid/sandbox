// Select all the list items on the page and convert to array

const videos = Array.from(document.querySelectorAll('li'));


// Filter for only the elements that contain the word 'Flexbox'

const filteredVids = videos.filter(video => video.innerText.includes('Flexbox'));


// map down to a list of time strings

const times = filteredVids.map(video => video.dataset.time);


// map to an array of seconds

seconds = times.map((time) => {
    const timeInSecondsArray = time.split(':').map(time => parseFloat(time));
    return (timeInSecondsArray[0] * 60) + timeInSecondsArray[1];
});


// reduce to get total

const totalSeconds = seconds.reduce((accumulatingTotal, seconds) => accumulatingTotal + seconds, 0);

console.log('totalSeconds: ', totalSeconds);


// 🔥 This can also be done in a single .reduce(), but we're practicing arrow functions here, so chain them!