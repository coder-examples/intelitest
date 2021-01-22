import React from 'react';
import StandardAboutUs from "../../../shared/StandardAboutUs";

const About = ({ card }) => {
    return(
        <div>
            <div>
                <link rel="favicon" href={card.logo}/>

                    <div className={ 'text-white minimal-top' }>
                    <div key={card.id} className={'main-card'}>
                        <h3 className='title'>About Us</h3>
                    </div>
                </div>
                <svg viewBox="0 0 400 25" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <pattern id="Wave" x="0" y="0" width="100" height="25px" patternUnits="userSpaceOnUse">
                                <path d="M0 25 0 6C20 9 38 11 55 7 72 4 87 4 100 6l0 19z" id="path4"></path>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#Wave)"></rect>
                </svg>
            </div>
            <div className='body-2'>
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
