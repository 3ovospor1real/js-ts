function doSomething(action) {
  return new Promise((resolve, reject) => {
    if(typeof action !== 'string') {
      reject(new Error("Type of 'action' must be string"))
    }

    resolve(action);
  })
}

doSomething(1).then(a => console.log("I'm ", a), reason => console.log(reason))


