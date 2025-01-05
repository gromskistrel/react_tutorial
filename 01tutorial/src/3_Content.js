import React from 'react'

const handleNameChange = () => {
    const names = ['bob', 'Kevin', 'Žiga'];
    const int = Math.floor(Math.random()*3)
    return names[int]
}

const Content = () => {
  return (
    <main>
        <p>
            Hello {handleNameChange()}
        </p>
    </main>
  )
}

export default Content
