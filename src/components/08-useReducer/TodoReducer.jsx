

export const TodoReducer = (state = [], action) => {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //cuando se le manda la accion nueva con el dispatch se revisa el tipo de accion que es y se hace algo en concecuencia retornando un nuevo arreglo
    ////////////////////////////////////////////////////////////////////////////////////////////////
    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        case 'delete':
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state;
    }


}