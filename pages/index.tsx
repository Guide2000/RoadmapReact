
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, Dropdown, Space, Select } from 'antd';
import type { MenuProps } from "antd";
import React, { useState, useEffect, Component } from 'react';
import 'antd/dist/antd.css';
import sider from './component/sider'
import header from './component/header'
import content from './component/content'
import Foo from './component/footer' //ตั้งชื่อเต็มไปเลย 
import { IDrop } from './component/footer'

//Roadmap 
import World from "./Roadmap/ClassComponent"; //เพิ่ม World จาก "./component/HelloWorld"
import Venus from "./Roadmap/FunctionalComponent"
import Props from "./Roadmap/Props"
import State from "./Roadmap/State"
import Event from "./Roadmap/Event"
import LifeCycle from "./Roadmap/Component_Lifecycle";
import NameList from "./Roadmap/List";
import Use from "./Roadmap/UseHook";

const Ind = () => {
  const [Select, setSelect] = useState(""); //ใส่ค่า string 
  // const items: MenuProps["items"] = [
  //   {
  //     label: IDrop.one,
  //     key: IDrop.one,
  //   },
  //   {
  //     label: IDrop.two,
  //     key: IDrop.two,
  //   },
  //   {
  //     label: IDrop.three,
  //     key: IDrop.three,
  //   },
  // ];

  // const handleMenuClick: MenuProps["onClick"] = (e) => {
  //   console.log("Select : ", e);
  //   setSelect(e.key);
  // };

  // const menuProps = {
  //   items,
  //   onClick: handleMenuClick,
  // };

  function getData() {
    let data = sessionStorage.getItem('mySessionStorageData');
    data = JSON.parse(data);
    console.log(data.Select)
    setSelect(data.Select)
  }

  const { Header, Content, Footer, Sider } = Layout;

  return (

    <Layout style={{ minHeight: '100vh' }}>
      {sider(0)}
      <Layout className="site-layout">
        {header()}
        {content()}

        <p style={{ textAlign: 'center' }}>ขึ้นว่า {Select}</p>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => getData()} > get ข้อมูล</button>
        </div>

        <World />
        
        <div style={{ textAlign: 'center' }}>
        <Venus name="Venus"  />
        </div>

        <div style={{ textAlign: 'center' }}>
        <Props name="Props"  />
        <Props name={2}  />
        </div>

        <State />

        <Event />

        {/* <LifeCycle /> */}

        <NameList />

        <Use />
       
        <Foo name="guide" fff="dd" />
      </Layout>
    </Layout>

  );
};

export default Ind;

// เอา dropdown ไปไว้ footer แล้วมีตัวเลือกโดยดึงข้อมูลจาก Enum ไปแสดงผลที่ index 
// ใส่ค่าเป็นแท็ก ดึงจาก Component 
// ตั้งชื่อ Component เริ่มต้นด้วยพิมพ์ใหญ่
