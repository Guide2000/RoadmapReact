import React, { useState, useReducer } from 'react';
 
const initial = [
    {
        id: 1,
        title: "base 1",
        complete: false
    },
    {
        id: 2,
        title: "base 2",
        complete: false
    }
]

const reducer = (state, action) => { // useReducer จัดการ State
    switch (action.type) {
        case "complate":
            return state.map((base) => {
                if (base.id === action.id) {
                    return { ...base, complate: !base.complate }
                } else {
                    return base;
                }
            })
        default:
            return state;
    }
}


const UseReducer = () => {
    const [base, dispatch] = useReducer(reducer, initial);
    const handleComplete = (base) => {
        dispatch({ type: "complate", id: base.id });
    }
    console.log(base)

    return (
        <div style={{ textAlign: 'center' }}>
            {base.map((base) => (
                <div key={base.id}>
                    <input type="checkbox" checked={base.complate} onChange={() => handleComplete(base)} />
                    {base.title}
                </div>
            ))}
        </div>
    );
}

export default UseReducer;