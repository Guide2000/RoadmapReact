import React, { useState, useMemo, useCallback } from 'react';

//useMemo คือการ Cache ค่า Value ถูกเรียกครั้งแรกเมื่อมีการ Render และครั้งต่อไปเมื่อมีการ Re-Render 
//และ ค่าใน Array deps มีการเปลี่ยนแปลง โดย Return ออกเป็นค่า Value
const fibo = (n) => {
    return n <= 0 ? 0 : n === 1 ? 1 : fibo(n - 1) + fibo(n - 2); //สูตร Fibonacci
}
function UseMemo() {

    const [counterOne, setcounterOne] = useState(20) //ประกาศ ชุดข้อมูล Array ใส่ค่า counterOne เป็น state เก็บค่าไว้,สร้างฟังก์ชั่น setcounterOne โดยใช้ useState กำหนดเป็น Number
    const [counterTwo, setcounterTwo] = useState(0) //ประกาศ ชุดข้อมูล Array ใส่ค่า counterTwo เป็น state เก็บค่าไว้,สร้างฟังก์ชั่น setcounterTwo โดยใช้ useState กำหนดเป็น Number

    const f = useMemo(() => { //useMemo จำค่าเดิมที่เคยทำไว้ 
        return fibo(counterOne); // เอาตัวแปร fibo ใส่ค่า counterOne ส่งค่าไปยัง n
    }, [counterOne]);

    // const f = fibo(counterOne); //ไม่ใช้ useMemo

    return ( 
        <div style={{ textAlign: 'center' }}>
            <br />
            <br />
            <br />
            <p>fibo {f}</p> {/*แสดงค่า F */}
            <br />
            <br />
            <div>
                <button onClick={() => setcounterOne(counterOne + 1)}>นับ {counterOne}</button> {/* */}
            </div>

            <div>
                <button onClick={() => setcounterTwo(counterTwo + 1)}>นับ {counterTwo}</button> {/*หากไม่ใช้ useMemo จะ Re-render ใหม่*/}
            </div>
        </div>
    );
}

export default UseMemo;