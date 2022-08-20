import React from "react";
import TodoListItem from './TodoListItem'
import NewTodoForm from "./NewTodoForm";
import {  connect } from "react-redux";

import './TodoList.css'
import { removeTodo, setAsCompleted } from "./actions";

const TodoList = ({todos =[], onRemovedPressed, onCompletedPressed}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {
            todos.map(todo => <TodoListItem todo={todo} onRemovedPressed={onRemovedPressed} onCompletedPressed={onCompletedPressed}/>)
        }
    </div>
)

const mapStateToProps =state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovedPressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: (text, isCompleted) => dispatch(setAsCompleted(text, isCompleted))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);