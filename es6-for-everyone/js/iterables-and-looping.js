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

for (const bugsnack of bugsnax) {
    if (bugsnack === 'Fryder') {
        continue;
    }
    console.log(bugsnack);
}