import React from 'react';
import ToDoListItem from './todo-item'

const ToDoList = props =>{
    const todos = props.thingsToDo.map(items =>{
       
return <ToDoListItem
    key={items}
    handleDelete={props.handleDelete}
    itemName={items}/>
       
    })

return <ul className="col-md-6 list-group">{todos}</ul>;
}

export default ToDoList;