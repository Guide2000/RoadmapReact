import React from "react";

function Event() {
    const shoot = () => {
        alert("Event เริ่มแล้ว");
        console.log("Event เริ่มแล้ว");
    }
 
    return (
        <div style={{ textAlign: 'center' }}>
        <button onClick={shoot}>กดเพื่อดู Event</button>
        </div>
    );
}

export default Event;