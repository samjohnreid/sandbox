let count = new Promise((resolve, reject) => {
	resolve(1);
});

count.then((num) => {
	console.log(num);
	return num + 1;
}).then((num) => {
	console.log(num);
	return num + 1;
}).then((num) => {
	console.log(num);
	return num + 1;
}).then((num) => {
	console.log(num);
	return num + 1;
}).then((num) => {
	console.log(num);
	return num + 1;
}).then((num) => {
	console.log(num);
	return num + 1;
}).then((num) => {
	console.log(num);
	return num + 1;
}).then((num) => {
	console.log(num);
	return num + 1;
}).then((num) => {
	console.log(num);
	return num + 1;
}).then((num) => {
	console.log(num);
	return num + 1;
});

let question = new Promise((resolve, reject) => {
	resolve(42);
});

setTimeout(() => {
	question.then((answer) => {
		console.log(answer);
	});
}, 5000);

// -----------------------------------------------

fetch('https://jsonplaceholder.typicode.com/postsssss').then((response) => {
	if (response.ok) {
		return response.json();
	}

	throw response.status;
}).then((data) => {
	console.log(data);
}).catch((error) => {
	console.warn('Oh no! There was an error.', error);
});

// -----------------------------------------------

let counterNumContainer = document.getElementById('counter');
let counterNum = parseInt(counterNumContainer.innerText);
setInterval(() => {
	counterNum = counterNum + 1;
	counterNumContainer.innerText = counterNum;
}, 1000)