import React from 'react';
import { Layout, Row, Col, Image, Button, Carousel, Collapse, Table } from 'antd';
import interviewQs from '../../static/img/projects/screenTime/interviewQs.png';
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
import music_xydm from '../../static/others/xydm.mp3';
import { PlayCircleFilled, CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Header, Footer, Content } = Layout;
const div1Style = {
    textAlign: 'center',
    height: '50em',
    backgroundImage: `url(${bluesky})`,
    backgroundSize: 'cover'
}
const divStyleEven = {
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingTop: '5em',
    paddingBottom: '5em'
}
const divStyleOdd = {
    textAlign: 'center',
    paddingTop: '5em',
    paddingBottom: '5em'
}

const textLeft = { textAlign: 'left' }
const frameStyle1 = { top: '64px', border: "none", position: 'fixed', display: 'block', zIndex: '10' };
const frameStyle2 = { display: 'none' };

class ScreenTime extends React.Component {
    state = {
        divStyle: {
            fontFamily: 'times, Verdana,Helvetica, Arial, sans-serif',
            display: this.props.stShow,
            height: window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight,
        },
        svg: {
            display: (window.innerWidth < 1000 || document.documentElement.clientWidth < 1000 || document.body.clientWidth < 1000) ? 'none' : 'block'
        },
        countFrame: true,
        frameStyle: frameStyle2
    }

    changeFrame() {
        this.setState({
            frameStyle: (this.state.countFrame === false) ? frameStyle2 : frameStyle1,
            countFrame: !this.state.countFrame
        })
        document.getElementById('phone').src = 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYsboooRylBRXw6cDIpsI8L%2FScreen-Time-Manager%3Fnode-id%3D206%253A731%26scaling%3Dscale-down';
    }

    changeMusicStatus() {
        let music = document.getElementById('music');
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    }

    render() {
        const tableColumn = [{ title: 'Module', dataIndex: 'module', key: 'module' },
        { title: 'Sub Module', dataIndex: 'submodule', key: 'submodule' },
        { title: 'User Need / Function', dataIndex: 'need', key: 'need' }];
        const tableData = [{
            key: '1',
            module: 'Home',
            submodule: 'Daily Quotes',
            need: 'Encouragement'
        }, {
            key: '2',
            module: 'Home',
            submodule: 'Charts',
            need: 'Notification'
        }, {
            key: '3',
            module: 'Home',
            submodule: 'Tools',
            need: 'Help decision'

        }, {
            key: '4',
            module: 'Home',
            submodule: 'Limit app usage',
            need: 'Limit time'
        }, {
            key: '5',
            module: 'Control',
            submodule: '-',
            need: 'Limit time'
        }, {
            key: '6',
            module: 'Friends',
            submodule: 'Lock screen battle',
            need: 'supervision'
        }, {
            key: '7',
            module: 'Friends',
            submodule: 'Rankings',
            need: 'Encouragement'
        }, {
            key: '8',
            module: 'Me',
            submodule: 'Building',
            need: 'Encouragement'
        }
        ];
        return (
            <div style={this.state.divStyle}>
                <Layout>
                    {/* header */}
                    <Header style={{ position: 'fixed', width: '100%', zIndex: '10' }}>
                        <Button onClick={() => this.changeFrame()} title='Screen X Time Prototype'
                            ghost size='large' style={{ float: 'left', height: '64px', border: 'none' }}>
                            Prototype
                        </Button>
                        <audio id='music' style={{ display: 'fixed', zIndex: '10' }} src={music_xydm} loop></audio>
                        <Button onClick={() => this.changeMusicStatus()} title='Play/Pause'
                            icon={<PlayCircleFilled spin />} ghost size='large' style={{ border: 'none', height: '64px', float: 'right' }}>
                        </Button>
                    </Header>
                    {/* content */}
                    <Content>
                        {/* iframe */}
                        <iframe id='phone' title='phone' style={this.state.frameStyle} width="300" height="700" allowtransparency="false">
                        </iframe>
                        {/* project */}
                        <div style={div1Style}>
                            <Row align='middle' style={{ height: '100%' }}>
                                <Col span={14} offset={5}>
                                    <h1 style={{ fontSize: '4em' }}>
                                        Screen &nbsp;
                                    <svg width='50' height='114'>
                                            <g transform="translate(0,64)">
                                                <line y2="50" x2="50" y1="0" x1="0" strokeWidth="5" stroke="coral" fill="none" />
                                                <line y2="0" x2="50" y1="50" x1="0" strokeWidth="5" stroke="deepskyblue" fill="none" />
                                            </g>
                                        </svg>
                                    &nbsp;Time
                                </h1>
                                    <h1>Managing screen time by lock screen battle with friends or strangers</h1>
                                </Col>
                            </Row>
                        </div>
                        <div style={this.state.svg}>
                            {/* right logo */}
                            <div style={{ position: 'absolute', top: '160px', right: '64px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="700" height="800" version="1.1">
                                    <g transform="translate(20,20)">
                                        <svg width="338" height="400" viewBox="0 0 188 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M160.157 26.7304C170.128 38.4782 176.48 53.4448 177.436 69.794L174.442 69.9241C174.526 71.3588 174.566 72.8051 174.562 74.2615C174.559 75.7179 174.51 77.1625 174.418 78.5942L177.411 78.8314C176.365 95.1448 169.932 109.882 159.898 121.272L157.634 119.269C155.739 121.421 153.709 123.448 151.559 125.337L153.557 127.605C142.074 137.692 127.286 144.018 111.025 144.763L110.843 141.766C109.412 141.831 107.969 141.852 106.515 141.826C105.062 141.799 103.619 141.727 102.189 141.611L101.99 144.601C85.7348 143.274 70.9828 136.419 59.5563 125.922L61.567 123.726C59.4272 121.761 57.4089 119.661 55.5252 117.442L53.2509 119.363C43.2803 107.616 36.9286 92.649 35.972 76.2998L38.9664 76.1697C38.8824 74.7349 38.8418 73.2887 38.8458 71.8323C38.8498 70.3759 38.8983 68.9313 38.9902 67.4996L35.9968 67.2624C37.0431 50.949 43.4763 36.2113 53.5103 24.8215L55.7738 26.8244C57.6695 24.6726 59.6992 22.6457 61.8496 20.7567L59.8511 18.4891C71.3341 8.40185 86.1223 2.07622 102.383 1.33096L102.565 4.32829C103.996 4.26272 105.439 4.24224 106.893 4.26827C108.347 4.29429 109.789 4.36641 111.22 4.48319L111.419 1.49269C127.673 2.81994 142.425 9.67431 153.852 20.1716L151.841 22.3674C153.981 24.3332 155.999 26.4326 157.883 28.6521L160.157 26.7304Z" fill="black" fillOpacity="0.25" stroke="white" strokeWidth="6" strokeDasharray="10 52" />
                                            <path d="M164.862 42.6478C159.133 31.7505 150.741 22.646 140.547 16.2683C130.352 9.89054 118.722 6.46921 106.849 6.35524L106.236 76.4827L164.862 42.6478Z" fill="url(#paint0_linear)" />
                                            <path d="M106.927 73.509L164.771 42.019" stroke="white" strokeWidth="6" />
                                            <path d="M107.256 73.1243L85.3076 101.109" stroke="white" strokeWidth="6" />
                                            <path d="M107.238 74.4758L107.331 6.92247" stroke="white" strokeWidth="3" strokeLinejoin="round" strokeDasharray="10 10" />
                                            <path d="M75.3673 136.451L57.0099 168.914" stroke="black" strokeOpacity="0.25" strokeWidth="10" />
                                            <line x1="40.7296" y1="98.1658" x2="19.0483" y2="108.092" stroke="black" strokeOpacity="0.25" strokeWidth="10" />
                                            <line x1="25.9309" y1="106.203" x2="1.69099" y2="62.8824" stroke="coral" strokeLinecap="round" strokeOpacity="1" strokeWidth="5" />
                                            <ellipse cx="83.4023" cy="200.511" rx="19.9992" ry="7.99967" transform="rotate(-76.9144 83.4023 200.511)" fill="black" fillOpacity="0.25" />
                                            <path d="M159.513 159.287C163.243 156.919 171.065 162.56 176.984 171.886C182.902 181.211 184.676 190.691 180.946 193.058C177.216 195.425 169.394 189.785 163.475 180.459C157.557 171.133 155.783 161.654 159.513 159.287Z" fill="black" fillOpacity="0.25" />
                                            <path d="M126.759 142L137.183 174.321" stroke="black" strokeOpacity="0.25" strokeWidth="10" />
                                            <path d="M50.0535 170.669L80.21 188.027" stroke="black" strokeOpacity="0.25" strokeWidth="10" />
                                            <line x1="159.324" y1="171.999" x2="133.888" y2="180.902" stroke="black" strokeOpacity="0.25" strokeWidth="10" />
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="189.344" y1="25.6282" x2="107.159" y2="-16.8306" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#747474" />
                                                    <stop offset="0.791667" stopColor="white" stopOpacity="0" />
                                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <animateMotion path="M 338 0 C 138 100 138 100 338 0" dur="5s" repeatCount="indefinite" fill="freeze" />
                                    </g>
                                </svg>
                            </div>
                            {/* left logo */}
                            <div style={{ position: 'absolute', top: '160px', left: '64px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="700" height="800" version="1.1">
                                    <g transform="translate(20,20)">
                                        <svg width="338" height="400" viewBox="0 0 188 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M27.5428 26.7304C17.5723 38.4782 11.2206 53.4448 10.2639 69.794L13.2583 69.9241C13.1744 71.3588 13.1337 72.8051 13.1377 74.2615C13.1417 75.7179 13.1903 77.1625 13.2821 78.5942L10.2887 78.8314C11.335 95.1448 17.7682 109.882 27.8023 121.272L30.0658 119.269C31.9615 121.421 33.9911 123.448 36.1415 125.337L34.1431 127.605C45.626 137.692 60.4142 144.018 76.6748 144.763L76.8573 141.766C78.288 141.831 79.7309 141.852 81.1848 141.826C82.6387 141.799 84.0813 141.727 85.5115 141.611L85.7105 144.601C101.965 143.274 116.717 136.419 128.144 125.922L126.133 123.726C128.273 121.761 130.291 119.661 132.175 117.442L134.449 119.363C144.42 107.616 150.772 92.649 151.728 76.2998L148.734 76.1697C148.818 74.7349 148.858 73.2887 148.854 71.8323C148.85 70.3759 148.802 68.9313 148.71 67.4996L151.703 67.2624C150.657 50.949 144.224 36.2113 134.19 24.8215L131.926 26.8244C130.031 24.6726 128.001 22.6457 125.851 20.7567L127.849 18.4891C116.366 8.40185 101.578 2.07622 85.3173 1.33096L85.1348 4.32829C83.7041 4.26272 82.2612 4.24224 80.8073 4.26827C79.3535 4.29429 77.9108 4.36641 76.4806 4.48319L76.2816 1.49269C60.0267 2.81994 45.2747 9.67431 33.8483 20.1716L35.859 22.3674C33.7191 24.3332 31.7008 26.4326 29.8171 28.6521L27.5428 26.7304Z" fill="black" fillOpacity="0.25" stroke="white" strokeWidth="6" strokeDasharray="10 52" />
                                            <path d="M22.8384 42.6478C28.5668 31.7505 36.9587 22.646 47.1533 16.2683C57.3479 9.89054 68.9782 6.46921 80.8511 6.35524L81.4642 76.4827L22.8384 42.6478Z" fill="url(#paint0_linear)" />
                                            <path d="M80.7729 73.509L22.9288 42.019" stroke="white" strokeWidth="6" />
                                            <path d="M80.4438 73.1243L102.393 101.109" stroke="white" strokeWidth="6" />
                                            <path d="M80.4626 74.4758L80.3693 6.92247" stroke="white" strokeWidth="3" strokeLinejoin="round" strokeDasharray="10 10" />
                                            <path d="M112.333 136.451L130.69 168.914" stroke="black" strokeOpacity="0.25" strokeWidth="10" />
                                            <line y1="-5" x2="23.8456" y2="-5" transform="matrix(0.909237 0.416278 0.416278 -0.909237 149.052 93.6196)" stroke="black" strokeOpacity="0.25" strokeWidth="10" />
                                            <line y1="-1.5" x2="49.6411" y2="-1.5" transform="matrix(0.488302 -0.872675 -0.872675 -0.488302 160.46 105.47)" stroke="deepskyblue" strokeLinecap="round" strokeOpacity="1" strokeWidth="5" />
                                            <ellipse rx="19.9992" ry="7.99967" transform="matrix(-0.226407 -0.974033 -0.974033 0.226407 104.298 200.511)" fill="black" fillOpacity="0.25" />
                                            <path d="M28.187 159.287C24.4567 156.919 16.6349 162.56 10.7164 171.886C4.79789 181.211 3.024 190.691 6.75428 193.058C10.4846 195.425 18.3064 189.785 24.2249 180.459C30.1434 171.133 31.9173 161.654 28.187 159.287Z" fill="black" fillOpacity="0.25" />
                                            <path d="M60.9412 142L50.5168 174.321" stroke="black" strokeOpacity="0.25" strokeWidth="10" />
                                            <path d="M137.647 170.669L107.49 188.027" stroke="black" strokeOpacity="0.25" strokeWidth="10" />
                                            <line y1="-5" x2="26.9496" y2="-5" transform="matrix(0.943855 0.330361 0.330361 -0.943855 30.0277 167.28)" stroke="black" strokeOpacity="0.25" strokeWidth="10" />
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="-1.64403" y1="25.6282" x2="80.5408" y2="-16.8306" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#747474" />
                                                    <stop offset="0.791667" stopColor="white" stopOpacity="0" />
                                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <animateMotion path="M 0 0 C 200 100 200 100 0 0" dur="5s" repeatCount="indefinite" fill="freeze" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        {/* user problem */}
                        <div style={divStyleEven}>
                            <Row align='middle' justify='center'>
                                <Col span={15}>
                                    <h1 style={{ fontSize: '2em' }}>The User Problems</h1>
                                    <h1 style={textLeft}>Usually, people can't help playing mobile phone 
                                    due to the attraction of a variety of information, like news, videos, games,etc. 
                                    And they can’t efficiently manage their screen time.
                                    Because of this, People often delay or miss events and plans.
                                </h1>
                                </Col>
                            </Row>
                        </div>
                        {/* user interview */}
                        <div style={divStyleOdd}>
                            <Row align='middle' justify='center'>
                                <Col span={12}>
                                    <h1 style={{ fontSize: '2em' }}>How did we know this was a problem?</h1>
                                </Col>
                            </Row>
                            <Row align='middle' justify='center'>
                                <Col span={7}>
                                    <Image src={interviewQs}></Image>
                                </Col>
                                <Col span={8}>
                                    <h1 style={{ fontSize: '2em' }}>User Interviews</h1>
                                    <ul style={textLeft}>
                                        <li>Designed interview script, including goals, participants and questions</li>
                                        <li>Questions were designed in different types, including Action / Story / Problem / Demo / Inventory / Comparison / Relationship / Wishes</li>
                                        <li>Summarized user's thoughts by Think&amp;Feel / See / Hear / Say&amp;Do / Pains / Gains and make an empathy map</li>
                                        <li>According to target user and user need to compile POV statement</li>
                                    </ul>
                                </Col>
                            </Row>
                            {/* empathy map & POV */}
                            <Row align='middle' justify='center' style={{ padding: '3% 0' }}>
                                <Col span={7}>
                                    <Image src={empathyMap}></Image>
                                </Col>
                                <Col span={8}>
                                    <h1 style={{ fontSize: '2em' }}>POV statements</h1>
                                    <Collapse defaultActiveKey={['1']} accordion='true' ghost='true' style={textLeft}>
                                        <Panel header="Statement 1" key="1">
                                            <p style={textLeft}>
                                                <b>A user who</b> is a student<br />
                                                <b>needs</b> to be supervised<br />
                                                <b>so they can</b> concentrate on learning and don't play with mobile phones
                                            </p>
                                        </Panel>
                                        <Panel header="Statement 2" key="2">
                                            <p style={textLeft}>
                                                <b>A user</b> who is a student<br />
                                                <b>needs</b> movtivation<br />
                                                <b>so they can</b> be encouraged not playing mobile phone
                                            </p>
                                        </Panel>
                                        <Panel header="Statement 3" key="3">
                                            <p style={textLeft}>
                                                <b>A user</b> who is a student<br />
                                                <b>needs</b> an time controller<br />
                                                <b>so they can</b> limit usage time of different kinds of apps
                                            </p>
                                        </Panel>
                                        <Panel header="Statement 4" key="4">
                                            <p style={textLeft}>
                                                <b>A user</b> who is a working person<br />
                                                <b>needs</b> time notification<br />
                                                <b>so they can</b> reduce future screen time according to the time spent
                                            </p>
                                        </Panel>
                                        <Panel header="Statement 5" key="5">
                                            <p style={textLeft}>
                                                <b>A user</b> who is a working person<br />
                                                <b>needs</b> time-saving tools<br />
                                                <b>so they can</b> make quick decisions for trifles without wasting time on phone
                                            </p>
                                        </Panel>
                                    </Collapse>
                                </Col>
                            </Row>
                            {/* prioritzing pain points */}
                            <Row align='middle' justify='center'>
                                <Col span={7}>
                                    <Image src={priorHierarchy}></Image>
                                </Col>
                                <Col span={8}>
                                    <h1 style={{ fontSize: '2em' }}>Prioritizing Pain Points</h1>
                                    <ul style={textLeft}>
                                        <li>Help decision</li>
                                        <li>Encouragement</li>
                                        <li>Supervision</li>
                                        <li>Limit time/Notification</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                        {/* hand sketch */}
                        <div style={divStyleEven}>
                            <Row align='middle' justify='center'>
                                <Col span={15}>
                                    <h1 style={{ fontSize: '2em' }}>Hand Sketches</h1>
                                    <div style={textLeft}>
                                        <p>After confirming the user need,
                                        I designed five pain points modules (Visualization / Control / Supervision / Rankings / Tools)
                                        by a low cost, fast and simple way - hand sketch.
                                        </p>
                                        <p>And in this sketch, I mainly focused on page layout, and ignore complex details.</p>
                                        <p>At first, I have put forward a variety of options for the two issues:</p>
                                        <ol style={textLeft}>
                                            <li>Where should I put the navigation bar?Top, Bottom or hidden in left? <br />And I choose top.</li>
                                            <li>Should I let user choose data granularity of charts? <br />And I choose no.</li>
                                        </ol>
                                    </div>
                                    <Image src={sketch} width='70%'></Image>
                                </Col>
                            </Row>
                        </div>
                        {/* wireframe */}
                        <div style={divStyleOdd}>
                            <Row align='middle' justify='center'>
                                <Col span={15}>
                                    <h1 style={{ fontSize: '2em' }}>Wireframes</h1>
                                    <div style={textLeft}>
                                        <h1>Problems</h1>
                                        <p>After accomplished hand sketch, I did a early usability test with my friend and found the following two problems:</p>
                                        <ol>
                                            <li>The top navigation is uncomfortable, it's too far from the finger</li>
                                            <li>Too many tabs in navgation bar</li>
                                        </ol>
                                        <h1>Improvement</h1>
                                        <p>Hence, I adjusted the following steps:</p>
                                        <ol>
                                            <li>Merged visualization module and control module into Home module, which helps reduce user operating steps</li>
                                            <li>Simplified tools module, and merged it into Home module, it brought pleasure to serious interface, break the conventional logic</li>
                                            <li>Added a new lock screen module for single use</li>
                                            <li>Merged Supervision/rankings into friends module</li>
                                            <li>Deleted the top-right "Me" icon, and add it to navigation bar</li>
                                        </ol>
                                        <p>According to these ideas, I used basic shape and UI components to build a standard grayscale model.</p>
                                        <p>The new navigation bar became "Home/Control/Friends/Me". And it seemed more concise and logical.</p>
                                    </div>
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
                        <div style={divStyleEven}>
                            <Row align='middle' justify='center'>
                                <Col span={15}>
                                    <h1 style={{ fontSize: '2em' }}>High Fidelity Prototypes</h1>
                                </Col>
                            </Row>
                            <Button onClick={() => this.changeFrame()} type='dashed' title='App Prototype' size='large' style={{ color: 'black' }} icon={<CaretRightOutlined />}>
                                Try Prototype
                            </Button>
                            <Row align='top' justify="space-around">
                                <Col span={15} style={textLeft}>
                                    <p>Then, I made a high fidelity prototype on the basis of wireframe, which expanded and changed the following contents:</p>
                                    <ul>
                                        <li>Icon: select simple and easy to understand icon, which can understand the meaning as shown in the figure</li>
                                        <li>Color: select light and not too serious color as background</li>
                                        <li>Font: select fun and not too formal font</li>
                                        <li>Dynamic navigation: implement the navigation between pages</li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row align='middle' justify="space-around">
                                <Col span={12}>
                                    <Image src={prototype}></Image>
                                </Col>
                            </Row>
                        </div>
                        {/* user Testing */}
                        <div style={divStyleOdd}>
                            <Row align='middle'>
                                <Col span={12} offset={6}>
                                    <h1 style={{ fontSize: '2em' }}>User Testing</h1>
                                </Col>
                            </Row>
                            {/* test preparation */}
                            <Row align='middle' justify='center'>
                                <Col span={7}>
                                    <Image src={ut1} width='90%'></Image>
                                </Col>
                                <Col span={8}>
                                    <h1>Test Preparation</h1>
                                    <div style={textLeft}>
                                        <p>After completed the prototype, I started to do usability testing.
                                        The test plan mainly included test objectives, scenarios, tasks, etc.
                                            <br />I set the following scenarios:
                                        </p>
                                        <Collapse defaultActiveKey={['1']} accordion='true' ghost='true' style={textLeft}>
                                            <Panel header="Scenario 1" key="1">
                                                <p style={textLeft}>
                                                    Look at the total/percentage usage time of all apps and restrict the time usage of some apps <br/>(Limit Time+Notification)
                                                </p>
                                            </Panel>
                                            <Panel header="Scenario 2" key="2">
                                                <p style={textLeft}>
                                                    Do lock screen battle with your friends and supervise each other(Supervision)
                                                </p>
                                            </Panel>
                                            <Panel header="Scenario 3" key="3">
                                                <p style={textLeft}>
                                                    Use the points you win to build buildings and take a look at rankings <br/>(Encouragement)
                                                </p>
                                            </Panel>
                                            {/* <Panel header="Scenario 4(not test)" key="4">
                                                <p style={textLeft}>
                                                    Lock screen by yourself when you don't want battle <br/>(Limit time)
                                                </p>
                                            </Panel>
                                            <Panel header="Scenario 5(not test)" key="5">
                                                <p style={textLeft}>
                                                    Use dice or coin to help you make a quick decision <br/>(Help decision)
                                                </p>
                                            </Panel> */}
                                        </Collapse>
                                    </div>
                                </Col>
                            </Row>
                            {/* running test */}
                            <Row align='middle' justify='center'>
                                <Col span={7}>
                                    <Image src={ut2} width='90%'></Image>
                                </Col>
                                <Col span={8} style={{ padding: '3% 0' }}>
                                    <h1>Running Usability Tests</h1>
                                    <p style={textLeft}>
                                        The running test adopts a standard process:<br />
                                    Introduce the app to users, Start recording, Ask demographic related questions,
                                    Do scenario tasks, feedback scoring (Likert scale), conclusion.
                                    </p>
                                </Col>
                            </Row>
                            {/* test result */}
                            <Row align='middle' justify='center'>
                                <Col span={7}>
                                    <h1>Usability Results</h1>
                                    <p style={textLeft}>After the test, I used the table to count the "go well" and "need improve" in the process of each user executing each task.
                                    </p>
                                </Col>
                                <Col span={8}>
                                    <Image src={usabilityTestingResult}></Image>
                                </Col>
                            </Row>
                        </div>
                        {/* conclusion */}
                        <div style={divStyleEven}>
                            <Row align='middle' justify='center'>
                                <Col span={15}>
                                    <h1 style={{ fontSize: '2em' }}>Conclusion</h1>
                                </Col>
                            </Row>
                            <Button onClick={() => this.changeFrame()} type='dashed' title='App Prototype' size='large' style={{ color: 'black' }} icon={<CaretRightOutlined />}>
                                Try Prototype
                            </Button>
                            <br />
                            <Row align='middle' justify='center'>
                                <Col span={15} style={textLeft}>
                                    <ul>
                                        <li>To sum up, I obtain five main User Need from user interview, <br />
                                            including <b>Help decision, Encouragement, Supervision, Limit time and Notification</b>.
                                        </li>
                                        <br />
                                        <li>The final solution is as follows:</li>
                                    </ul>
                                    <Table columns={tableColumn} dataSource={tableData} scroll={{ y: 150 }} />
                                </Col>
                            </Row>
                            <Row align='middle' justify='center'>
                                <Col span={7}>
                                    <h1>What went well</h1>
                                    <ul style={textLeft}>
                                        <li>Users can quickly find the entrance of the lock screen battle and analysis of apps usage.</li>
                                        <li>According to the result of Likert scale, 80% user like the battle mode.</li>
                                        <li>Stength: Battle mode &amp; Build buildings</li>
                                    </ul>
                                </Col>
                                <Col span={8}>
                                    <h1>What could be improved</h1>
                                    <ul style={textLeft}>
                                        <li>Some of the elements are not clear enough, it can be changed.</li>
                                        <li>The part which is difficult to test is tools, because users all consider it's a funny design.
                                            But I can't figure out whether it’s really effective and whether user like virtual coin or dice or a roulette by prototype.</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                        {/* next step */}
                        <div style={divStyleOdd}>
                            <Row align='middle' justify='center'>
                                <Col span={12}>
                                    <h1 style={{ fontSize: '2em' }}>What's next?</h1>
                                </Col>
                            </Row>
                            <Row align='middle' justify='center'>
                                <Col span={8}>
                                    <ul style={textLeft}>
                                        <li>Do research on battle related feature, and user favourite battle mode(single/1V1/team battle).</li>
                                        <li>Add more encouragement feature.<br />
                                            For example, lock time points can not only be used to build buildings,
                                            but also be used to go shopping (virtual props/ real goods).
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Content>
                    {/* footer */}
                    <Footer style={{ backgroundColor: 'rgba(20,32,68,1)', color: '#fff' }}>Designed By Yizhe Zhang</Footer>
                </Layout>
            </div>
        )
    }
}

export default ScreenTime;