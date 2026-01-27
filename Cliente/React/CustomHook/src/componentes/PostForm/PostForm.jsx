import { useForm } from 'react-hook-form'

const PostForm = (props) => {

  const POST_ID = {

    // Identificadores de los campos del formulario, se los asignaremos al atributo id de cada campo
    TITULO: "title",
    CUERPO: "body"
  }

  // Objeto post en su estado inicial
  const POSTINICIAL = {
    userid: 1,   // Por defecto le asignaremos el POST al usuario con id=1
    id: 0,   // ID que luego se sustituirá 
    title: "",
    body: ""
  }

  const { register,
    handleSubmit,
    reset,
    formState: { errors } } = useForm({ defaultValues: POSTINICIAL });

  const manejarFormulario = handleSubmit((nuevoPost) => {

    nuevoPost = {...nuevoPost,
                 id : props.posts.lista.length+1 
                }
    
    console.log("POST transformado ", nuevoPost)
    console.log("POST lista ", props.posts.lista)

    props.posts.crearPost(nuevoPost).then((postCreado) => {
      
      if (Object.keys(postCreado).length>0) {

        reset(POSTINICIAL);
        console.log("Post creado correctamente")
      }
      else {
        console.log("ERROR en la creación del post")
      }
    })

    console.log("insertando post ", nuevoPost);
  })

  return (
    <form id="formulario" onSubmit={manejarFormulario}>
      <p><strong>Nuevo post</strong></p>
      <label htmlFor={POST_ID.TITULO}>Contenido</label>
      <input id={POST_ID.TITULO} type="text"
        {...register(POST_ID.TITULO,
          {
            required: {
              value: true,
              message: "El título del post es obligatorio"
            }
          })
        }
      ></input><br></br><span className='errors'>{errors.title?.message}</span><br></br>

      <label htmlFor={POST_ID.CUERPO}>Cuerpo</label>
      <textarea id={POST_ID.CUERPO} rows="10" cols="50"
        {...register(POST_ID.CUERPO,
          {
            required: {
              value: true,
              message: "El cuerpo del post es obligatorio"
            },
            maxLength: {
              value: 500,
              message: "El comentario no puede exceder los 500 caracteres"
            }
          })
        }
      ></textarea><br></br><span className='errors'>{errors.body?.message}</span><br></br>

      <button disabled = {props.posts.cargando} > {props.posts.cargando ? "Añadiendo Post" : "Añadir Post"} </button>


    </form>

  )
}

export default PostForm;