import { useState } from 'react'

export const useForm = (inicialState = {}) => {

    const [Values, setValues] = useState(inicialState)//recibe un objeto

    ////////////////////////////////
    //se pueden agregar validaciones
    ////////////////////////////////
     const reset = () => {
        setValues(inicialState)
     }

    const handleInputChanges = (e) => {

        setValues({
            ...Values,//se hace asi para solo elegir una 
            [e.target.name]: e.target.value
        });


    }

    return [ Values, handleInputChanges,reset ]//el primer valor es el estado del form y el segundo el manejo de cambios

}