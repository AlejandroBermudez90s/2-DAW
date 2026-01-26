function getAllPosts() {

    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error)
            return ([])
        })
}

export default getAllPosts
