function getPostsPorUsuario(usuario_) {

    return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + usuario_)
        .then((response) => {
            return (response.json())
        })
        .catch((error) => {
            console.log(error)
            return ([])
        })
}

export default getPostsPorUsuario
