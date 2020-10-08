import { Button, Popover,Avatar } from 'antd';
import React from 'react';
import ezlogo from '../static/img/ez-light.png';

const content = (
    <center>Welcome to my Website.
        <br/>
        Have a nice day!
    </center>
  );

class Welcome extends React.Component {

    state ={
        rightDistance:window.innerWidth<500?'0%':'15%'
    }
    render() {
        return (
            <div>
                <header className="color-beige welcome-header"><Avatar src={ezlogo} />Easy-EZ</header>
                <main className='color-beige welcome-main' style={{right:this.state.rightDistance}}>
                    <h1 className='color-beige'>Hi, I am Yizhe Zhang</h1>
                    <p >A Front End & Full Stack Developer</p>
                    <Popover content={content} title="Hi!">
                        <Button href='/home' size="large" style={{ backgroundColor: 'black', border: '0', fontWeight: 'bold' }} className='color-beige'>
                            Take A Look&gt;&gt;
                        </Button>
                    </Popover>
                    
                </main>
                <footer className='color-beige welcome-footer'>
                    <p >Yizhe(Ervin) Zhang |&nbsp;
                        <a target="_blank" rel="noopener noreferrer" href="mailto:zhang.yizhe@northeastern.edu?subject=Please%20type%20in%20the%20subject">
                                zhang.yizhe@northeastern.edu
                        </a>
                    </p>
                </footer>
            </div>
        )
    }
}


export default Welcome;