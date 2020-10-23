const posts = [
    { title: 'post 1', body: 'post 2' },
    { title: 'post 2', body: 'post 2' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li> `
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post)

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject(`${errror}`)
            }

        }, 2000)
    })
}

// createpost will run first and the .then method will be called once it is finished running
// .then is only called if the promise is resolved. If not you will recieve an error
createPost({ title: 'post 3', body: 'post 2' }).then(getPosts)
