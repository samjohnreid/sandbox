function delayedLog(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500)
    console.log(item);
  });
}

async function processArray(array) {
  // notice that we can await a function
  // that returns a promise
  
  // ***** in sequence
  for (const item of array) {
      await delayedLog(item);
  }

  // ***** in parallel
  // const promises = array.map(delayedLog);
  // await Promise.all(promises);

  console.log('Done!');
}

processArray([1, 2, 3]);