import React from "react";
import Person from "./Person"
//List คือ ข้อมูลที่จัดเป็นลำดับ
function NameList() {
    // const names = ['g by List', 's by List', 'e by List']
    // const nameList = names.map(name => <h1>{name}</h1>)
    const persons = [  // Array เก็บค่า
        { //obj ที่ 1 
            id: 1, 
            name: 'R15',
            age: 155,
            skill: 'sound'
        },
        { //obj ที่ 2
            id: 2,
            name: 'CBR150',
            age: 149,
            skill: 'ABS'
        },
        { //obj ที่ 3
            id: 3,
            name: 'zx150',
            age: 147,
            skill: 'ABS'
        }
    ]
    // const personList = persons.map(person => <Person key = {person.id} person={person} />)
    const personList = persons.map(person => <Person key={person.id} person={person} />) // การใช้ Key เป็นการบ่งบอกข้อมูล List ต่างๆ ให้มีความแตกต่างตามลำดับ
    return (
        // <div style={{ textAlign: 'center' }}>
        //     {/*  <h1>{names [0]}</h1>
        //      <h1>{names [1]}</h1>
        //      <h1>{names [2]}</h1>  */}
        //     {nameList}
        // </div>
        <div style={{ textAlign: 'center' }}>{personList}</div>
    );
}

export default NameList; 