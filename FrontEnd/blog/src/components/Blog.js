import React from 'react';
import axios from 'axios';
import { List,Avatar } from 'antd';
import ezlogo2 from '../static/img/ez.png';

// const blogApi = 'http://127.0.0.1:8000/api/blog/';
const blogApi = '/api/blog/'

class Blog extends React.Component {
    state = {
        articles: []
    }

    componentDidMount() {
        axios.get(blogApi)
            .then(res => {
                this.setState(
                    {
                        articles: res.data
                    });
               
            })
    }

    render() {
        return (
            <div style={{display:this.props.blogShow}}>
            <List
            itemLayout="vertical" size="large" pagination={{ onChange: page => {}, pageSize: 1}}
            dataSource={this.state.articles}
            footer=''
            renderItem={item => (
                <List.Item key={item.nid} actions='' extra=''>
                    <List.Item.Meta
                        avatar={<Avatar src={ezlogo2} />}
                        title={item.main_title}
                        description={item.sub_title}
                    />
                    {item.content}
                </List.Item>
            )}
        />
        </div>
        )
    }
}

export default Blog;