import { useForm } from 'react-hook-form'

const BorrarPostForm = (props) => {

  const POST_ID = {
    IDNOTA: "id"
  }

  // Objeto post en su estado inicial
  const INICIAL = { id: 0 }

  const { register,
    handleSubmit,
    reset,
    formState: { errors } } = useForm({ defaultValues: INICIAL });


  const manejarFormulario = handleSubmit((postABorrar) => {
    props.posts.borrarPost(postABorrar).then((postABorrar) => {
      
      if (Object.keys(postABorrar).length>0) {

        console.log("Post borrado correctamente")
      }
      else {
        console.log("ERROR en la eliminación del post")
      }
    })
    console.log("BORRADO");

  })

  return (
    <form id="formulario" onSubmit={manejarFormulario}>
      <p><strong>Borrar post</strong></p>
      <label htmlFor={POST_ID.IDNOTA}>ID Post</label>
      <input id={POST_ID.IDNOTA} type="number"
        {...register(POST_ID.IDNOTA,
          {
            required: {
              value: true,
              message: "El campo es obligatorio"
            },
            min: {
              value: 1,
              message: "El valor mínimo es 1"
            }
          })
        }
      ></input><br></br><span className='errors'>{errors.id?.message}</span><br></br>

      <button>"Borrar Post"</button>

    </form>
  )

}
export default BorrarPostForm;