const taggedTemplate = (strings, ...values) => {
    let str = '';
    strings.forEach((string, i) => {
        str += `${string}<span style="background: yellow;">${(values[i] || '')}</span>`;
    });
    return str;
}

const name = 'Archer';
const age = 9;

const sentence = taggedTemplate`My dog's name is ${name} and he is ${age * 7} years old.`;

document.body.innerHTML = sentence;