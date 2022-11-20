import React from "react";
//Component life Cycle คือเรื่องของการดักจับ Event เพื่อเปลี่ยนแปลงค่า ซึ่งจะมี method ต่างๆ ดักจับ Event ที่เกิดขึ้น 
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);

        this.state = { data: 0 };
    }
    render() { //เรนเดอร์ คือการเปลี่ยนแปลงหน้าใหม่ทุกครั้ง หากมีการอัพเดตค่าเกิดขึ้น ก็จะมีการเปลี่ยนแปลงโดยที่ไม่ต้องรีเฟรชหน้าใหม่
        return (
            <div style={{ textAlign: 'center' }}>
                <button onClick={() => this.setState({ data: this.state.data + 1 })}>เพิ่ม</button>
                <Con myNumber={this.state.data}></Con>
            </div>
        );
    }
}

class Con extends React.Component {
    constructor(props) { //เป็นการตรวจสอบว่าทำ component นี้เป็นส่วนแรกหรือไม่
        super(props);
            console.log("Component Constructor")
    }
    //Mounting
    componentWillMount() {//เป็นการตรวจสอบว่าจะสร้าง component หรือไม่
        console.log("Component Will Mount");
    }
    componentDidMount() {//เป็นการตรวจสอบว่าสร้าง component แล้ว
        console.log("Component Did Mount");
    }
    //Updating
    componentWillReceiveProps(newProps) {//เป็นการตรวจสอบว่ารอเปลี่ยน component นี้
        console.log("Component Will Receive Props");
    }
    shouldComponentUpdate(newProps, newState) {//เป็นการตรวจสอบว่าควรที่จะอัพเดตค่าหรือไม่ ถ้าใช่คือ true ถ้าไม่ใช่คือ false
        return true; 
    }
    componentWillUpdate(newProps, nextState) {//เป็นการตรวจสอบว่าจะอัพเดต component หรือไม่
        console.log("Component Will Update");
    }
    componentDidUpdate(newProps, nextState) {//เป็นการตรวจสอบว่าอัพเดต component แล้ว
        console.log("Component Did Update");
    }
    //Unmounted
    componentWillUnmount() {//เป็นการตรวจสอบว่าทำลาย component แล้ว
        console.log("Component Will Unmount");
    }
    render() {
        return (
            <div>
                <h1>{this.props.myNumber} By Component Life Cycle</h1>
            </div>
        );
    }
}


export default LifeCycle;

