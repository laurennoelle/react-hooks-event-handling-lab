import React from 'react'

function Keypad() {
    function handleChange() {
        console.log('Entering password...');
    }
  
    return (
    <div>Keypad
        <input type="password" onChange={handleChange} />
    </div>
  )
}

export default Keypad
