import { loadTodosFailure, loadTodosSuccess, loadTodosInProgress, createTodo} from './actions'

export const loadTodos = () => async (dispatch, getState) =>{
    try{
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
    }
    catch(err)
    {
        dispatch(loadTodosFailure());
        dispatch(displayAlert(err))
    }
}

export const addTodoRequest = text => async dispatch =>{

    try{
    const body = JSON.stringify(text);
    const response = await fetch('http://localhost:8080/todos',{
        headers: {
            'Content-Type':'application/json',
        },
        method: 'POST',
        body
    });

    const todo = await response.json();
    dispatch(createTodo(todo));
    }
    catch(e){
        dispatch(displayAlert(e))
    }
}

export const displayAlert = text => () => {
    alert(text)
}