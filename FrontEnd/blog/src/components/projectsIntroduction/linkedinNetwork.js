import React from 'react';
import { Layout, Row, Col, Image, Button, Carousel, Collapse, Table } from 'antd';
import sprintQs from '../../static/img/projects/networkFeature/sprintqs.png';
import opportunity from '../../static/img/projects/networkFeature/opportunity.png';
import solution from '../../static/img/projects/networkFeature/solution.png';
import sketch from '../../static/img/projects/networkFeature/sketch.png';
import wireframe from '../../static/img/projects/networkFeature/wireframe.png';
import prototype from '../../static/img/projects/networkFeature/prototype.png';
import prototype2 from '../../static/img/projects/networkFeature/prototype2.png';
import ut1 from '../../static/img/projects/networkFeature/usabilitytesting1.png';
import ut2 from '../../static/img/projects/networkFeature/usabilitytesting2.png';
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
    backgroundSize: 'cover',
    fontFamily: 'Verdana, gt-sectra-book, Georgia, sans-serif'
}
const divStyleEven = {
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingTop: '5em',
    paddingBottom: '5em',
    fontFamily: 'Verdana, gt-sectra-book, Georgia, sans-serif'
}
const divStyleOdd = {
    textAlign: 'center',
    backgroundColor: 'rgba(226,226,226)',
    paddingTop: '5em',
    paddingBottom: '5em',
    fontFamily: 'Verdana, gt-sectra-book, Georgia, sans-serif'
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
        const tableColumn = [{ title: 'Side', dataIndex: 'side', key: 'side' },
        { title: 'Component', dataIndex: 'component', key: 'component' },
        { title: 'User Need / Function', dataIndex: 'need', key: 'need' }];
        const tableData = [{
            key: '1',
            side: 'Candidate',
            component: 'Job Show',
            need: 'learn about job'
        }, {
            key: '2',
            side: 'Candidate',
            component: 'Forum',
            need: 'Discuss and know information about company'
        }, {
            key: '3',
            side: 'Candidate',
            component: 'Group Chat',
            need: 'Chat with hiring group and receive company latest notification'
        }, {
            key: '4',
            side: 'Candidate',
            component: 'Private Chat',
            need: 'Chat with one of the recruiters directly'
        }, {
            key: '5',
            side: 'Hiring Group',
            component: 'Group Chat:notification/management',
            need: 'let candidates know latest company trends and filter group members'
        }, {
            key: '6',
            side: 'Hiring Group',
            component: 'Private Chat',
            need: 'filter qualified candidates and chat with them directly'
        }, {
            key: '7',
            side: 'Hiring Group',
            component: 'Candidate Show',
            need: 'Evaluate the candidates'
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
                        <iframe id='phone' title='phone' style={this.state.frameStyle} width="300" height="700" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYsboooRylBRXw6cDIpsI8L%2FProjects%3Fnode-id%3D467%253A1608%26scaling%3Dscale-down">
                        </iframe>
                        {/* project */}
                        <div style={div1Style}>
                            <img style={{ position: "absolute", top: '96px', right: '32px' }} src={linkedinlogo} alt="logo" width='150px' />
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
                        {/* how know questions */}
                        <div style={divStyleOdd}>
                            <Row align='middle' justify='center'>
                                <Col span={12}>
                                    <h1 style={{ fontSize: '2em' }}>How did we know this was a problem?</h1>
                                </Col>
                            </Row>
                            {/* sprint questions */}
                            <Row align='middle' justify='center'>
                                <Col span={7}>
                                    <Image src={sprintQs} alt="sprint questions" title="sprint questions"></Image>
                                </Col>
                                <Col span={8}>
                                    <h1 style={{ fontSize: '2em' }}>Sprint Questions</h1>
                                    <ul style={textLeft}>
                                        <li>Brainstorm from the perspective of job candidates and hiring group</li>
                                        <li>Put forward and record our views on each question</li>
                                    </ul>
                                </Col>
                            </Row>
                            {/* difficulty&opportunity */}
                            <Row align='middle' justify='center' style={{ padding: '3% 0' }}>
                                <Col span={8}>
                                    <h1 style={{ fontSize: '2em' }}>Difficulty/Opportunity</h1>
                                    <ul style={textLeft}>
                                        <li>Think aloud anything that sounds difficult, or feels like an opportunity capture as a how might we</li>
                                    </ul>
                                </Col>
                                <Col span={7}>
                                    <Image src={opportunity} alt="opportunity" title="opportunity"></Image>
                                </Col>
                            </Row>
                            {/* solution & dot vote */}
                            <Row align='middle' justify='center'>
                                <Col span={7}>
                                    <Image src={solution} alt="sprint questions" title="sprint questions"></Image>
                                </Col>
                                <Col span={8}>
                                    <h1 style={{ fontSize: '2em' }}>Solution &amp; Dot vote</h1>
                                    <ul style={textLeft}>
                                        <li>Take turns describing what we designed</li>
                                        <li>Vote for good features</li>
                                        <li>My dotted features are personal tags, badges, portrait and title</li>
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
                                        <p>After sprint teamwork, I started to refine my sketches</p>
                                        <p>According to the sketch, I continued to expand components and processes</p>
                                        <p>Four main components: recruiter display, job seeker display, job seeker filter and chatting room</p>
                                    </div>
                                    <Image src={sketch} width='70%' alt="Hand Sketch" title="Hand Sketch"></Image>
                                </Col>
                            </Row>
                        </div>
                        {/* wireframe */}
                        <div style={divStyleOdd}>
                            <Row align='middle' justify='center'>
                                <Col span={15}>
                                    <h1 style={{ fontSize: '2em' }}>Wireframes</h1>
                                    <div style={textLeft}>
                                        <p>After completing hand sketches, I split all pages into candidate side and hiring group side</p>
                                        <p>Started to design wireframes, including gaps and component consistency</p>
                                        <p>Chatting components:</p>
                                        <ul>
                                            <li>Candidate side
                                                <ol>
                                                    <li>Group chat: notification / video call</li>
                                                    <li>Single chat: non temporary chat with video call, temporary chat without video call</li>
                                                </ol>
                                            </li>
                                            <li>Hiring group side
                                                <ol>
                                                    <li>Group chat: notification / management / video call</li>
                                                    <li>Single chat: non temporary chat with video call / view Information, temporary chat only can view Information</li>
                                                </ol>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <Image src={wireframe} width='100%' alt="Wireframes" title="Wireframes"></Image>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* prototypes */}
                        <div style={divStyleEven}>
                            <Row align='middle' justify="center">
                                <Col span={15}>
                                    <h1 style={{ fontSize: '2em' }}>High Fidelity Prototypes</h1>
                                    <Button onClick={() => this.changeFrame()} type='dashed' title='App Prototype' size='large' style={{ color: 'black' }} icon={<CaretRightOutlined />}>
                                        Try Prototype
                                    </Button>
                                    <div style={textLeft}>
                                        <p>After completing wireframes, I used real world components to make prototype with a focus on detail design, including color and fonts</p>
                                        <p>The whole prototype process starts with role selection:</p>
                                        <ul>
                                            <li>Candidate:
                                                <ol>
                                                    <li>Job Show-&gt;Forum-&gt;Group chat list-&gt;Group chat</li>
                                                    <li>Job Show-&gt;Forum-&gt;Private chat list-&gt;Private chat</li>
                                                </ol>
                                            </li>
                                            <li>Hiring Group:
                                                <ol>
                                                    <li>Group chat list-&gt;Group chat</li>
                                                    <li>Private chat list-&gt;Filter-&gt;Private chat-&gt;Candidate show</li>
                                                </ol>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <Carousel autoplay='true'>
                                            <div>
                                                <Image src={prototype} alt="Prototypes" title="Prototypes"></Image>
                                            </div>
                                            <div>
                                                <Image src={prototype2} alt="Prototypes" title="Prototypes"></Image>
                                            </div>
                                        </Carousel>
                                    </div>
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
                                    <Image src={ut1} width='90%' alt="prepare usability testing" title="prepare usability testing"></Image>
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
                                                    You are a candidate who is looking for a job, and you are interested in XGroup and want to know futher about it.
                                                <br />(Group Chat/Notification/Video Call)
                                                </p>
                                            </Panel>
                                            <Panel header="Scenario 2" key="2">
                                                <p style={textLeft}>
                                                    You are a candidate who is looking for a job, and you are interested in UX designer Job of XGroup. Now you want to learn more about it.
                                                <br />(Private Chat/Video Call)
                                                </p>
                                            </Panel>
                                            <Panel header="Scenario 3" key="3">
                                                <p style={textLeft}>
                                                    You're a recruiter of XGroup and you need to manage hiring group chat.
                                                <br />(Group Chat/Notification/Manage/Video Call)
                                                </p>
                                            </Panel>
                                            <Panel header="Scenario 4" key="4">
                                                <p style={textLeft}>
                                                    You’re a recruiter of XGroup and you need to answer candiates questions.
                                                <br />(Filter Candidates/Private Chat/Candidate ShowPage/Video Call)
                                                </p>
                                            </Panel>
                                        </Collapse>
                                    </div>
                                </Col>
                            </Row>
                            {/* running test */}
                            <Row align='middle' justify='center'>
                                <Col span={7}>
                                    <Image src={ut2} width='90%' alt="run usability testing" title="run usability testing"></Image>
                                </Col>
                                <Col span={8} style={{ padding: '3% 0' }}>
                                    <h1>Running Usability Tests</h1>
                                    <p style={textLeft}>
                                        The running test adopted a standard process:<br />
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
                                    <Image src={usabilityTestingResult} alt="usability testing result" title="usability testing result"></Image>
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
                                        <li>To sum up, I designed the networking feature by two sides,
                                            including <b>Candidate side and Hiring Group side</b>.
                                        </li>
                                        <br />
                                        <li>The final solution is as follows:</li>
                                    </ul>
                                    <Table columns={tableColumn} dataSource={tableData} scroll={{ y: 250 }} />
                                </Col>
                            </Row>
                            <Row align='middle' justify='center'>
                                <Col span={7}>
                                    <h1>What went well</h1>
                                    <ul style={textLeft}>
                                        <li>Users can quickly find the entrance of ...</li>
                                        <li>According to the result of Likert scale, 80% user like ...</li>
                                        <li>Stength: ...</li>
                                    </ul>
                                </Col>
                                <Col span={8}>
                                    <h1>What could be improved</h1>
                                    <ul style={textLeft}>
                                        <li>Some of the elements are not clear enough, it can be changed.</li>
                                        <li>The part which is difficult to test is ...</li>
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
                                        <li>Do research on ...</li>
                                        <li>Add more ... feature
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