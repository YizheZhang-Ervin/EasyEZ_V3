import React from 'react';
import { Layout, Row, Col,Image,Button,Carousel } from 'antd';
import {TrophyTwoTone} from '@ant-design/icons';
import empathyMap from '../../static/img/projects/screenTime/empathyMap.png';
import priorHierarchy from '../../static/img/projects/screenTime/priorHierarchy.png';
import sketch from '../../static/img/projects/screenTime/sketch.png';
import wireframe from '../../static/img/projects/screenTime/wireframe.png';
import wireframe2 from '../../static/img/projects/screenTime/wireframe2.png';
import prototype from '../../static/img/projects/screenTime/prototype.png';
import ut1 from '../../static/img/projects/screenTime/usabilityTesting_prepare.png';
import ut2 from '../../static/img/projects/screenTime/usabilityTesting_prepare2.png';
import bluesky from '../../static/img/projects/screenTime/bluesky.jpg';

const { Header, Footer, Content } = Layout;
const div1Style = {
    textAlign:'center',
    height:'50em',
    backgroundImage:`url(${bluesky})`,
    backgroundSize:'cover'
}
const div2Style={
    textAlign:'center',
    backgroundColor:'#fff',
    paddingTop:'5em',
    paddingBottom:'5em'
}
const div3Style = {
    textAlign:'center',
    paddingTop:'5em',
    paddingBottom:'5em'
}
const div4Style={
    textAlign:'center',
    backgroundColor:'#fff',
    paddingTop:'5em',
    paddingBottom:'5em'
}
const div5Style = {
    textAlign:'center',
    paddingTop:'5em',
    paddingBottom:'5em'
}
const div6Style={
    textAlign:'center',
    backgroundColor:'#fff',
    paddingTop:'5em',
    paddingBottom:'5em'
}
const div7Style = {
    textAlign:'center',
    paddingTop:'5em',
    paddingBottom:'5em'
}
const div8Style={
    textAlign:'center',
    backgroundColor:'#fff',
    paddingTop:'5em',
    paddingBottom:'5em'
}
const textLeft={textAlign:'left'}

const frameStyle1 = {top:'64px',border: "none",position:'fixed',display:'block',zIndex:'10'};
const frameStyle2 = {display:'none'};

class ScreenTime extends React.Component {
    state={
        divStyle:{
            fontFamily:'cursive',
            display:this.props.stShow,
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
        document.getElementById('phone').src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYsboooRylBRXw6cDIpsI8L%2FScreen-Time-Manager%3Fnode-id%3D56%253A655%26scaling%3Dscale-down';
        
    }
    
    render() {
        return (
            <div style={this.state.divStyle}>
                <Layout>
                    {/* header */}
                    <Header style={{position:'fixed',width:'100%',zIndex:'10'}}>
                        <Button onClick={()=>this.changeFrame()} title='App Prototype'
                        ghost size='large' style={{float:'left',height:'64px',border:'none'}}>
                            Prototype
                        </Button>
                    </Header>
                    {/* content */}
                    <Content>
                        {/* iframe */}
                        <iframe id='phone' title='phone' style={this.state.frameStyle} width="300" height="700" allowtransparency="false">
                        </iframe>
                        {/* project */}
                        <div style={div1Style}>
                            <Row align='middle' style={{height:'100%'}}>
                                <Col span={14} offset={5}>
                                <h1 style={{fontSize:'4em'}}>Screen <b>X</b> Time</h1>
                                <h1>Managing screen time by lock screen battle with friends or strangers</h1>
                                </Col>
                            </Row>
                        </div>
                        {/* user problem */}
                        <div style={div2Style}>
                            <Row align='middle' style={{height:'100%'}}>
                                <Col span={12} offset={6}>
                                <h1 style={{fontSize:'2em'}}>The User Problems</h1>
                                <h1 style={textLeft}>Usually, people can't help playing mobile phone due to the attraction of a variety of information, like news, videos, games,etc.
                                Because of this, People often delay or miss events and plans.
                                </h1>
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
                                    <Image src={empathyMap} width='50%'></Image>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <h1 style={{fontSize:'2em'}}>User Interviews</h1>
                                    <ul style={{width:'70%'}}>
                                        <li>Insight1:Student need to control screen time to study hard by supervision</li>
                                        <li>Insight2:Student need motivation to encourage them not playing mobile phone</li>
                                        <li>Insight3:Student need to limit app usage time</li>
                                        <li>Insight4:Working person need time notice</li>
                                        <li>Insight5:Working person need time-saving tools help them make decision</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row align='middle'>
                                <Col span={11} style={{textAlign:'right',marginRight:'2%'}}>
                                    <Image width='70%' src={priorHierarchy}></Image>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <h1 style={{fontSize:'2em'}}>Pioritizing Pain Points</h1>
                                    <ul style={{width:'70%'}}>
                                        <li>Help decision</li>
                                        <li>Encouragement</li>
                                        <li>Supervision</li>
                                        <li>Limit time/Notification</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                        {/* technique A */}
                        <div style={div4Style}>
                            <Row align='middle' style={{height:'100%'}}>
                                <Col span={12} offset={6}>
                                    <h1 style={{fontSize:'2em'}}>Sketch</h1>
                                    <p style={textLeft}>After confirming the needs of users, 
                                        I designed five pain points modules (ten pages in total) by a low cost, fast and simple way - hand sketch.
                                    </p>
                                    <ul style={textLeft}>
                                    <li>Notification: Analysis Module, which will notify users with charts</li>
                                    <li>Limit time: Control Module, which will help user control app usage time</li>
                                    <li>Supervision: Friends Module, which users can battle by comparing lock screen time</li>
                                    <li>Encouragement: My profile Module, which contains my points and rankings</li>
                                    <li>Help decision: Tools Module, which help user make decisions at once</li>
                                    </ul>
                                    <p style={textLeft}>And in this sketch, I mainly focused on page layout, and ignore complex details.</p>
                                    <Image src={sketch} width='70%'></Image>
                                </Col>
                            </Row>
                        </div>
                        {/* technique B */}
                        <div style={div5Style}>
                            <Row align='middle' style={{height:'100%'}}>
                                <Col span={12} offset={6}>
                                    <h1 style={{fontSize:'2em'}}>Wireframes</h1>
                                    <p style={textLeft}>According to the early usability testing of sketch and Wireframes,
                                        I changed some modules which designed by hand sketch.
                                    </p>
                                    <ul style={textLeft}>
                                        <li>Simplified tools module</li>
                                        <li>Merged analysis module and control module into one long screen, which helps reduce user operating steps</li>
                                        <li>Merged tools module into analysis module,it brought pleasure to serious interface, break the conventional logic</li>
                                        <li>Added a new lock screen module for single use</li>
                                    </ul>
                                    <p style={textLeft}>Used basic shape and UI components to build a standard grayscale model.</p>
                                    <Carousel autoplay='true'>
                                        <div>
                                        <Image src={wireframe} width='70%'></Image>
                                        </div>
                                        <div>
                                        <Image src={wireframe2} width='70%'></Image>
                                        </div>
                                    </Carousel>
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
                            <Button onClick={()=>this.changeFrame()} type='dashed' title='App Prototype' size='large' style={{color:'black'}}>
                                Try Prototype
                            </Button>
                            <Row align='middle' justify="space-around">
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <p style={{width:'70%',float:'right'}}>
                                        The prototype is made based on the wireframes, including changing color, text, icon.
                                    </p>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <p style={{width:'70%'}}>
                                        The Prototype is a dynamic model, which set navigation between pages and closer to real app than wireframes.
                                    </p>
                                </Col>
                            </Row>
                            <Row align='middle' justify="space-around">
                                <Col span={12}>
                                    <Image src={prototype}></Image>
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
                                    <Image src={ut1} width='70%'></Image>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <h1 style={{fontSize:'2em'}}>Test Preparation</h1>
                                    <p style={{width:'70%'}}>Set several different Scenarios &amp; Tasks</p>
                                    <ul style={textLeft}>
                                        <li>Look at the total/percentage usage time of all apps and restrict the time usage of some apps (Limit Time+Notification)</li> 
                                        <li>Do lock screen battle with your friends and supervise each other (Supervision)</li>                                       
                                        <li>Use the points you win to build buildings and take a look at rankings (Encouragement)</li> 
                                        <li>Use dice or coin to help you make a quick decision (Help decision)</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row align='middle'>
                                <Col span={11} style={{textAlign:'right',marginRight:'2%'}}>
                                    <Image src={ut2} width='70%'></Image>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <h1 style={{fontSize:'2em'}}>Running Usability Tests</h1>
                                    <p style={{width:'70%'}}>
                                        The users performed the task under different scenario and I recorded the screen to observes user's operation logic.
                                        And I adjusted according to the user's feedback.
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
                                    <p style={{width:'70%',float:'right'}}>Fulfill the requirements at all levels.</p>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <p style={{width:'70%'}}>Fill the gap of the current market.</p>
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