import React, { useEffect, useState } from "react";
import Image from "next/image";

const UseHook = () => {
    const [age, setage] = useState(1)
    // const [name, setname] = useState("Guide");
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
            <p>My name {data.name} I am {age - 1} year old. By useState</p>
            <br />

            <Image src={data.sprites} width={500} height={500} alt={data.front_default} />

            <br />
            <br />
            <button onClick={() => setage(age - 1)}>click for Decrease age</button>
            {/* <button onClick={() => setname("Natthamongkhon")}>click for Change Name</button> */}
            <button onClick={() => setage(age + 1)}>click for Increase age</button>
        </div>
    );
}

export default UseHook;

