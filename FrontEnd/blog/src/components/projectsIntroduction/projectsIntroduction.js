import React from 'react';
import ScreenTime from './screenTime';
import NetworkFeature from './linkedinNetwork';

class ProjectIntroduction extends React.Component {
    constructor(props){
        super(props);
        this.state={
            projectName:this.props.match.params.prjname,
        }
    }
    
    render() {
        return (
            <div>
                <ScreenTime stShow={this.state.projectName==='screentime'?'block':'none'}></ScreenTime>
                <NetworkFeature stShow={this.state.projectName==='networkFeature'?'block':'none'}></NetworkFeature>
            </div>
        )
    }
}

export default ProjectIntroduction;