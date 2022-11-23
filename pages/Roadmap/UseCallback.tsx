import React, { useState, useMemo, memo, useCallback } from 'react';

//useCallback คือการ Cache Function ไม่ ถูกเรียกครั้งแรกเมื่อมีการ Render 
//โดยจะถูกเรียกก็ต่อเมื่อสั่ง Call ฟังก์ชัน และ ค่าใน Array deps มีการเปลี่ยนแปลง โดย Return ออกเป็น Function
function UseCallback() {

    const [counterOne, setcounterOne] = useState(20) //ประกาศ ชุดข้อมูล Array ใส่ค่า counterOne เป็น state เก็บค่าไว้,สร้างฟังก์ชั่น setcounterOne โดยใช้ useState กำหนดเป็น Number
    const [counterTwo, setcounterTwo] = useState(0) //ประกาศ ชุดข้อมูล Array ใส่ค่า counterTwo เป็น state เก็บค่าไว้,สร้างฟังก์ชั่น setcounterTwo โดยใช้ useState กำหนดเป็น Number

    const call = useCallback(() => { //useCallback จำฟังก์ชั่น
        setcounterTwo(counterTwo + 1);
    }, [counterTwo]);

    return ( 
        <div style={{ textAlign: 'center' }}>
            <br />
            <br />
            <br />
            <div>
                <button onClick={() => setcounterOne(counterOne + 1)}>นับ {counterOne}</button> {/* */}
            </div>
            <div>
                {/* <Child onChange={() => setcounterTwo(counterTwo +1)}/> */}
                <Child onChange={call}/>
            </div>
        </div>
    );
}
const Child = memo(() => {
    console.log("render");
    return <div>Child here</div>
});


export default UseCallback;