const res = fetch('http://api.github.com/users/samjohnreid');

// this (`res`) just returns a Promise, it doesn't return data...
console.log('res:', res);

// we need to *listen* for when the data retrieval is complete:
fetch('http://api.github.com/users/samjohnreid').then((res) => {
    console.log('res:', res); // this won't give us data either, because Fetch doesn't assume the data is going to be JSON (unlike Axios, another Promise-based API)
    // so...
    return res.json(); // and then...
}).then((res) => {
    console.log('res:', res);
}).catch((err) => {
    console.error('Oops!', err);
});

// --------------------------------------------------

// example of native built-in Promise (or Promise-based API):

const video = document.querySelector('.sam-cam');
console.log('video:', video);

navigator.mediaDevices.getUserMedia({
    // video: true (switching off while i continue the course without streaming!)
    video: false
}).then((mediaStream) => {
    video.srcObject = mediaStream;
    video.load();
    video.play();
}).catch((err) => {
    console.error('Oh no the video\'s not working!', err);
});

// --------------------------------------------------

// any function that returns a Promise means it has a Promise-based API
// and can be used with then / catch etc., and also async + await

function breathe(amount) {
    return new Promise((resolve, reject) => {
        
        if (amount < 500) {
            reject('That is too small of a value!');
        }
        
        setTimeout(() => {
            resolve(`Done for ${amount}ms!`);
        }, amount);

    });
}

breathe(2000).then((res) => {
    console.log('res:', res);
    return breathe(2000);
}).then((res2) => {
    console.log('res2:', res2);
    return breathe(600);
}).then((res3) => {
    console.log('res3:', res3);
    return breathe(700);
}).then((res4) => {
    console.log('res4:', res4);
    return breathe(400);
}).then((res5) => {
    console.log('res5:', res5);
    return breathe(3000);
}).then((res6) => {
    console.log('res6:', res6);
    return breathe(500);
}).then((res7) => {
    console.log('res7:', res7);
    return breathe(800);
}).then((res8) => {
    console.log('res8:', res8);
    return breathe(200);
}).then((res9) => {
    console.log('res9:', res9);
    return breathe(2500);
}).then((re10) => {
    console.log('re10:', re10);
    return breathe(500);
}).catch((err) => {
    console.error('Uh-oh, something bad happened!', err);
});

// --------------------------------------------------

// async + await is built on top of Promises. you must have a Promise to use async + await

function breathe2(amount) {
    return new Promise((resolve, reject) => {
        
        if (amount < 500) {
            reject('That is too small of a value!');
        }
        
        setTimeout(() => {
            resolve(`Done for ${amount}ms!`);
        }, amount);

    });
}

async function go() {
    console.log('start');
    const res = await breathe2(1000);
    console.log('res:', res);
    const res2 = await breathe2(500);
    console.log('res2:', res2);
    const res3 = await breathe2(800);
    console.log('res3:', res3);
    const res4 = await breathe2(700);
    console.log('res4:', res4);
    const res5 = await breathe2(500);
    console.log('res5:', res5);
    console.log('end');
}

go();

// --------------------------------------------------

function samsPromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Weeeeeee! Promise resolved!');
        }, time);
    });
}

samsPromise(1000).then((res) => {
    console.log(res);
})

async function samsPromiseAsyncAwait() {
    const res = await samsPromise(2000);
    console.log('samsPromiseAsyncAwait res:', res);
}

samsPromiseAsyncAwait();

























