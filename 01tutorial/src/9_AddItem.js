import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {useRef} from 'react';


const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  // a hook mostly used for which component is in focus
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input
            autoFocus
            /* This sets the .current reference here, so after the click happens it focuses this */
            ref = {inputRef}
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            value = {newItem}
            onChange = {(e) => setNewItem(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Item'
            /* because we set the ref on the input, this basically means this
            document.getElementById('addItem').focus() */
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem
