import React from 'react';
import { Collapse, Divider, Image, Carousel} from 'antd';
import { SolutionOutlined } from '@ant-design/icons';
import guess from '../static/img/projects/guess.jpg';
import spa from '../static/img/projects/spa.jpg';
import pfas from '../static/img/projects/pfas.jpg';
import imiscloud from '../static/img/projects/imiscloud.png';
import homesearch from '../static/img/projects/homesearch.png';
import his from '../static/img/projects/his.jpg';
import hds from '../static/img/projects/hds.jpg';
import excel from '../static/img/projects/excel.jpg';
import beagvs from '../static/img/projects/bea-gvs.jpg';
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
                {/* projects */}
                <div id='prj001' className='margin-97'>
                    <Divider orientation="left"><SolutionOutlined /> Projects</Divider>
                    <Collapse defaultActiveKey={['p1']} ghost>
                        <Panel className='font-bold' header="IMIS Cloud Storage" key="p1">
                            <p className='font-normal'>Apr 2020 - May 2020</p>
                            <p className='font-normal'>Django, Bootstrap, Sqlite</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/IMISCloud'>Github</a></p>
                            <Image src={imiscloud}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Gold Visualization System" key="p2">
                            <p className='font-normal'>Mar 2020 - Apr 2020</p>
                            <p className='font-normal'>Tornado, Bootstrap, Sqlite</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/BEA'>Github</a></p>
                            <Image src={beagvs}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Personal Website" key="p3">
                            <p className='font-normal'>Jan 2020 - Feb 2020</p>
                            <p className='font-normal'>Django, Bootstrap, Mysql</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/EasyEZ_V1'>Github</a></p>
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
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/DesktopAppDevelop'>Github</a></p>
                            <Image src={hds}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Hospital Information System" key="p9">
                            <p className='font-normal'>Sept 2019 - Dec 2019</p>
                            <p className='font-normal'>Java</p>
                            <p><a target='_blank' rel="noopener noreferrer" href='https://github.com/YizheZhang-Ervin/DesktopAppDevelop'>Github</a></p>
                            <Image src={his}></Image>
                        </Panel>
                        <Panel className='font-bold' header="Gamification Used by Exploratory Search System[GUESS]" key="p10">
                            <p className='font-normal'>Sept 2018 - Jun 2019</p>
                            <p className='font-normal'>Axure RP</p>
                            <Image src={guess}></Image>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        )
    }
}

export default Projects;