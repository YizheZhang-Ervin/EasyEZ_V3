import React from 'react';
import { Layout, Row, Col,Image,Button } from 'antd';
import {TrophyTwoTone} from '@ant-design/icons';
const { Header, Footer, Content } = Layout;
const div1Style = {
    textAlign:'center',
    height:'50em'
}
const div2Style={
    textAlign:'center',
    height:'20em',
    backgroundColor:'#fff'
}
const div3Style = {
    textAlign:'center',
    height:'40em',
    paddingTop:'5em'
}
const div4Style={
    textAlign:'center',
    height:'40em',
    backgroundColor:'#fff'
}
const div5Style = {
    textAlign:'center',
    height:'40em'
}
const div6Style={
    textAlign:'center',
    height:'40em',
    backgroundColor:'#fff',
    paddingTop:'5em'
}
const div7Style = {
    textAlign:'center',
    height:'70em',
    paddingTop:'5em'
}
const div8Style={
    textAlign:'center',
    height:'40em',
    backgroundColor:'#fff',
    paddingTop:'5em'
}

const frameStyle1 = {top:'64px',border: "none",position:'fixed',display:'block'};
const frameStyle2 = {display:'none'};

class ScreenTime extends React.Component {
    state={
        divStyle:{
            fontFamily:'cursive',
            display:this.props.stShow,
            backgroundColor:'beige',
            height:window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight,
        },
        countFrame:true,
        frameStyle:frameStyle2
    }
    
    changeFrame(){
        this.setState({
            frameStyle:(this.state.countFrame===false)?frameStyle2:frameStyle1,
            countFrame:!this.state.countFrame
        })
    }

    render() {
        return (
            <div style={this.state.divStyle} className>
                <Layout>
                    {/* header */}
                    <Header style={{position:'fixed',width:'100%'}}>
                        <Button onClick={()=>this.changeFrame()} 
                        ghost size='large' style={{float:'left',height:'64px',border:'none'}}>Prototype</Button>
                        Screen Time App
                    </Header>
                    {/* content */}
                    <Content>
                        {/* iframe */}
                        <iframe title='phone' style={this.state.frameStyle} width="300" height="700" 
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYsboooRylBRXw6cDIpsI8L%2FScreen-Time-Manager%3Fnode-id%3D14%253A1227%26scaling%3Dscale-down">
                        </iframe>
                        {/* project */}
                        <div style={div1Style}>
                            <Row align='middle' style={{height:'100%'}}>
                                <Col span={12} offset={6}>
                                <h1 style={{fontSize:'4em'}}>Screen Time</h1>
                                <h1>A mobile app which helps users efficiently manage their screen time.</h1>
                                </Col>
                            </Row>
                        </div>
                        {/* user problem */}
                        <div style={div2Style}>
                            <Row align='middle' style={{height:'100%'}}>
                                <Col span={12} offset={6}>
                                <h1 style={{fontSize:'2em'}}>The User Problems</h1>
                                <h1>User need an app to manage their screen time effectively.</h1>
                                </Col>
                            </Row>
                        </div>
                        {/* steps to solve problem */}
                        <div style={div3Style}>
                            <Row align='middle'>
                                <Col span={12} offset={6}>
                                <h1 style={{fontSize:'2em'}}>Steps Taken to Solve Problem</h1>
                                </Col>
                            </Row>
                            <Row align='middle'>
                                <Col span={11} style={{textAlign:'right',marginRight:'2%'}}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <h1 style={{fontSize:'2em'}}>User Interviews</h1>
                                    <p style={{width:'70%'}}>Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more
                                    </p>
                                </Col>
                            </Row>
                            <Row align='middle'>
                                <Col span={11} style={{textAlign:'right',marginRight:'2%'}}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <h1 style={{fontSize:'2em'}}>Pioritizing Pain Points</h1>
                                    <p style={{width:'70%'}}>Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        {/* technique A */}
                        <div style={div4Style}>
                            <Row align='middle' style={{height:'100%'}}>
                                <Col span={12} offset={6}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                    <h1>Technique A</h1>
                                    <p>Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        {/* technique B */}
                        <div style={div5Style}>
                            <Row align='middle' style={{height:'100%'}}>
                                <Col span={12} offset={6}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                    <h1>Technique B</h1>
                                    <p>Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more
                                    </p>
                                </Col>
                            </Row>
                        </div>
                        {/* prototypes */}
                        <div style={div6Style}>
                            <Row align='middle'>
                                <Col span={12} offset={6}>
                                <h1 style={{fontSize:'2em'}}>High Fidelity Prototypes</h1>
                                </Col>
                            </Row>
                            <Row align='middle' justify="space-around">
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <p style={{width:'70%',float:'right'}}>
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                    </p>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <p style={{width:'70%'}}>
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                    </p>
                                </Col>
                            </Row>
                            <Row align='middle' justify="space-around">
                                <Col span={5}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                </Col>
                                <Col span={5}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                </Col>
                                <Col span={5}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                </Col>
                                <Col span={5}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                </Col>
                            </Row>
                        </div>
                        {/* user Testing */}
                        <div style={div7Style}>
                            <Row align='middle'>
                                <Col span={12} offset={6}>
                                <h1 style={{fontSize:'2em'}}>User Testing</h1>
                                </Col>
                            </Row>
                            <Row align='middle'>
                                <Col span={11} style={{textAlign:'right',marginRight:'2%'}}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <h1 style={{fontSize:'2em'}}>Test Preparation</h1>
                                    <p style={{width:'70%'}}>Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more
                                    </p>
                                </Col>
                            </Row>
                            <Row align='middle'>
                                <Col span={11} style={{textAlign:'right',marginRight:'2%'}}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <h1 style={{fontSize:'2em'}}>Running Usability Tests</h1>
                                    <p style={{width:'70%'}}>Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more
                                    </p>
                                </Col>
                            </Row>
                            <Row align='middle'>
                                <Col span={11} style={{textAlign:'right',marginRight:'2%'}}>
                                    <h1 style={{fontSize:'2em'}}>Usability Results</h1>
                                    <p style={{width:'70%',float:'right'}}>Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more
                                    </p>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                </Col>
                            </Row>
                        </div>
                        {/* conclusion */}
                        <div style={div8Style}>
                            <Row align='middle'>
                                <Col span={12} offset={6}>
                                <h1 style={{fontSize:'2em'}}>Conclusion</h1>
                                </Col>
                            </Row>
                            <Row align='middle' justify="space-around">
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <p style={{width:'70%',float:'right'}}>Avenir Light is a clean and stylish font favored by designers. It's easy on the eyes and a great go to font for titles, paragraphs & more.</p>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <p style={{width:'70%'}}>Avenir Light is a clean and stylish font favored by designers. It's easy on the eyes and a great go to font for titles, paragraphs & more.</p>
                                </Col>
                            </Row>
                            <br /><br />
                            <Row align='middle'>
                                <Col span={11} style={{textAlign:'right',marginRight:'2%'}}>
                                    <Image src={<TrophyTwoTone />}></Image>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <p>
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                        Avenir Light is a clean and stylish font favored by designers. 
                                        It's easy on the eyes and a great go to font for titles, paragraphs & more.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                    {/* footer */}
                    <Footer style={{backgroundColor:'rgba(20,32,68,1)',color:'#fff'}}>Designed By Yizhe Zhang</Footer>
                </Layout>
            </div>
        )
    }
}

export default ScreenTime;