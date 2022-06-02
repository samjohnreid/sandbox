// function getUsers() {
//     let users = [];

//     users = [
//         { username: 'sab', email: 'sab@gmail.com' },
//         { username: 'dommers', email: 'dom@gmail.com' },
//         { username: 'banksy', email: 'bianca@gmail.com' }
//     ];

//     return users;
// }

// function findUser(searchTerm) {
//     const users = getUsers();
//     const user = users.find((item) => {
//         return item.username === searchTerm;
//     });
//     return user;
// }

// console.log(findUser('sab'));

// **********

// function getUsers(callback) {

//     setTimeout(() => {
//         callback([
//             { username: 'sab', email: 'sab@gmail.com' },
//             { username: 'dommers', email: 'dom@gmail.com' },
//             { username: 'banksy', email: 'bianca@gmail.com' }
//         ]);
//     }, 1000);

// }

// function findUser(searchTerm, callback) {
//     getUsers((users) => {
//         const user = users.find((item) => {
//             return item.username === searchTerm;
//         });
//         callback(user);
//     });
// }

// findUser('sab', console.log);

// **********

// function getUsers() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 { username: 'sab', email: 'sab@gmail.com' },
//                 { username: 'dommers', email: 'dom@gmail.com' },
//                 { username: 'banksy', email: 'bianca@gmail.com' }
//             ]);
//         }, 1000);
//     });
// }

// getUsers()
//     .then((users) => {
//         console.log(users);
//     });

// **********

// let geoCodeList = document.getElementById('container');

// let retailers = [
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
//     { geoCode: 'coordinates go here' },
// ];

// retailers.forEach((item) => {
//     const listItem = document.createElement('li');
//     listItem.innerText = item.geoCode;
//     geoCodeList.appendChild(listItem);
// });

// let retailersNew = [];

// let geoCodeListNew = document.getElementById('containerNew');

// const buildNewArray = (callback) => {
//     retailers.forEach((item) => {
//         setTimeout(() => {
//             item.geoCode = 'weeeee';
//             retailersNew.push(item);
//             callback(item);
//         }, 1000);
//     });
// }

// const samsCoolCallback = (data) => {
//     const listItem = document.createElement('li');
//     listItem.innerText = data.geoCode;
//     geoCodeListNew.appendChild(listItem);
// }

// buildNewArray(samsCoolCallback);

// **********

let geoCodeList = document.getElementById('container');

let retailers = [
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
    { geoCode: 'coordinates go here' },
];

// retailers.forEach((item) => {
//     const listItem = document.createElement('li');
//     listItem.innerText = item.geoCode;
//     geoCodeList.appendChild(listItem);
// });

for (const item of retailers) {
    const listItem = document.createElement('li');
    listItem.innerText = item.geoCode;
    geoCodeList.appendChild(listItem);
}

// *

let geoCodeListNew = document.getElementById('containerNew');
let retailersNew = [];

const delayedApiCall = (retailer) => {
    // this would eventually be the geocode request
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            retailer.geoCode = 'weeeee!';
            resolve(retailersNew.push(retailer));
            reject('oh no!');
        }, 500);
    });
}

const makeNewArray = async (array) => {
    // ***** in sequence (concurrently)
    for (const item of array) {
        await delayedApiCall(item);
        console.log('new item added', item);
    }
    
    // ***** in parallel (asynchronously!)
    // const promises = array.map(delayedApiCall);
    // await Promise.all(promises);
    
    buildNewList();
}

const buildNewList = () => {
    // const listItem = document.createElement('li');
    // listItem.innerText = item.geoCode;
    // geoCodeListNew.appendChild(listItem);
    retailersNew.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerText = item.geoCode;
        geoCodeListNew.appendChild(listItem);
    });
}

makeNewArray(retailers);






// async function f() {
//     let resultsString = 'original';

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resultsString = 'Finished!!! WOOT';
//             resolve(resultsString);
//         }, 3000);
//     });

//     let result = await promise;

//     console.log(result);
// }

// f();
