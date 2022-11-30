const str1 = 'Cats are the best!';

console.log(`str1.endsWith('best!')`, str1.endsWith('best!'));
// expected output: true

console.log(`str1.endsWith('best', 17)`, str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question?';

console.log(`str2.endsWith('question')`, str2.endsWith('question'));
// expected output: false

console.log(`str1.startsWith('are', 5)`, str1.startsWith('are', 5));

const poopString = '💩';


console.log(`poopString.repeat(10)`, poopString.repeat(100));