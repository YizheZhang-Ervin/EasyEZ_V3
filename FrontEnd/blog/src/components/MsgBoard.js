import React from 'react';
import axios from 'axios';
import { IdcardOutlined, PlusOutlined } from '@ant-design/icons';
import { List, Drawer, Form, Button, Col, Row, Input, message } from 'antd';

// const msgApi = 'http://127.0.0.1:8000';

const headers = {
    'Content-Type': 'application/json',
    'Authorization':'Token df60f1c39d32439a42e481d1733beed4557f6cfb',
}

class MsgBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '',tags:'',msg:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value= event.target.value;
        const name= event.target.name;
        this.setState({ [name]:value });
    }

    handleSubmit(event) {
        this.postValue();
        this.onClose();
        message.success('Your message issued successfully！');
 
    }
    state = {
        msgs: [],
        visible: false
    }

    componentDidMount() {
        this.getValue();
    }

    getValue(){
        axios.get(`/api/msg/`)
            .then(res => {this.setState({msgs: res.data});});
    }

    postValue(){
        axios.post(`/api/msg/`,{"name":this.state.name,"tags":this.state.tags,"content":this.state.msg},{headers:headers})
            .then(this.getValue());
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        return (
            <div style={{ display: this.props.msgboardShow }}>
                <>
                    <Button style={{ margin: '2%' }} type="ghost" onClick={this.showDrawer}><PlusOutlined /> New message</Button>
                    <Drawer title="Create a message" height="70%" onClose={this.onClose} visible={this.state.visible} bodyStyle={{ paddingBottom: 80 }}
                        placement='bottom'
                        footer={
                            <div style={{ textAlign: 'right' }}>
                                <Button onClick={this.onClose} style={{ marginRight: 8 }}>Cancel</Button>
                                <Button onClick={this.handleSubmit} type="primary">Submit</Button>
                            </div>
                        }
                    >
                        <Form layout="vertical" hideRequiredMark>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter name' }]} >
                                        <Input name='name' placeholder="Please enter name" onChange={this.handleChange} value={this.state.name}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item name="tags" label="tags" rules={[{ required: true, message: 'please enter tags' },]}>
                                        <Input name='tags' rows={4} placeholder="please enter tags" onChange={this.handleChange} value={this.state.tags}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item name="description" label="Description" rules={[{ required: true, message: 'please enter message' },]}>
                                        <Input.TextArea name='msg' rows={4} placeholder="please enter message" onChange={this.handleChange} value={this.state.msg} />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Drawer>
                </>
                <List
                    itemLayout="vertical" size="large" pagination={{ position:'both', pageSize: 6 }}
                    dataSource={this.state.msgs} 
                    renderItem={item => (
                        <List.Item key={item.time} actions='' extra={<div>{item.time.substr(0, 10)},{item.time.substr(11, 8)}</div>}>
                            <List.Item.Meta avatar={<IdcardOutlined />} title={item.name} description={item.tags} />{item.content}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default MsgBoard;