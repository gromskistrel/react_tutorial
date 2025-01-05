import React from 'react'
import LineItem from './8_LineItem'

const ItemedList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
            /* each item needs to have a key, so although the key is in the item
            it still needs one specifically.*/
            <LineItem
                key = {item.id}
                item = {item}
                handleCheck = {handleCheck}
                handleDelete = {handleDelete}
            />
        ))}
    </ul>   
  )
}

export default ItemedList
