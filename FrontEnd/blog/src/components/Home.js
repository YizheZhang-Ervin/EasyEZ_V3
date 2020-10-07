import React from 'react';
import sidephoto from '../static/img/ervin.jpg';
import ezapp from '../static/others/ezapp.apk';
import { Layout, Menu, Divider, Image } from 'antd';
import { Link } from 'react-router-dom';
import {
    LaptopOutlined, MailOutlined, LinkedinOutlined,GithubOutlined, ZhihuOutlined, ContactsOutlined, SolutionOutlined,
    CrownOutlined, DownloadOutlined, BookOutlined, ConsoleSqlOutlined, SafetyCertificateOutlined, CrownTwoTone,BankOutlined,
    MessageOutlined, LineChartOutlined
} from '@ant-design/icons';
import Blog from './Blog';
import Aboutme from './Aboutme';
import Projects from './Projects';
import MsgBoard from './MsgBoard';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends React.Component {
    state = {
        collapsed: false,
        aboutShow:'block',
        projectShow:'none',
        blogShow:'none',
        msgboardShow:'none',
        visualShow:'none'
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    changeShow(msg){
        if (msg === 'about'){
            this.setState({
                aboutShow:'block',
                projectShow:'none',
                blogShow:'none',
                msgboardShow:'none',
                visualShow:'none'
            })
        }
        else if (msg === 'blog'){
            this.setState({
                aboutShow:'none',
                projectShow:'none',
                blogShow:'block',
                msgboardShow:'none',
                visualShow:'none'
            })
        }
        else if (msg === 'project'){
            this.setState({
                aboutShow:'none',
                projectShow:'block',
                blogShow:'none',
                msgboardShow:'none',
                visualShow:'none'
            })
        }
        else if (msg === 'msgboard'){
            this.setState({
                aboutShow:'none',
                projectShow:'none',
                blogShow:'none',
                msgboardShow:'block',
                visualShow:'none'
            })
        }
        else if (msg === 'visual'){
            this.setState({
                aboutShow:'none',
                projectShow:'none',
                blogShow:'none',
                msgboardShow:'none',
                visualShow:'block'
            })
        }
    }

    render() {
        return (
            <Layout id='layout001'>
                {/* Side Bar */}
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} reverseArrow>
                    <div style={{ height: '64px', textAlign: 'center' }}>
                        <Link to='/' className='color-beige ecllipsis' style={{ display: 'inline-block', marginTop: '12px', fontSize: '1.5em' }}>EZ</Link>
                    </div>
                    <Image src={sidephoto} alt="" width="90%" />
                    <Divider style={{ width: '80%', color: 'beige' }}>Ervin</Divider>
                    <Menu theme="dark" selectedKeys={[]} mode="inline">
                        <Menu.Item key="0" icon={<CrownTwoTone />} onClick={()=>this.changeShow('about')}>
                            <a href='#smr001'>Yizhe Zhang</a>
                        </Menu.Item>
                        <Menu.Item key="1" icon={<BankOutlined />} onClick={()=>this.changeShow('about')}>
                            <a href='#edu001'>NEU</a>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<LaptopOutlined />} onClick={()=>this.changeShow('about')}>
                            <a href='#tng001'>Information Systems</a>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<ContactsOutlined />} title="Contact">
                            <Menu.Item key="3" icon={<MailOutlined />}>
                                <a target="_blank" rel="noopener noreferrer" href="mailto:zhang.yizhe@northeastern.edu?subject=Please%20type%20in%20the%20subject">
                                    Email
                                </a>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<LinkedinOutlined />}>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yizhe-zhang">
                                    Linkedin
                                </a>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<GithubOutlined />}>
                                <a target="_blank" rel="noopener noreferrer" href="https://github.com/YizheZhang-Ervin">
                                    Github
                                </a>
                            </Menu.Item>
                            <Menu.Item key="6" icon={<ZhihuOutlined />}>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.zhihu.com/people/yizhezhang">
                                    Zhihu
                                </a>
                            </Menu.Item>
                            <Menu.Item key="7" icon={<DownloadOutlined />}>
                                <a href={ezapp} download="ezapp.apk">
                                    Personal App
                            </a>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                {/* Main Part */}
                <Layout>
                    {/* Header */}
                    <Header id='header001'>
                        <Menu theme="dark" onClick={this.handleClick} mode="horizontal" selectedKeys={[]}>
                            <SubMenu key="Aboutme" icon={<CrownOutlined />} title="About Me">
                                <Menu.Item key="Technology" icon={<ConsoleSqlOutlined />} onClick={()=>this.changeShow('about')}>
                                    <a href='#tng001'>Technology Stack</a>
                                </Menu.Item>
                                <Menu.Item key="Certificates" icon={<SafetyCertificateOutlined />} onClick={()=>this.changeShow('about')}>
                                    <a href='#crf001'>Certificates</a></Menu.Item>
                                <Menu.Item key="Education" icon={<BankOutlined />} onClick={()=>this.changeShow('about')}>
                                    <a href='#edu001'>Education</a>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="Projects" icon={<SolutionOutlined />} onClick={()=>this.changeShow('project')}>
                                Projects
                            </Menu.Item>
                            <Menu.Item key="Blog" icon={<BookOutlined />} onClick={()=>this.changeShow('blog')}>
                                Blog
                            </Menu.Item>
                            <Menu.Item key="msgboard" icon={<MessageOutlined />} onClick={()=>this.changeShow('msgboard')}>
                                Message Board
                            </Menu.Item>
                            <Menu.Item key="visual" icon={<LineChartOutlined />} onClick={()=>this.changeShow('visual')}>
                                Visualization
                            </Menu.Item>
                        </Menu>
                    </Header>
                    {/* Content */}
                    <Content>
                        <Aboutme aboutShow={this.state.aboutShow}></Aboutme>
                        <Projects projectShow={this.state.projectShow}></Projects>
                        <Blog blogShow={this.state.blogShow}></Blog>
                        <MsgBoard msgboardShow={this.state.msgboardShow}></MsgBoard >
                    </Content>
                    {/* Footer */}
                    <Footer>
                        <hr />
                        <p>Ervin Zhang | &nbsp;
                        <a target="_blank" rel="noopener noreferrer" href="mailto:zhang.yizhe@northeastern.edu?subject=Please%20type%20in%20the%20subject">
                                zhang.yizhe@northeastern.edu
                        </a>
                        </p>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Home;