import { List, Typography, Collapse, Card, Divider, Image, Comment } from 'antd';
import { CrownOutlined, ConsoleSqlOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import { BankOutlined } from '@ant-design/icons';
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
import self from '../static/img/summary.png';


const { Panel } = Collapse;
const techsDev = [
    'Progamming Language: Python, SQL, C++, C#, Java, Scala, GO',
    'FrontEnd Language: HTML / CSS / SASS, JavaScript / TypeScript',
    'FrontEnd Framework: Angular, React, Vue, Bootstrap, Antd, ElementUI, Ng-zorro',
    'BackEnd Framework: Django, Tornado, Flask, Express(Node.js), Meteor(Node.js)',
    'Database: Sqlite, MS SqlServer, Mysql, Oracle, PostgreSql, MongoDB',
    'DevOps: Webpack, Nginx, Docker, K8S, AWS, Git, Postman',
    'Testing: Selenium',
    'GUI/Game: Unity3d, Unreal, Tkinter, Pyqt, Pygame',
    'OS: Windows, Linux'
];

const techsData = [
    'Data Crawler: Requests+BeautifulSoup, Scrapy+Selenium',
    'Data Process: Numpy, Pandas, Scipy, Sklearn, Matplotlib, Seaborn, Echarts',
    'Business Intelligence: Power BI, Tableau, SPSS, SSIS/SSAS/SSRS',
    'Big Data: Hadoop, Spark, Kafka',
    'Machine Learning / Artificial Intelligence: Tensorflow, Keras',
    'Finance Data: Mplfinance, Investpy, Trendet, Pynance'
]

const techsOther = [
    'MultiMedia: Corel VideoStudio, PhotoShop, Adobe Flash, Adobe Audition',
    'PM: Office, Figma, Axure RP, Adobe XD, Mind Manager'
]

const data = [
    {
        author: 'Hard Power',
        avatar: <UserOutlined />,
        content: (
            <p>
                Proficient in Front-End development of Websites.
                <br />
                Be familiar with mainstream frameworks such as React/Angular/Vue(Front-End), Django/Express(Back-End).
                <br />
                Developed several individual&amp;team projects.
                <br />
                Good at optimizing user experience and improving project quality through data analysis.
            </p>
        ),
    },
    {
        author: 'Soft Power',
        avatar: <UserOutlined />,
        content: (
            <p>
                Conscientious, responsible and well-organized.
                <br />
                Have Strong adaptability and can quickly integrate into the team.
                <br />
                Have strong learning ability and can quickly master the knowledge structure.
                <br />
                Love to track the latest Front-End technology.
                <br />
                Rigorous, neat and high-quality code style.
            </p>
        ),
    },
];


class Aboutme extends React.Component {
    render() {
        return (
            <div style={{display:this.props.aboutShow}}>
                {/* summary */}
                <div id='smr001' className='margin-97'>
                    <Divider orientation="left"><CrownOutlined /> Summary</Divider>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8)' }}>
                        <Image style={{ gridColumn: '0/2' }} src={self}></Image>
                        <div style={{ gridColumn: '3/9', marginLeft: '2%' }}>
                            <List
                                className="comment-list" header='Self-appraisal'
                                itemLayout="horizontal" dataSource={data}
                                renderItem={item => (
                                    <li><Comment author={item.author} avatar={item.avatar} content={item.content} /></li>
                                )}
                            />
                        </div>
                    </div>
                </div>
                {/* technology stack */}
                <div id='tng001' className='margin-97'>
                    <Divider orientation="left"><ConsoleSqlOutlined /> Technology Stack</Divider>
                    <List
                        header='Development:'
                        bordered
                        dataSource={techsDev}
                        renderItem={item => (
                            <List.Item>
                                <Typography.Text mark>{item.split(':')[0]}:</Typography.Text> {item.split(':')[1]}
                            </List.Item>
                        )}
                    />
                    <List
                        header='Data:'
                        bordered
                        dataSource={techsData}
                        renderItem={item => (
                            <List.Item>
                                <Typography.Text mark>{item.split(':')[0]}:</Typography.Text> {item.split(':')[1]}
                            </List.Item>
                        )}
                    />
                    <List
                        header='Other:'
                        bordered
                        dataSource={techsOther}
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
                            <p><a target='_blank' rel="noopener noreferrer" href='https://insidesherpa.s3.amazonaws.com/completion-certificates/KPMG/m7W4GMqeT3bh9Nb2c_KPMG_EaQWiwTz5acSuNWjd_completion_certificate.pdf'>Link</a></p>
                            <Image src={kpmg}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Software Engineering Virtual Experience" key="c2">
                            <p className='font-normal'>JPMorgan Chase & Co (Issued Aug, 2020)</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://insidesherpa.s3.amazonaws.com/completion-certificates/JP%20Morgan/R5iK7HMxJGBgaSbvk_JPMorgan%20Chase_EaQWiwTz5acSuNWjd_completion_certificate.pdf'>Link</a></p>
                            <Image src={jpmorgan}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Google Analytics Individual Qualification" key="c3">
                            <p className='font-normal'>Google (Issued Aug, 2020)</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://skillshop.exceedlms.com/student/award/56443312'>Link</a></p>
                            <Image src={google}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Data Analytics Program" key="c4">
                            <p className='font-normal'>General Electric (Issued Aug, 2020)</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://insidesherpa.s3.amazonaws.com/completion-certificates/General%20Electric%20%28GE%29/ThbphD5N5WRsd9Mxo_General%20Electric_EaQWiwTz5acSuNWjd_completion_certificate.pdf'>Link</a></p>
                            <Image src={ge}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Go.Data" key="c5">
                            <p className='font-normal'>World Health Organization (Issued Aug, 2020)</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://www.who.int/'>Link</a></p>
                            <Image src={who}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Visualization Data By Python" key="c6">
                            <p className='font-normal'>IBM (Issued May, 2020)</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://courses.edx.org/certificates/1ce4ab37a776413595b03e884461c396'>Link</a></p>
                            <Image src={ibm}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Python 3" key="c7">
                            <p className='font-normal'>SoloLearn (Issued December, 2019)</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='http://www.linkedin.com/in/yizhe-zhang'>Link</a></p>
                            <Image src={python}></Image>
                        </Panel>
                        <Panel className='font-bold' header="JavaScript" key="c8">
                            <p className='font-normal'>SoloLearn (Issued December, 2019)</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='http://www.linkedin.com/in/yizhe-zhang'>Link</a></p>
                            <Image src={js}></Image>
                        </Panel>
                        <Panel className='font-bold' header="BI Developer" key="c9">
                            <p className='font-normal'>Bluelime (Issued November,2019)</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://www.udemy.com/certificate/UC-D2TDUN3J/'>Link</a></p>
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


