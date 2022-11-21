import React, { useState, createContext, useContext } from "react";
const Context = () => {

    const [user, setuser] = useState("NNN");
    const UserContext = createContext();

    return (
        <div style={{ textAlign: 'center' }}>
            <UserContext.Provider value={user}>
                <h1>Parent Component</h1>
                <ChildComponent1 />
            </UserContext.Provider>
        </div>
    );

    function ChildComponent1() {
        return (
            <>
                <h3> Child Component 1</h3>
                <ChildComponent2 />
            </>
        );
    }
    function ChildComponent2() {
        return (
            <>
                <h3> Child Component 2 </h3>
                <ChildComponent3 />
            </>
        );
    }
    function ChildComponent3() {
        const user = useContext(UserContext)
        return (
            <>
                <h3> Child Component 3 </h3>
                <p> Hello {user} </p>
            </>
        );
    }
}

export default Context ;

