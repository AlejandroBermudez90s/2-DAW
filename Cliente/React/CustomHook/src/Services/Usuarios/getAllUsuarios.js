function getAllUsuarios() {

    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error)
            return ([])
        })
}

export default getAllUsuarios
