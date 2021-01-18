import React from 'react';
import { Collapse, Divider, Image, Carousel} from 'antd';
import { SolutionOutlined,CalendarOutlined } from '@ant-design/icons';
import guess from '../static/img/projects/guess.jpg';
import pfas from '../static/img/projects/pfas.jpg';
import easyv1 from '../static/img/projects/easyv1.png';
import easyv2 from '../static/img/projects/easyv2.png';
import easyv3 from '../static/img/projects/easyv3.png';
import imiscloud from '../static/img/projects/imiscloud.png';
import homesearch from '../static/img/projects/homesearch-crs.png';
import his from '../static/img/projects/his.jpg';
import hds from '../static/img/projects/hds.jpg';
import beagvs from '../static/img/projects/bea-gvs-crs.png';
import screentime from '../static/img/projects/screentime.png';
import networkfeature from '../static/img/projects/networkfeature.png'
import crs3 from '../static/img/projects/hnas-crs.jpg';
import eggroup from '../static/img/projects/eggroup.png';
import fishgroup from '../static/img/projects/fishgroup.png';
import sharingbike from '../static/img/projects/sharingbike.png'

const { Panel } = Collapse;

class Projects extends React.Component {
    render() {
        return (
            <div style={{display:this.props.projectShow}}>
                {/* carousel */}
                <div id='crs001' style={{ display: 'grid', gridTemplateColumns: '50% 50%' }}>
                    <Carousel autoplay style={{ gridColumn: '0' }}>
                        <Image src={beagvs} ></Image>
                        <Image src={homesearch} ></Image>
                        <Image src={crs3} ></Image>
                        <Image src={easyv3} ></Image>
                        <Image src={fishgroup}></Image>
                        <Image src={sharingbike}></Image>
                    </Carousel>
                    <Carousel autoplay style={{ gridColumn: '1' }}>
                        <Image src={sharingbike}></Image>
                        <Image src={fishgroup}></Image>
                        <Image src={easyv3} ></Image>
                        <Image src={crs3} ></Image>
                        <Image src={homesearch} ></Image>
                        <Image src={beagvs} ></Image>
                    </Carousel>
                </div>
                {/* projects */}
                <div id='prj001' className='margin-97'>
                    <Divider orientation="left"><SolutionOutlined /> Projects</Divider>
                    <Divider orientation='left' ><CalendarOutlined /> 2021</Divider>
                    <Collapse defaultActiveKey={['p23']} ghost>
                        <Panel className='font-bold' header="FinTech Algorithms" key="p23">
                            <p className='font-normal'>Jan 2021 - April 2021</p>
                            <p className='font-normal'>Vue, Django, Sqlite, ElementUI</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/FinTech_Algorithms'>Github</a></p>
                        </Panel>
                        <Panel className='font-bold' header="EGGroup" key="p22">
                            <p className='font-normal'>Jan 2021 - Future</p>
                            <p className='font-normal'>Vue, Express, Mysql, ElementUI</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/EGGroup_V2'>Github</a></p>
                            <Image src={eggroup}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Sharing Bike System" key="p21">
                            <p className='font-normal'>Jan 2021</p>
                            <p className='font-normal'>Django, Sqlite, Echarts</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/SharingBike'>Github</a></p>
                            <Image src={sharingbike} width="50%"></Image>
                        </Panel>
                    </Collapse>
                    <Divider orientation='left' ><CalendarOutlined /> 2020</Divider>
                    <Collapse defaultActiveKey={['p20']} ghost>
                        <Panel className='font-bold' header="FinTech - Fixed Income Security (NS Model)" key="p20">
                            <p className='font-normal'>Sept 2020 - Nov 2020</p>
                            <p className='font-normal'>Vue, Flask, Echarts</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/FinTech_FishGroup'>Github</a></p>
                            <Image src={fishgroup} width="50%"></Image>
                        </Panel>
                        <Panel className='font-bold' header="LinkedIn Network New Feature" key="p19">
                            <p className='font-normal'>Sept 2020 - Nov 2020</p>
                            <p className='font-normal'>Sketch, Wireframe, Prototype</p>
                            <p><a rel="noopener noreferrer" href='/projects/networkFeature'>UX Portfolio</a></p>
                            <Image src={networkfeature} width="50%"></Image>
                        </Panel>
                        <Panel className='font-bold' header="Screen Time App" key="p18">
                            <p className='font-normal'>Sept 2020 - Nov 2020</p>
                            <p className='font-normal'>Sketch, Wireframe, Prototype</p>
                            <p><a rel="noopener noreferrer" href='/projects/screentime'>UX Portfolio</a></p>
                            <Image src={screentime}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Quantitative Nutriology" key="p17">
                            <p className='font-normal'>June 2020 - August 2020</p>
                            <p className='font-normal'>Python</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/Knowledge_QuantitativeNutriology'>Github</a></p>
                        </Panel>
                        <Panel className='font-bold' header="Cryptography" key="p16">
                            <p className='font-normal'>June 2020 - August 2020</p>
                            <p className='font-normal'>Python</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/Knowledge_Cryptography'>Github</a></p>
                        </Panel>
                        <Panel className='font-bold' header="Cloud Storage App" key="p15">
                            <p className='font-normal'>Apr 2020 - May 2020</p>
                            <p className='font-normal'>Django, Bootstrap, Sqlite</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/MobileApp_IMISCloud'>Github</a></p>
                            <Image src={imiscloud}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Home Rent Website" key="p14">
                            <p className='font-normal'>Jan 2020 - Apr 2020</p>
                            <p className='font-normal'>Angular, Express, MongoDB, Ng-Zorro</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/MeteorHome'>Github</a></p>
                            <Image src={homesearch} width="50%"></Image>
                        </Panel>
                        <Panel className='font-bold' header="To do List" key="p13">
                            <p className='font-normal'>Jan 2020 - Apr 2020</p>
                            <p className='font-normal'>Angular, Express, MongoDB</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/Course_WebDesign/tree/master/Todolist'>Github</a></p>
                        </Panel>
                        <Panel className='font-bold' header="MA Education Data Analysis" key="p12">
                            <p className='font-normal'>Python (Jupyter Notebook, Numpy, Pandas, Scipy, Sklearn, Matplotlib)</p>
                        </Panel>
                        <Panel className='font-bold' header="Harrier Web Hunter" key="p11">
                            <p className='font-normal'>Mar 2020 - Apr 2020</p>
                            <p className='font-normal'>Flask, requests</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/WebApp_Harrier'>Github</a></p>
                        </Panel>
                        <Panel className='font-bold' header="FinTech - Gold Visualization" key="p10">
                            <p className='font-normal'>Mar 2020 - Apr 2020</p>
                            <p className='font-normal'>Tornado, Bootstrap, Sqlite</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/FinTech_BEA'>Github</a></p>
                            <Image src={beagvs} width="50%"></Image>
                            <br/>
                            <Image src={pfas}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Personal Website V3.0" key="p9">
                            <p className='font-normal'>Oct 2020 - Now</p>
                            <p className='font-normal'>Angular, Django, Sqlite</p>
                            <Image src={easyv3} width="50%"></Image>
                        </Panel>
                        <Panel className='font-bold' header="Personal Website V2.0" key="p8">
                            <p className='font-normal'>Mar 2020 - Oct 2020</p>
                            <p className='font-normal'>Bootstrap, Django, Mysql</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/EasyEZ_V2'>Github</a></p>
                            <Image src={easyv2}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Personal Website V1.0" key="p7">
                            <p className='font-normal'>Jan 2020 - Mar 2020</p>
                            <p className='font-normal'>Django, Mysql</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/EasyEZ_V1'>Github</a></p>
                            <Image src={easyv1}></Image>
                        </Panel>
                    </Collapse>
                    <Divider orientation='left' ><CalendarOutlined /> 2019</Divider>
                    <Collapse defaultActiveKey={['p6']} ghost>
                        <Panel className='font-bold' header="Hotel Database System" key="p6">
                            <p className='font-normal'>Sept 2019 - Dec 2019</p>
                            <p className='font-normal'>Java, Sqlserver, Power BI</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/Course_InfoSystems'>Github</a></p>
                            <Image src={hds}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Hospital Information System" key="p5">
                            <p className='font-normal'>Sept 2019 - Dec 2019</p>
                            <p className='font-normal'>Java</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/Course_InfoSystems'>Github</a></p>
                            <Image src={his}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Gamification Used by Exploratory Search System[GUESS]" key="p4">
                            <p className='font-normal'>Sept 2018 - Jun 2019</p>
                            <p className='font-normal'>Axure RP</p>
                            <Image src={guess}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Douban Website" key="p3">
                            <p className='font-normal'>Sept 2018 - Jan 2019</p>
                            <p className='font-normal'>JSP</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/Course_JavaJSP'>Github</a></p>
                        </Panel>
                        <Panel className='font-bold' header="Little Iron Pot App" key="p2">
                            <p className='font-normal'>Mar 2018 - Jun 2018</p>
                            <p className='font-normal'>MIT App Inventor</p>
                        </Panel>
                        <Panel className='font-bold' header="Tank Battle Game" key="p1">
                            <p className='font-normal'>Mar 2018 - Jun 2018</p>
                            <p className='font-normal'>Java AWT</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/Course_JavaJSP'>Github</a></p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default Projects;