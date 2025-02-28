import React from 'react';
import ItemList from './8_ItemedList'

const Content = ({items, handleCheck, handleDelete}) => {

    return (
        // This is a Fragment, so it says that this is within the (main) element 
        <>
            {items.length ? (
                <ItemList
                    items = {items}
                    handleCheck ={handleCheck}
                    handleDelete = {handleDelete}
                />
            ) : (
                <p style={{
                    marginTop: '2rem'
                }}>Your list is empty</p>
            )}
        </>
    );
};

export default Content;
