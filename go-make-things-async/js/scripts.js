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

fetch('https://ghibliapi.herokuapp.com/films').then((response) => {
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

// -----------------------------------------------

async function traditionalFn () {
	await fetch('https://jsonplaceholder.typicode.com/posts/').then(function (response) {
		return response.json();
	}).then(function (data) {
		console.log('Traditional Fetch', data);
	});
	console.log('Traditional Message');
}
traditionalFn();


async function getTheAnswer() {
	return 42;
}

const answer = getTheAnswer();

answer.then((data) => {
	console.log('huh?', data);
});

/**
 * Get an article by its ID
 * @param  {Integer} id The article ID
 */
 async function getArticleByID (id) {
	try {
		let response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
		
		// If the call failed, throw an error
		if (!response.ok) {
			throw 'Something went wrong.';
		}

		// Otherwise, get the post JSON
		let data = await response.json();

		// Log the data to the console
		console.log('ghibli movie: ', data);
	} catch (error) {
		console.warn('ERROR: ', error);
	}
}

// Get the article with an ID of 3
getArticleByID('dc2e6bd1-8156-4886-adff-b39e6043af0c');









const fetchGhibli = () => {
	fetch('https://ghibliapi.herokuapp.com/films').then((response) => {
		return response.json();
	}).then((data) => {
		console.log('Ghibli!', data);
	});
}

fetchGhibli();