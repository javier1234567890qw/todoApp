console.log('hola mundo');
const initialState =[ {
    id: 1,
    todo: 'comprar agua',
    done : false
}];

const todoReducer = (state = initialState, action) => {
  if (action?.type==='agregar' ) {
    return[...state,action.payload]
  }
  
    return state

}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'comprar leche',
    done : false
}


const action = {
    type: 'agregar',//el tipo de objeto
    payload: newTodo,//lo que trae dentro 

}
todos = todoReducer(todos,action );


console.log(todos);