const posts = [
    {title: 'post 1', body: 'post 2'},
    {title: 'post 2', body: 'post 2'}
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
    setTimeout( () => {
        posts.push(post)
        callback();
    }, 2000)
}

createPost({title: 'post 3', body: 'post 2'}, getPosts)
