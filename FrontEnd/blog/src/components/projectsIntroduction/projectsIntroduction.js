import React from 'react';
import ScreenTime from './screenTime';
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
            </div>
        )
    }
}

export default ProjectIntroduction;