import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';
export default function head() {

  function logOut() { //ฟังก์ชั่น logout 
    liff.logout()
  }

  const { Header } = Layout;

  return (
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0, textAlign: 'right' }} >
        <Button //ปุ่น logout 
          type="primary"
          onClick={logOut} //เรียกใช้ฟังก์ชั่น Logout 
        >
          Log out
        </Button>
      </Header>
    </Layout>
  );
};
