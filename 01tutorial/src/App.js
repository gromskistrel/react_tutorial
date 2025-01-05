import React, { useState } from 'react';
import { CiTextAlignCenter } from 'react-icons/ci';

function App() {
    const [color, setColor] = useState('');

    const appTestStyle = {
        display: "grid", // Use grid
        gridTemplateRows: "auto auto", // Define two rows for the stacked items
        justifyContent: "center", // Center items horizontally
        alignContent: "center", // Center the grid vertically
        height: "100vh", // Full viewport height for vertical centering
        gap: "20px", // Add spacing between the grid items
    };

    const headerStyle = {
        backgroundColor: color,
        width: "200px",
        height: "200px",
        borderRadius: '50px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: "1px solid black"
    };

    const inputStyle = {
        width: '200px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    return (
        <div className="AppTest" style={appTestStyle}>
            {color === '' ? (
                <div style={headerStyle}>No Color</div>
            ) : (
                <div className="square" style={headerStyle}></div>
            )}
            <form className="changeColor" onSubmit={(e) => e.preventDefault()}>
                <input
                    id="search"
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    style={inputStyle}
                />
            </form>
        </div>
    );
}

export default App;
