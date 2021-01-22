import React, {Component} from 'react';

const General = ({ info }) => {
    return (
        <div>
            <ul style={{ margin: '0' }}>
                <li>
                    {`${info.orgName} started in year ${info.startDate}.`}
                </li>
                <li>
                    {`The business is managed by ${info.partners}.`}
                </li>
                <li>
                    {`We are mainly engaged into ${info.dealingIn}`}
                </li>
                <li>
                    {`We are located ${info.locations}.`}
                </li>
                <li>
                    {`We provide wide range of ${info.wideRange}.`}
                </li>
            </ul>
        </div>
    );
}

class StandardAboutUs extends Component {
    renderSwitch() {
        const { info } = this.props;
        return <General info={info}/>
    }
    render() {
        return this.renderSwitch();
    }
}

export default StandardAboutUs;
