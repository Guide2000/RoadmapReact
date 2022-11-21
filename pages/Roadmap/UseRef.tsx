import React, { useEffect, useState, useRef } from "react";

const UseRef = () => {
    const [inputValue, setInputValue] = useState("")
    const count = useRef(0); // Use State เก็บ State ข้อมูล

    useEffect(() => {
        count.current = count.current +1;
    })

    console.log(count)

    return (
        <div className='Ref' style={{ textAlign: 'center' }}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>Render Count: {count.current}</h1>
        </div>
    )
}

export default UseRef;

