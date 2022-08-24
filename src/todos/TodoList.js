import React, {useEffect} from "react";
import TodoListItem from './TodoListItem'
import NewTodoForm from "./NewTodoForm";
import {  connect } from "react-redux";

import './TodoList.css'
import { removeTodo, setAsCompleted } from "./actions";
import { loadTodos } from "./thunks";


const TodoList = ({todos =[], onRemovedPressed, onCompletedPressed, isLoading, startLoadingTodos}) => {

    useEffect(()=>{
        startLoadingTodos();
    },[])
    
    const isLoadingMessage = <div>Is Loading</div>
    const content = 
    (
    <div className="list-wrapper">
        <NewTodoForm/>
        {
            todos.map(todo => <TodoListItem todo={todo} onRemovedPressed={onRemovedPressed} onCompletedPressed={onCompletedPressed}/>)
        }
    </div>
)
    return isLoading ? isLoadingMessage : content;
}

const mapStateToProps =state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovedPressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: (text, isCompleted) => dispatch(setAsCompleted(text, isCompleted))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);