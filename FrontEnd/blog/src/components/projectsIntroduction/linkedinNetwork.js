import React from 'react';
import { Layout, Row, Col, Image, Button, Carousel, Collapse, Table } from 'antd';
import interviewQs from '../../static/img/projects/screenTime/interviewQs.png';
import empathyMap from '../../static/img/projects/screenTime/empathyMap.png';
import sketch from '../../static/img/projects/screenTime/sketch.png';
import wireframe from '../../static/img/projects/screenTime/wireframe.png';
import wireframe2 from '../../static/img/projects/screenTime/wireframe2.png';
import prototype from '../../static/img/projects/screenTime/prototype.png';
import ut1 from '../../static/img/projects/screenTime/usabilityTesting_prepare.png';
import ut2 from '../../static/img/projects/screenTime/usabilityTesting_prepare2.png';
import linkedinbg from '../../static/img/projects/networkFeature/linkedinbg.png';
import linkedinlogo from '../../static/img/projects/networkFeature/linkedinlogo.png';
import usabilityTestingResult from '../../static/img/projects/screenTime/usabilityTestingResult.png';
import music_xydm from '../../static/others/xydm.mp3';
import { PlayCircleFilled, CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Header, Footer, Content } = Layout;
const div1Style = {
    textAlign: 'center',
    height: '50em',
    backgroundImage: `url(${linkedinbg})`,
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
    backgroundColor: 'rgba(226,226,226)',
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
                        <Button onClick={() => this.changeFrame()} title='LinkedIn Network New Feature'
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
                            <img style={{position:"absolute",top:'96px',right:'32px'}} src={linkedinlogo} alt="logo" width='150px'/>
                            <Row align='middle' style={{ height: '100%' }}>
                                <Col span={14} offset={5}>
                                    <h1 style={{ fontSize: '4em' }}>Networking New Feature</h1>
                                    <h1>A feature that allows well qualified candidates to directly connect with the hiring team</h1>
                                </Col>
                            </Row>
                        </div>
                        {/* user problem */}
                        <div style={divStyleEven}>
                            <Row align='middle' justify='center'>
                                <Col span={15}>
                                    <h1 style={{ fontSize: '2em' }}>The User Problems</h1>
                                    <h1 style={textLeft}>LinkedIn is a great tool for networking, and a great place to search for jobs.
                                        But when searching for a job there is no easy way 
                                        for a candidate to network with the team who is hiring for the position: 
                                        manager, recruiters and individual contributors.
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