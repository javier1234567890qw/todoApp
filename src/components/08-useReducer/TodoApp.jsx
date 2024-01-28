import { useEffect, useReducer } from 'react'
import { TodoReducer } from './TodoReducer'
import './complete.css'
import { useForm } from '../../hooks/useForm'


//init es una futncion que va a retornanr el objeto inicial
const init = () => {
    //esta condicion quiere decir que regrese el itrm del local storage ya pareseado o que si no esta regrese un arreglo vacio
    return JSON.parse(localStorage.getItem('todo')) || []
    
    
    
    // return [{
    //     id: new Date().getTime(),
    //     desc: "Aprender React",
    //     done: false
    // }]


}
export const TodoApp = () => {
    ////////////////////////////////////////////////////////////////////////
    //con init 
    ////////////////////////////////////////////////////////////////////////
    const [todos, dispatch] = useReducer(TodoReducer, [], init)

    console.log(todos);
    const [{ description }, handleInputChanges, reset] = useForm({
        description: '', //mismo que el input que se llama description
    })

    ////////////////////////////////////////////////////////////////////////
    //para guardar en el local storage
    ////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        //guardando en el local storage el primer parametro es el nombre y el segundo los valores q solo pueden ser strings
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleSubmit = (e) => {
        e.preventDefault();///para que no se actualize la pagina cada que se escribe
        console.log('nueva tarea');

        if (description.trim().length <= 1) {
            return;
        }
        ////////////////////////////////////////////////////////////////
        ////declaramos el nuevo todo a agregar
        ////////////////////////////////////////////////////////////////
        const newTodo = {
            id: new Date().getTime(),
            desc: description,//ponemos el formValue desestructurado
            done: false
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////
        //se declaa la accion como un objeto para mandarcela al reducer
        /////////////////////////////////////////////////////////////////////////////////////////////////

        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action)//al dispatch es que se le manda la accion y se encarga de renderizar todo
        reset();
    }

    const handleDelete = ( todoID) => {
        console.log(todoID) ;
        const action = {
            type: 'delete',
            payload:todoID
        }
        dispatch(action)
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>

            <div className='row'>
                <div className='col-7'>
                    <h4>Todos</h4>
                    <hr />
                    <ul >
                        {
                            todos.map((tod, i) => {
                                return (
                                    <li key={tod.id}
                                        className='list-group-item'>

                                        <p className=''> {i + 1} . {tod.desc}</p>

                                        <button onClick={()=>handleDelete(tod.id)}>
                                            borrar
                                        </button>

                                    </li>
                                )




                            }
                            )}

                    </ul>


                </div>
                <div
                    className='col-5'>
                    <h4>Agregar todo</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            name='description'
                            onChange={handleInputChanges}//hay que conectarlo aqui del usefrom
                            className='form-control'
                            placeholder='Aprender'
                            value={description}//le establecemos el formvalue desestructurado
                            autoComplete='off'
                            required />
                        <button type='submit'>Agregar</button>
                    </form>
                </div>
            </div>





        </div>
    )
}
