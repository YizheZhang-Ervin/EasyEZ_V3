import React from 'react';
import { Result, Button } from 'antd';

class Error extends React.Component{
    render(){
        return(
            <>
                <Result
                    style={{position: 'fixed',top: '15%',right: '15%',textAlign: 'center'}}
                    status="404"
                    title={<h2 style={{color: 'beige'}}>"Error Route!"</h2>}
                    subTitle={<h3 style={{color: 'beige'}}>"Sorry, something went wrong."</h3>}
                    extra={<Button style={{fontSize:'1.5em',color:'beige'}} size='large' type="ghost" href='/'>Back Home</Button>}
                />
            </>
        )
    }
}

export default Error;