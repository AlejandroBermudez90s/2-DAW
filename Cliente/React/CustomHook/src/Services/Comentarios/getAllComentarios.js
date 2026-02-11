function getAllComentarios() {

    return fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error)
            return ([])
        })
}

export default getAllComentarios
