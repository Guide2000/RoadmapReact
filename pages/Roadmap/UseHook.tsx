import React, { useEffect, useState } from "react";

const UseHook = () => {
    const [age, setage] = useState(1)
    const [name, setname] = useState("Guide");
    const [data, setData] = useState([]); // Use State เก็บ State ข้อมูล

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${age}`)
            .then(res => res.json())
            .then(data => setData(data));
        // console.log(age,'By useEffect');
        console.log(data);
    }, [age]);

    return (
        <div style={{ textAlign: 'center' }}>
            <p>My name {name} I am {age -1} year old. By useState</p>
            <button onClick={() => setage(age - 1)}>click for Decrease age</button>
            <button onClick={() => setname("Natthamongkhon")}>click for Change Name</button>
            <button onClick={() => setage(age + 1)}>click for Increase age</button>
        </div>
    );
}

export default UseHook;

