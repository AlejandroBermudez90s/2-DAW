const DeletePost = (post_) => {

    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'DELETE',
        body: JSON.stringify(post_),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .catch((error) => ({}))
    }

export default DeletePost