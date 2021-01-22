import React from 'react';
import StandardAboutUs from "../../../shared/StandardAboutUs";

const About = ({ card }) => {
    return(
        <div className='text-bg'>
            <div className="top-left"></div>
            <div className="top-right"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
            <div>
                <link rel="favicon" href={card.logo}/>

                    <div className="text-bg">
                    <div key={card.id} className={'main-card'}>
                        <h3 className='title'>About Us</h3>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ "display": "block", "textAlign": "left", "marginLeft": "25px", "padding": "15px" }}>
                    <div className="group">
                        <b>Nature of Business: </b>
                        {' ' + card.about.nature}
                    </div>
                    <br/>
                    <div className="group">
                        <b>Our Specialities:</b>
                    </div>
                    <ul>
                        {
                            card.about.specialities.map((spec, i) => {
                                return <li key={spec.text}>{spec.text}</li>;
                            })
                        }
                    </ul>
<h3>About Us</h3>
{
                        card.about.default
                            ? <StandardAboutUs info={card.about.info}/>
                            : (
                                card.description ?
                                    card.about.description.map((para, i) => {
                                        return(
                                            <div key={para.text}>
                                                <p>{para.text}</p><br/>
                                            </div>
                                        );
                                    })
                                : ''
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default About;
