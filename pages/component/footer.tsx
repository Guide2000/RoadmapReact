
import { Layout, Menu, Button, Dropdown, Space } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import Inde from '../index'
//session local storage ลองงงงงง

const { Footer } = Layout;

interface IProps { //สร้าง interface 
  name: string; //สร้างตัวแปร name เก็บค่าเป็น String
  fff: string;
}

export enum IDrop { //สร้าง Enum 
  one = "ที่ 1", //สร้างตัวแปร one กำหนดค่า string 
  two = "ที่ 2",
  three = "ที่ 3",
}

const Ft = ({ name, fff }: IProps) => {
const [Select, setSelect] = useState(""); //ดึงไปใส่ Index 

  const items: MenuProps["items"] = [
    {
      label: IDrop.one,
      key: IDrop.one,
    },
    {
      label: IDrop.two,
      key: IDrop.two,
    },
    {
      label: IDrop.three,
      key: IDrop.three,
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    console.log("Select : ", e);
    setSelect(e.key);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

function setData() {
    let obj = { Select }
    // localStorage.setItem('mydata', JSON.stringify(obj)); 
    sessionStorage.setItem('mySessionStorageData', JSON.stringify(obj)); // Save data to sessionStorage
  }
  
 function getData(){
    let data = sessionStorage.getItem('mySessionStorageData'); // Get saved data from sessionStorage
    data = JSON.parse(data);
    console.log(data.Select)
  }

  // const Ft = ( {name} : IProps ) => { 1 วิธี้นี้ ประกาศตัวแปรแล้ว ดึงค่าจาก Property (name) มาจาก interface (IProps) เพื่อรับค่าได้เลย 
  //แต่หากมีตัวแปร Property มากกว่า 1 ค่า ตัวแปร Property ตัวแรก จะถูกกำหนดค่าเป็น any *แก้กกกกกก

  //แตกต่างยังไง 

  // const Ft = ( props : IProps ) => {2 วิธีนี้ ประกาศตัวแปรแล้วสร้าง props จาก interface (IProps) จากนั้นกำหนดค่า Property เพื่อรับค่า 
  // แต่ต้องแทนค่า props โดยการนำ Property จาก interface (IProps)
  //   const {name} = props //นำค่า Property (name) มีค่าเท่ากับ props 

  // const { name, fff } = props

  //session local storage ลองงงงงง

  return (

    <Footer style={{ textAlign: 'center' }} >

      <p style={{ textAlign: 'center' }}> {name} {fff} {Select}</p>
<div>
  <button onClick={ () => setData()} >set ตัวเลือก</button>
  <button onClick={ () => getData()} >get ข้อมูล</button>
</div>



      <Dropdown menu={menuProps} >
        <Button>
          <Space>
            กรุณาเลือกตัวเลือก
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>

    </Footer>
  );
};

// export default function see (){
//   return (
//     {Select}
//   );
// };

//export ยังไงวะ!!!
export default Ft;

//ให้ใช้ Enum ทำเป็น dropdown ให้อยู่ใน Footer แสดงในหน้า index  test by {name} {Select}
//เรียงลำดับความสำคัญ (ยังไงวะ!)