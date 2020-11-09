import React from 'react';
import { Layout, Row, Col,Image,Button,Carousel } from 'antd';
import empathyMap from '../../static/img/projects/screenTime/empathyMap.png';
import priorHierarchy from '../../static/img/projects/screenTime/priorHierarchy.png';
import sketch from '../../static/img/projects/screenTime/sketch.png';
import wireframe from '../../static/img/projects/screenTime/wireframe.png';
import wireframe2 from '../../static/img/projects/screenTime/wireframe2.png';
import prototype from '../../static/img/projects/screenTime/prototype.png';
import ut1 from '../../static/img/projects/screenTime/usabilityTesting_prepare.png';
import ut2 from '../../static/img/projects/screenTime/usabilityTesting_prepare2.png';
import bluesky from '../../static/img/projects/screenTime/bluesky.jpg';
import usabilityTestingResult from '../../static/img/projects/screenTime/usabilityTestingResult.png';

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
        svg:{
            display:(window.innerWidth<1000|| document.documentElement.clientWidth<1000|| document.body.clientWidth<1000)?'none':'block'
        },
        countFrame:true,
        frameStyle:frameStyle2
    }
    
    changeFrame(){
        this.setState({
            frameStyle:(this.state.countFrame===false)?frameStyle2:frameStyle1,
            countFrame:!this.state.countFrame
        })
        document.getElementById('phone').src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYsboooRylBRXw6cDIpsI8L%2FScreen-Time-Manager%3Fnode-id%3D206%253A731%26scaling%3Dscale-down';
        
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
                        <div style={this.state.svg}>
                            {/* right logo */}
                            <div style={{position:'absolute',top:'160px',right:'64px'}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="700" height="800" version="1.1">
                                        <g transform="translate(20,20)">
                                            <svg width="338" height="400" viewBox="0 0 188 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M160.157 26.7304C170.128 38.4782 176.48 53.4448 177.436 69.794L174.442 69.9241C174.526 71.3588 174.566 72.8051 174.562 74.2615C174.559 75.7179 174.51 77.1625 174.418 78.5942L177.411 78.8314C176.365 95.1448 169.932 109.882 159.898 121.272L157.634 119.269C155.739 121.421 153.709 123.448 151.559 125.337L153.557 127.605C142.074 137.692 127.286 144.018 111.025 144.763L110.843 141.766C109.412 141.831 107.969 141.852 106.515 141.826C105.062 141.799 103.619 141.727 102.189 141.611L101.99 144.601C85.7348 143.274 70.9828 136.419 59.5563 125.922L61.567 123.726C59.4272 121.761 57.4089 119.661 55.5252 117.442L53.2509 119.363C43.2803 107.616 36.9286 92.649 35.972 76.2998L38.9664 76.1697C38.8824 74.7349 38.8418 73.2887 38.8458 71.8323C38.8498 70.3759 38.8983 68.9313 38.9902 67.4996L35.9968 67.2624C37.0431 50.949 43.4763 36.2113 53.5103 24.8215L55.7738 26.8244C57.6695 24.6726 59.6992 22.6457 61.8496 20.7567L59.8511 18.4891C71.3341 8.40185 86.1223 2.07622 102.383 1.33096L102.565 4.32829C103.996 4.26272 105.439 4.24224 106.893 4.26827C108.347 4.29429 109.789 4.36641 111.22 4.48319L111.419 1.49269C127.673 2.81994 142.425 9.67431 153.852 20.1716L151.841 22.3674C153.981 24.3332 155.999 26.4326 157.883 28.6521L160.157 26.7304Z" fill="black" fillOpacity="0.25" stroke="white" strokeWidth="6" strokeDasharray="10 52"/>
                                                <path d="M164.862 42.6478C159.133 31.7505 150.741 22.646 140.547 16.2683C130.352 9.89054 118.722 6.46921 106.849 6.35524L106.236 76.4827L164.862 42.6478Z" fill="url(#paint0_linear)"/>
                                                <path d="M106.927 73.509L164.771 42.019" stroke="white" strokeWidth="6"/>
                                                <path d="M107.256 73.1243L85.3076 101.109" stroke="white" strokeWidth="6"/>
                                                <path d="M107.238 74.4758L107.331 6.92247" stroke="white" strokeWidth="3" strokeLinejoin="round" strokeDasharray="10 10"/>
                                                <path d="M75.3673 136.451L57.0099 168.914" stroke="black" strokeOpacity="0.25" strokeWidth="10"/>
                                                <line x1="40.7296" y1="98.1658" x2="19.0483" y2="108.092" stroke="black" strokeOpacity="0.25" strokeWidth="10"/>
                                                <line x1="25.9309" y1="106.203" x2="1.69099" y2="62.8824" stroke="coral" strokeOpacity="1" strokeWidth="3"/>
                                                <ellipse cx="83.4023" cy="200.511" rx="19.9992" ry="7.99967" transform="rotate(-76.9144 83.4023 200.511)" fill="black" fillOpacity="0.25"/>
                                                <path d="M159.513 159.287C163.243 156.919 171.065 162.56 176.984 171.886C182.902 181.211 184.676 190.691 180.946 193.058C177.216 195.425 169.394 189.785 163.475 180.459C157.557 171.133 155.783 161.654 159.513 159.287Z" fill="black" fillOpacity="0.25"/>
                                                <path d="M126.759 142L137.183 174.321" stroke="black" strokeOpacity="0.25" strokeWidth="10"/>
                                                <path d="M50.0535 170.669L80.21 188.027" stroke="black" strokeOpacity="0.25" strokeWidth="10"/>
                                                <line x1="159.324" y1="171.999" x2="133.888" y2="180.902" stroke="black" strokeOpacity="0.25" strokeWidth="10"/>
                                                <defs>
                                                <linearGradient id="paint0_linear" x1="189.344" y1="25.6282" x2="107.159" y2="-16.8306" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#747474"/>
                                                <stop offset="0.791667" stopColor="white" stopOpacity="0"/>
                                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                            <animateMotion path="M 338 0 C 138 100 138 100 338 0" dur="5s" repeatCount="indefinite" fill="freeze"/>
                                        </g>
                                    </svg>
                                </div>
                            {/* left logo */}
                            <div style={{position:'absolute',top:'160px',left:'64px'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="700" height="800" version="1.1">
                                    <g transform="translate(20,20)">
                                        <svg width="338" height="400" viewBox="0 0 188 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M27.5428 26.7304C17.5723 38.4782 11.2206 53.4448 10.2639 69.794L13.2583 69.9241C13.1744 71.3588 13.1337 72.8051 13.1377 74.2615C13.1417 75.7179 13.1903 77.1625 13.2821 78.5942L10.2887 78.8314C11.335 95.1448 17.7682 109.882 27.8023 121.272L30.0658 119.269C31.9615 121.421 33.9911 123.448 36.1415 125.337L34.1431 127.605C45.626 137.692 60.4142 144.018 76.6748 144.763L76.8573 141.766C78.288 141.831 79.7309 141.852 81.1848 141.826C82.6387 141.799 84.0813 141.727 85.5115 141.611L85.7105 144.601C101.965 143.274 116.717 136.419 128.144 125.922L126.133 123.726C128.273 121.761 130.291 119.661 132.175 117.442L134.449 119.363C144.42 107.616 150.772 92.649 151.728 76.2998L148.734 76.1697C148.818 74.7349 148.858 73.2887 148.854 71.8323C148.85 70.3759 148.802 68.9313 148.71 67.4996L151.703 67.2624C150.657 50.949 144.224 36.2113 134.19 24.8215L131.926 26.8244C130.031 24.6726 128.001 22.6457 125.851 20.7567L127.849 18.4891C116.366 8.40185 101.578 2.07622 85.3173 1.33096L85.1348 4.32829C83.7041 4.26272 82.2612 4.24224 80.8073 4.26827C79.3535 4.29429 77.9108 4.36641 76.4806 4.48319L76.2816 1.49269C60.0267 2.81994 45.2747 9.67431 33.8483 20.1716L35.859 22.3674C33.7191 24.3332 31.7008 26.4326 29.8171 28.6521L27.5428 26.7304Z" fill="black" fillOpacity="0.25" stroke="white" strokeWidth="6" strokeDasharray="10 52"/>
                                                <path d="M22.8384 42.6478C28.5668 31.7505 36.9587 22.646 47.1533 16.2683C57.3479 9.89054 68.9782 6.46921 80.8511 6.35524L81.4642 76.4827L22.8384 42.6478Z" fill="url(#paint0_linear)"/>
                                                <path d="M80.7729 73.509L22.9288 42.019" stroke="white" strokeWidth="6"/>
                                                <path d="M80.4438 73.1243L102.393 101.109" stroke="white" strokeWidth="6"/>
                                                <path d="M80.4626 74.4758L80.3693 6.92247" stroke="white" strokeWidth="3" strokeLinejoin="round" strokeDasharray="10 10"/>
                                                <path d="M112.333 136.451L130.69 168.914" stroke="black" strokeOpacity="0.25" strokeWidth="10"/>
                                                <line y1="-5" x2="23.8456" y2="-5" transform="matrix(0.909237 0.416278 0.416278 -0.909237 149.052 93.6196)" stroke="black" strokeOpacity="0.25" strokeWidth="10"/>
                                                <line y1="-1.5" x2="49.6411" y2="-1.5" transform="matrix(0.488302 -0.872675 -0.872675 -0.488302 160.46 105.47)" stroke="deepskyblue" strokeOpacity="1" strokeWidth="3"/>
                                                <ellipse rx="19.9992" ry="7.99967" transform="matrix(-0.226407 -0.974033 -0.974033 0.226407 104.298 200.511)" fill="black" fillOpacity="0.25"/>
                                                <path d="M28.187 159.287C24.4567 156.919 16.6349 162.56 10.7164 171.886C4.79789 181.211 3.024 190.691 6.75428 193.058C10.4846 195.425 18.3064 189.785 24.2249 180.459C30.1434 171.133 31.9173 161.654 28.187 159.287Z" fill="black" fillOpacity="0.25"/>
                                                <path d="M60.9412 142L50.5168 174.321" stroke="black" strokeOpacity="0.25" strokeWidth="10"/>
                                                <path d="M137.647 170.669L107.49 188.027" stroke="black" strokeOpacity="0.25" strokeWidth="10"/>
                                                <line y1="-5" x2="26.9496" y2="-5" transform="matrix(0.943855 0.330361 0.330361 -0.943855 30.0277 167.28)" stroke="black" strokeOpacity="0.25" strokeWidth="10"/>
                                                <defs>
                                                <linearGradient id="paint0_linear" x1="-1.64403" y1="25.6282" x2="80.5408" y2="-16.8306" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#747474"/>
                                                <stop offset="0.791667" stopColor="white" stopOpacity="0"/>
                                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                                                </linearGradient>
                                                </defs>
                                        </svg>
                                        <animateMotion path="M 0 0 C 200 100 200 100 0 0" dur="5s" repeatCount="indefinite" fill="freeze"/>
                                    </g>
                                </svg>
                            </div>
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
                            <Row align='top' justify="space-around">
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
                                    <ul style={{width:'70%',float:'right',textAlign:'left'}}>
                                        <li>The test results show that the main process and functional design of the prototype are fine</li>
                                        <li>But there are also some shortcomings which can be imporved,
                                            such as reducing the number of jump steps between pages and increasing the fast entry,
                                            and some UI can be made more distinct.
                                        </li>
                                    </ul>
                                </Col>
                                <Col span={11} style={{textAlign:'left',marginLeft:'2%'}}>
                                    <Image src={usabilityTestingResult} width='70%'></Image>
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
                            <Row align='top' justify="space-around">
                                <Col span={10}>
                                    <p style={{width:'70%'}}><strong>Advantages</strong></p>
                                    <ul style={textLeft}>
                                        <li>Fulfill the requirements at all levels (Help decision / Encouragement / Supervision / Limit time / Notification).</li>
                                        <li>Fill the gap of the current market(Only have lock screen single type app, no battle type app).</li>
                                    </ul>
                                </Col>
                                <Col span={10}>
                                    <p style={{width:'70%'}}><strong>Disadvantages</strong></p>
                                    <ul style={textLeft}>
                                        <li>This app can continue to improve and create more effective encouragement module</li>
                                        <q>For example, by cooperating with the e-commerce platform,
                                            users can use lock screen points to exchange coupons.
                                        </q>
                                        <br />
                                        <q>And another way is to use time exchange interest business model,
                                            let user deposit a certain amount of principal,
                                            and the longer the user lock screen, the more interest they will have.
                                        </q>
                                    </ul>   
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