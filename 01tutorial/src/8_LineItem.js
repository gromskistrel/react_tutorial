import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    // here you can remove the key component
    // , because we already have it in the parent
    <li className = "item">
        <input
            type = "checkbox"
            onChange = {() => handleCheck(item.id)}
            checked = {item.checked}
        />
        <label
            style= {(item.checked) ? {textDecoration: 'line-through'}: null}
            onDoubleClick = {() => handleCheck(item.id)}
        >{item.item}</label>
        <FaTrashAlt 
        onClick={() => handleDelete(item.id)}
            role="button" 
            tabIndex="0"
            // this is for screen readers (so for blind people)
            aria-label={`Delete ${item.item}`}
        />
    </li>
  )
}

export default LineItem
