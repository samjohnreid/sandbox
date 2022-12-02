const bugsnax = [
    'Bunger',
    'Cobhopper',
    'Crispy Snakpod',
    'Dr Sodie',
    'Fryder',
    'Shishkabug',
    'Sweetiefly',
    'Weenyworm',
    'White Strabby'
];

console.log(bugsnax);

for (const [i, bugsnack] of bugsnax.entries()) {
    if (bugsnack === 'Fryder') {
        continue;
    }
    console.log(`${bugsnack} is the ${i} item!`);
}

const ps = document.querySelectorAll('p');

for (const paragraph of ps) {
    paragraph.addEventListener('click', (item) => {
        alert(item.target.innerText);
    });
}

console.log(ps);

const apple = {
    color: 'Red',
    size: 'Medium',
    weight: 50,
    sugar: 10,
    type: 'Honeycrisp',
};

console.log(apple);

for (const item of Object.entries(apple)) {
    console.log(`${item[0]}: ${item[1]}`);
}