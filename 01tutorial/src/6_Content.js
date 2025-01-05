import React, { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0)

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Žiga'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]); // Now setName is accessible
    };

    const handleClick = () => {
        /* Issue, if the function gets count first, it then prints
        0 even though count has already changed. So only the next
        call will then say 1 */
        setCount(count+1)
        setCount(count+1)
        console.log(count);
    };

    const handleClick2 = () => {
        /* Because the function above received count first
        which is n, both counts increase it by 1
        (both do n+1 and n+1), therefore it wont change to n+2,
        but n+1 */
        console.log(count)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click it!</button>
            <button onClick={handleClick2}>Click it!</button>
        </main>
    );
};

export default Content;
