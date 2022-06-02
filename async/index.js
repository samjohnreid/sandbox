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
            reject('oh no!'); // this needs some proper attention!
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
    retailersNew.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerText = item.geoCode;
        geoCodeListNew.appendChild(listItem);
    });
}

makeNewArray(retailers);