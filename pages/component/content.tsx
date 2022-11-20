
import { Layout, Image } from 'antd';
import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';

export default function cont() {
  const [profile, setProfile] = useState({
    pictureUrl: "",
    displayName: "",
    userId: "",
    statusMessage: ""
  }) //ประกาศตัวแปร profile, setProfile โดยไม่เปลี่ยนแปลงค่า 
  let liff // ประกาศตัวแปร liff ควรใส่ค่าทุกครั้ง (เป็นไปได้ไม่ควรใส่ค่า any)
  useEffect(() => {
    liff = require('@line/liff') //ให้ค่า liff เรียกใช้ lineliff
    const lineLiff = async () => {
      try {
        await liff.init({ liffId: `${process.env.NEXT_PUBLIC_LIFF_ID}` });
      } catch (error) {
        console.error('liff init error')
      }
      if (!liff.isLoggedIn()) {
        liff.login();
      }
      const lineProflie = await liff.getProfile()
      setProfile(lineProflie)
    }
    lineLiff()
  })

  const { Content } = Layout;

  return (
    <Content style={{ margin: '0 16px' }}>
      <center>
        <br></br>
        <h1>Profile</h1>
        {profile.pictureUrl && <Image
          src={profile.pictureUrl}
          alt={profile.displayName}
          width={500}
          height={500}
        />}<br></br>
        <br></br>
        <h1>UID : {profile.userId}</h1>
        <br></br>
        <h1>Name : {profile.displayName}</h1>
        <br></br>
        <h1>statusMessage : {profile.statusMessage}</h1>
        <br></br>
      </center>
    </Content>
  );
};



