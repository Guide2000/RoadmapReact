import React, { useEffect, useState } from "react";

const UseHook = () => {
    const [name, setname] = useState("Guide");

    const [age, setage] = useState(25);

    const handleClick = () => {
        setname('Natthamongkhon');
        setage(20);
    }

    useEffect(() => {
        console.log(name, age, 'By useEffect');
    }, [name, age]);

    return (
        <div style={{ textAlign: 'center' }}>
            <p>My name {name} I am {age} year old. By useState</p>
            <button onClick={handleClick}>click for Change</button>
        </div>
    );
}
export default UseHook;

