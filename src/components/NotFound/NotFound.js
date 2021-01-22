import React, {Component} from 'react';

class NotFound extends Component {
    render() {
        return (
            <div style={{ overflow: 'hidden', height: '100vh' }}>
                <title>Not Found</title>
                <img alt="404" src="https://illustatus.herokuapp.com/?title=Oops,%20Page%20not%20found&fill=%234f86ed"/>
            </div>
        );
    }
}

export default NotFound;
