import ListaPost from "../../componentes/ListaPosts/ListaPost"
import PostForm from "../../componentes/PostForm/PostForm"
import "./PaginaPost.css"
import useAllPosts from "../../hooks/Posts/useAllPosts"
import BorrarPostForm from "../../componentes/BorrarPostForm/BorrarPostForm"


const PaginaPost = () => {

    const posts = useAllPosts()

    return (
        <>
            <div className="izquierda"> <ListaPost posts = {posts}></ListaPost> </div>
            <div className="derecha"> <PostForm posts = {posts}></PostForm> </div>
            <div className="medio"> <BorrarPostForm posts = {posts}></BorrarPostForm> </div>
        </>
    )
}

export default PaginaPost