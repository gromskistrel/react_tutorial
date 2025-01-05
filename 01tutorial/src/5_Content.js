import React from 'react'

const handleNameChange = () => {
    const names = ['bob', 'Kevin', 'Žiga'];
    const int = Math.floor(Math.random()*3)
    return names[int]
};

const handleClick = () => {
  console.log("You clicked it");
}

const handleClick2 = (name) => {
  console.log(`${name} was clicked`);
}

const handleClick3 = (e) => {
  console.log(e.target.innerText);
}

const Content = () => {
  return (
    <main>
        <p onDoubleClick = {handleClick}>
            Hello {handleNameChange()}
        </p>
        {/* is there is a () after a function for example 
        (handleClick()), it will immediately call the function when
        the page loads */}
        <button onClick = {handleClick}>Click It</button>
        {/* This is an anonymous function, to pass a parameter,
        this is done, so it doesn't immediately call the function
        when the page is loaded */}
        <button onClick = {() => handleClick2(handleNameChange)}>Click It</button>
        <button onClick = {(e) => handleClick3(e)}>Click It</button>
    </main>
  )
}

export default Content
