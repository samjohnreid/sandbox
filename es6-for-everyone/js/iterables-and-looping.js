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