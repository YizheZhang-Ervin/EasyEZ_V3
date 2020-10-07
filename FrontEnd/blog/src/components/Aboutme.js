import { List, Typography, Collapse, Card, Divider, Image, Carousel, Comment } from 'antd';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { CrownOutlined, SolutionOutlined, ConsoleSqlOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import { PlusOutlined, BankOutlined } from '@ant-design/icons';
import React from 'react';
import ntu from '../static/img/ntu.jpg';
import neu from '../static/img/neu.jpg';
import ucla from '../static/img/ucla.jpg';
import bi from '../static/img/certificates/bi.jpg';
import google from '../static/img/certificates/GAIQ.png';
import ge from '../static/img/certificates/GE-DA.png';
import ibm from '../static/img/certificates/IBM_python.jpg';
import jpmorgan from '../static/img/certificates/jpmorgan-se.png';
import js from '../static/img/certificates/js.jpg';
import kpmg from '../static/img/certificates/KPMG-DA.png';
import python from '../static/img/certificates/python3.jpg';
import who from '../static/img/certificates/WHO-godata.png';
import guess from '../static/img/projects/guess.jpg';
import spa from '../static/img/projects/spa.jpg';
import pfas from '../static/img/projects/pfas.jpg';
import imiscloud from '../static/img/projects/imiscloud.png';
import homesearch from '../static/img/projects/homesearch.png';
import his from '../static/img/projects/his.jpg';
import hds from '../static/img/projects/hds.jpg';
import excel from '../static/img/projects/excel.jpg';
import beagvs from '../static/img/projects/bea-gvs.jpg';
import self from '../static/img/summary.png';
import crs1 from '../static/img/projects/bea-gvs-crs.png';
import crs2 from '../static/img/projects/alg-crs.png';
import crs3 from '../static/img/projects/harrier-crs.png';
import crs4 from '../static/img/projects/hnas-crs.jpg';
import crs5 from '../static/img/projects/homesearch-crs.png';
import crs6 from '../static/img/projects/pfas-crs.png';


const { Panel } = Collapse;
const techs = [
    'Progamming Language: Python, Sql, HTML/CSS/JS/TS',
    'Front End: React, Angular, Bootstrap, Antd, Ng-zorro',
    'Back End: Django, Tornado, Flask, Express(Node.js)',
    'Database: Sqlite, MS SqlServer, Mysql, Oracle, PostgreSql, MongoDB',
    'OS: Windows, Linux',
    'Data: Hadoop, Spark, Scala, Tensorflow, Keras, Power BI, Tableau, SPSS, SSIS/SSAS/SSRS',
    'MultiMedia: Corel VideoStudio, PhotoShop, Adobe Flash, Adobe Audition',
    'Tools: Git, Postman, Office, Axure RP, Adobe XD, Mind Manager',
];

const pythons = [
    'Python Data: Numpy, Pandas, Scipy, Sklearn, matplotlib, pyecharts',
    'Python Finance: mplfinance, investpy, trendet, pynance',
    'Python GUI/Game: Tkinter, Pyqt, Pygame',
    'Python Crawler: Requests+BeautifulSoup, Scrapy+Selenium',
    'Python Testing: Selenium'
];

const data = [
    {
        author: 'Anonymous',
        avatar: <UserOutlined />,
        content: (
            <p>
                Proficient in full stack development of Websites.
                <br />
                Can apply mainstream frameworks such as Angular/Django to develop individual/team projects.
                <br />
                Good at optimizing user experience and improving project quality through data analysis.
            </p>
        ),
    },
    {
        author: 'Anonymous',
        avatar: <UserOutlined />,
        content: (
            <p>
                Conscientious, responsible and well-organized.
                <br />
                Have Strong adaptability and can quickly integrate into the team.
                <br />
                Have strong learning ability and can quickly master the knowledge structure.
            </p>
        ),
    },
];


class Aboutme extends React.Component {
    state = { visible: false };

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
            <div>
                {/* carousel */}
                <div id='crs001' style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
                    <Carousel autoplay dotPosition='left' style={{ gridColumn: '0' }}>
                        <Image src={crs1} ></Image>
                        <Image src={crs2} ></Image>
                        <Image src={crs3} ></Image>
                        <Image src={crs4} ></Image>
                        <Image src={crs5} ></Image>
                        <Image src={crs6} ></Image>
                    </Carousel>
                    <Carousel autoplay dotPosition='right' style={{ gridColumn: '1' }}>
                        <Image src={crs6} ></Image>
                        <Image src={crs5} ></Image>
                        <Image src={crs4} ></Image>
                        <Image src={crs3} ></Image>
                        <Image src={crs2} ></Image>
                        <Image src={crs1} ></Image>
                    </Carousel>
                </div>
                {/* summary */}
                <div id='smr001' className='margin-97'>
                    <Divider orientation="left"><CrownOutlined /> Summary</Divider>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8)' }}>
                        <Image style={{ gridColumn: '0/2' }} src={self}></Image>
                        <div style={{ gridColumn: '3/9', marginLeft: '2%' }}>
                            <List
                                className="comment-list" header={`${data.length} Comments`}
                                itemLayout="horizontal" dataSource={data}
                                renderItem={item => (
                                    <li><Comment author={item.author} avatar={item.avatar} content={item.content} /></li>
                                )}
                            />
                            <Button type="ghost" onClick={this.showDrawer} style={{margin:'2% 0%'}}>
                                <PlusOutlined /> Add Comments
                            </Button>
                            <Drawer
                                title="Add Comments" width={720} onClose={this.onClose} visible={this.state.visible}
                                bodyStyle={{ paddingBottom: 80 }}
                                footer={
                                    <div style={{textAlign: 'right'}}>
                                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>Cancel</Button>
                                        <Button onClick={this.onClose} type="primary">Submit</Button>
                                    </div>}>
                                <Form layout="vertical" hideRequiredMark>
                                    <Row gutter={16}>
                                        <Col span={24}>
                                            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter name' }]}>
                                                <Input placeholder="Please enter name" />
                                            </Form.Item>
                                        </Col>
                                        <Col span={24}>
                                            <Form.Item name="description" label="Description" rules={[{required: true, message: 'please enter comments'},]}>
                                                <Input.TextArea rows={4} placeholder="please enter comments" />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Form>
                            </Drawer>
                        </div>
                    </div>
                </div>
                {/* projects */}
                <div id='prj001' className='margin-97'>
                    <Divider orientation="left"><SolutionOutlined /> Projects</Divider>
                    <Collapse defaultActiveKey={['p1']} ghost>
                        <Panel className='font-bold' header="IMIS Cloud Storage" key="p1">
                            <p className='font-normal'>Apr 2020 - May 2020</p>
                            <p className='font-normal'>Django, Bootstrap, Sqlite</p>
                            <Image src={imiscloud}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Gold Visualization System" key="p2">
                            <p className='font-normal'>Mar 2020 - Apr 2020</p>
                            <p className='font-normal'>Tornado, Bootstrap, Sqlite</p>
                            <Image src={beagvs}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Personal Website" key="p3">
                            <p className='font-normal'>Jan 2020 - Feb 2020</p>
                            <p className='font-normal'>Django, Bootstrap, Mysql</p>
                            <Image src={pfas}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Home Rent App" key="p4">
                            <p className='font-normal'>Jan 2020 - Apr 2020</p>
                            <p className='font-normal'>Angular, Express, MongoDB, Ng-Zorro</p>
                            <Image src={homesearch}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Spreadsheet" key="p5">
                            <p className='font-normal'>HTML/CSS/JS</p>
                            <Image src={excel}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Long Page Application" key="p6">
                            <p className='font-normal'>HTML/CSS/JS</p>
                            <Image src={spa}></Image>
                        </Panel>
                        <Panel className='font-bold' header="MA Education Data Analysis" key="p7">
                            <p className='font-normal'>Python(Jupyter Notebook, Numpy, Pandas, Scipy, Sklearn, Matplotlib)</p>
                        </Panel>
                        <Panel className='font-bold' header="Hotel Database System" key="p8">
                            <p className='font-normal'>Sept 2019 - Dec 2019</p>
                            <p className='font-normal'>Java, Sqlserver, Power BI</p>
                            <Image src={hds}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Hospital Information System" key="p9">
                            <p className='font-normal'>Sept 2019 - Dec 2019</p>
                            <p className='font-normal'>Java</p>
                            <Image src={his}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Gamification Used by Exploratory Search System[GUESS]" key="p10">
                            <p className='font-normal'>Sept 2018 - Jun 2019</p>
                            <p className='font-normal'>Axure RP</p>
                            <Image src={guess}></Image>
                        </Panel>
                    </Collapse>
                </div>
                {/* technology stack */}
                <div id='tng001' className='margin-97'>
                    <Divider orientation="left"><ConsoleSqlOutlined /> Technology Stack</Divider>
                    <List
                        bordered
                        dataSource={techs}
                        renderItem={item => (
                            <List.Item>
                                <Typography.Text mark>{item.split(':')[0]}:</Typography.Text> {item.split(':')[1]}
                            </List.Item>
                        )}
                    />
                    <List
                        header='*Python Libs:'
                        bordered
                        dataSource={pythons}
                        renderItem={item => (
                            <List.Item>
                                <Typography.Text mark>{item.split(':')[0]}:</Typography.Text> {item.split(':')[1]}
                            </List.Item>
                        )}
                    />
                </div>
                {/* Certificates */}
                <div id='crf001' className='margin-97'>
                    <Divider orientation="left"><SafetyCertificateOutlined /> Certificates</Divider>
                    <Collapse defaultActiveKey={['c1']} ghost>
                        <Panel className='font-bold' header="Data Analytics Consulting Virtual Internship" key="c1">
                            <p className='font-normal'>KPMG (Issued Aug, 2020)</p>
                            <Image src={kpmg}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Software Engineering Virtual Experience" key="c2">
                            <p className='font-normal'>JPMorgan Chase & Co (Issued Aug, 2020)</p>
                            <Image src={jpmorgan}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Google Analytics Individual Qualification" key="c3">
                            <p className='font-normal'>Google (Issued Aug, 2020)</p>
                            <Image src={google}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Data Analytics Program" key="c4">
                            <p className='font-normal'>General Electric (Issued Aug, 2020)</p>
                            <Image src={ge}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Go.Data" key="c5">
                            <p className='font-normal'>World Health Organization (Issued Aug, 2020)</p>
                            <Image src={who}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Visualization Data By Python" key="c6">
                            <p className='font-normal'>IBM (Issued May, 2020)</p>
                            <Image src={ibm}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Python 3" key="c7">
                            <p className='font-normal'>SoloLearn (Issued December, 2019)</p>
                            <Image src={python}></Image>
                        </Panel>
                        <Panel className='font-bold' header="JavaScript" key="c8">
                            <p className='font-normal'>SoloLearn (Issued December, 2019)</p>
                            <Image src={js}></Image>
                        </Panel>
                        <Panel className='font-bold' header="BI Developer" key="c9">
                            <p className='font-normal'>Bluelime (Issued November,2019)</p>
                            <Image src={bi}></Image>
                        </Panel>
                    </Collapse>
                </div>
                {/* education */}
                <div id='edu001' className='margin-97'>
                    <Divider orientation="left">
                        <BankOutlined /> Education
                    </Divider>
                    <Card type="inner" title="2019 - Present" extra={<a target="_blank" rel="noopener noreferrer" href="https://www.northeastern.edu/">Graduate</a>}>
                        <p><b>Northeastern University, Boston, MA, United States</b></p>
                        <p>Master of Science in Information Systems</p>
                        <Image src={neu}></Image>
                    </Card>
                    <Card style={{ marginTop: 16 }} type="inner" title="2017" extra={<a target="_blank" rel="noopener noreferrer" href="https://www.ucla.edu/">Exchange</a>}>
                        <p><b>University of California, Los Angeles, CA, United States</b></p>
                        <p>Certificate of International Business & Leadership Management</p>
                        <Image src={ucla}></Image>
                    </Card>
                    <Card style={{ marginTop: 16 }} type="inner" title="2015 - 2019" extra={<a target="_blank" rel="noopener noreferrer" href="https://www.ntu.edu.cn/main.htm">Undergraduate</a>}>
                        <p><b>Nantong University, Nantong, Jiangsu, China</b></p>
                        <p>Bachelor of Management in Information Management and Information System</p>
                        <Image src={ntu}></Image>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Aboutme;


