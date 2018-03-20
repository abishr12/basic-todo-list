import React from 'react';

const ToDoListItem = props => {

    return (
        <li onClick={() => props.handleDelete(props.key)}>{props.itemName}</li>
    )
}

export default ToDoListItem;