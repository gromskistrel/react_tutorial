import React, { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa'

// imported react-icons (installed first npm install...)
// so I have fa (font awesomb)
const Content = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]);

    const handleCheck = (id) => {
        //without map you would create a new array like
        // const listItems = [...items]
        // a bit ugly, but for item it changed the checked if id is the same
        //otherwise returns the same item
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item)
        setItems(listItems);
        // this would save, so you can reload and it remains the same
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

    const handleDelete = (id) => {
        //filters the arrays to not the same id
        const listItmes = items.filter((item) => item.id !== id)
        setItems(listItmes)
        localStorage.setItem('shoppinglist', JSON.stringify(listItmes))
    }

    return (
        <main>
            {/* this says if it has a length, no need for > 0 */}
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className = "item" key={item.id}>
                            <input
                                type = "checkbox"
                                /* if not for an anonymous function, it will automatically apply it  */
                                onChange = {() => handleCheck(item.id)}
                                checked = {item.checked}
                            />
                            <label
                                // if item is checked
                                style= {(item.checked) ? {textDecoration: 'line-through'}: null}
                                onDoubleClick = {() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt 
                            onClick={() => handleDelete(item.id)}
                                role="button" 
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>   
            ) : (
                <p style={{
                    marginTop: '2rem'
                }}>Your list is empty</p>
            )}
        </main>
    );
};

export default Content;
