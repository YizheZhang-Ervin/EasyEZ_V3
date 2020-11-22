import React from 'react';
import { Collapse, Divider, Image, Carousel} from 'antd';
import { SolutionOutlined,CalendarOutlined } from '@ant-design/icons';
import guess from '../static/img/projects/guess.jpg';
import spa from '../static/img/projects/spa.jpg';
import pfas from '../static/img/projects/pfas.jpg';
import easyv1 from '../static/img/projects/easyv1.png';
import easyv2 from '../static/img/projects/easyv2.png';
import easyv3 from '../static/img/projects/easyv3.png';
import imiscloud from '../static/img/projects/imiscloud.png';
import homesearch from '../static/img/projects/homesearch.png';
import his from '../static/img/projects/his.jpg';
import hds from '../static/img/projects/hds.jpg';
import excel from '../static/img/projects/excel.jpg';
import beagvs from '../static/img/projects/bea-gvs.jpg';
import screentime from '../static/img/projects/screentime.png';
import crs1 from '../static/img/projects/bea-gvs-crs.png';
import crs2 from '../static/img/projects/alg-crs.png';
import crs3 from '../static/img/projects/harrier-crs.png';
import crs4 from '../static/img/projects/hnas-crs.jpg';
import crs5 from '../static/img/projects/homesearch-crs.png';
import crs6 from '../static/img/projects/pfas-crs.png';

const { Panel } = Collapse;

class Projects extends React.Component {
    render() {
        return (
            <div style={{display:this.props.projectShow}}>
                {/* carousel */}
                <div id='crs001' style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
                    <Carousel autoplay style={{ gridColumn: '0' }}>
                        <Image src={crs1} ></Image>
                        <Image src={crs2} ></Image>
                        <Image src={crs3} ></Image>
                        <Image src={crs4} ></Image>
                        <Image src={crs5} ></Image>
                        <Image src={crs6} ></Image>
                    </Carousel>
                    <Carousel autoplay style={{ gridColumn: '1' }}>
                        <Image src={crs6} ></Image>
                        <Image src={crs5} ></Image>
                        <Image src={crs4} ></Image>
                        <Image src={crs3} ></Image>
                        <Image src={crs2} ></Image>
                        <Image src={crs1} ></Image>
                    </Carousel>
                </div>
                {/* projects */}
                <div id='prj001' className='margin-97'>
                    <Divider orientation="left"><SolutionOutlined /> Projects</Divider>
                    <Divider orientation='left' ><CalendarOutlined /> 2020</Divider>
                    <Collapse defaultActiveKey={['p13']} ghost>
                        <Panel className='font-bold' header="EGGroup" key="p15">
                            <p className='font-normal'>Oct 2020 - Future</p>
                            <p className='font-normal'>Vue, Express, Mysql, Antd</p>
                            <p><a rel="noopener noreferrer" href='/'>Website</a></p>
                            {/* <Image src={}></Image> */}
                        </Panel>
                        <Panel className='font-bold' header="LinkedIn Network New Feature" key="p14">
                            <p className='font-normal'>Sept 2020 - Nov 2020</p>
                            <p className='font-normal'>Sketch, Wireframe, Prototype</p>
                            <p><a rel="noopener noreferrer" href='/projects/networkFeature'>UX Portfolio</a></p>
                            {/* <Image src={}></Image> */}
                        </Panel>
                        <Panel className='font-bold' header="Screen Time App" key="p13">
                            <p className='font-normal'>Sept 2020 - Nov 2020</p>
                            <p className='font-normal'>Sketch, Wireframe, Prototype</p>
                            <p><a rel="noopener noreferrer" href='/projects/screentime'>UX Portfolio</a></p>
                            <Image src={screentime}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Cloud Storage App" key="p12">
                            <p className='font-normal'>Apr 2020 - May 2020</p>
                            <p className='font-normal'>Django, Bootstrap, Sqlite</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/IMISCloud'>Github</a></p>
                            <Image src={imiscloud}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Home Rent Website" key="p11">
                            <p className='font-normal'>Jan 2020 - Apr 2020</p>
                            <p className='font-normal'>Angular, Express, MongoDB, Ng-Zorro</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/MeteorHome'>Github</a></p>
                            <Image src={homesearch}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Online Spreadsheet" key="p10">
                            <p className='font-normal'>HTML/CSS/JS</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/WebAppDevelop'>Github</a></p>
                            <Image src={excel}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Long Page Website" key="p9">
                            <p className='font-normal'>HTML/CSS/JS</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/WebAppDevelop'>Github</a></p>
                            <Image src={spa}></Image>
                        </Panel>
                        <Panel className='font-bold' header="MA Education Data Analysis" key="p8">
                            <p className='font-normal'>Python(Jupyter Notebook, Numpy, Pandas, Scipy, Sklearn, Matplotlib)</p>
                        </Panel>
                        <Panel className='font-bold' header="Gold Visualization Website" key="p7">
                            <p className='font-normal'>Mar 2020 - Apr 2020</p>
                            <p className='font-normal'>Tornado, Bootstrap, Sqlite</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/BEA'>Github</a></p>
                            <Image src={beagvs}></Image>
                            <br/>
                            <Image src={pfas}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Personal Website V3.0" key="p6">
                            <p className='font-normal'>Oct 2020 - Now</p>
                            <p className='font-normal'>Angular, Django, Sqlite</p>
                            <Image src={easyv3}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Personal Website V2.0" key="p5">
                            <p className='font-normal'>Mar 2020 - Oct 2020</p>
                            <p className='font-normal'>Bootstrap, Django, Mysql</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/EasyEZ_V2'>Github</a></p>
                            <Image src={easyv2}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Personal Website V1.0" key="p4">
                            <p className='font-normal'>Jan 2020 - Mar 2020</p>
                            <p className='font-normal'>Django, Mysql</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/EasyEZ_V1'>Github</a></p>
                            <Image src={easyv1}></Image>
                        </Panel>
                    </Collapse>
                    <Divider orientation='left' ><CalendarOutlined /> 2019</Divider>
                    <Collapse defaultActiveKey={['p3']} ghost>
                        <Panel className='font-bold' header="Hotel Database System" key="p3">
                            <p className='font-normal'>Sept 2019 - Dec 2019</p>
                            <p className='font-normal'>Java, Sqlserver, Power BI</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/DesktopAppDevelop'>Github</a></p>
                            <Image src={hds}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Hospital Information System" key="p2">
                            <p className='font-normal'>Sept 2019 - Dec 2019</p>
                            <p className='font-normal'>Java</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/DesktopAppDevelop'>Github</a></p>
                            <Image src={his}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Gamification Used by Exploratory Search System[GUESS]" key="p1">
                            <p className='font-normal'>Sept 2018 - Jun 2019</p>
                            <p className='font-normal'>Axure RP</p>
                            <Image src={guess}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Douban Website" key="p0">
                            <p className='font-normal'>Sept 2018 - Jan 2019</p>
                            <p className='font-normal'>JSP</p>
                        </Panel>
                        <Panel className='font-bold' header="Little Iron Pot App" key="p00">
                            <p className='font-normal'>Mar 2018 - Jun 2018</p>
                            <p className='font-normal'>MIT App Inventor</p>
                        </Panel>
                        <Panel className='font-bold' header="Tank Battle Game" key="p000">
                            <p className='font-normal'>Mar 2018 - Jun 2018</p>
                            <p className='font-normal'>Java AWT</p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default Projects;