import React from "react";
import TodoListItem from './TodoListItem'
import NewTodoForm from "./NewTodoForm";
import {  connect } from "react-redux";

import './TodoList.css'
import { removeTodo } from "./actions";

const TodoList = ({todos =[], onRemovedPressed}) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {
            todos.map(todo => <TodoListItem todo={todo} onRemovedPressed={onRemovedPressed} />)
        }
    </div>
)

const mapStateToProps =state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovedPressed: text => dispatch(removeTodo(text)),
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);