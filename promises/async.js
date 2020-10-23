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

// Asyn and Await example below

async function inti() {
    await createPost({title: 'post 3', body: 'post 3 body'})

    getPosts();
}

// inti();


// example using async await with fetch.

async function fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data)
    document.body.innerHTML = `<li>${data[0].name}</li>`
}

fetchUser();
