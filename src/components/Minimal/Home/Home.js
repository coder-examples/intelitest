import React, { useState } from 'react';
import {Carousel} from "react-bootstrap";
import '../Minimal.css'

const Home = ({ card }) => {
    var fav = document.getElementById('favicon');
    fav.href = card.logo;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
        return(
            <div>
                <div>

                    <div className={ 'text-white minimal-top' }>
                    <div key={card.id} className={'main-card'}>
                        <Carousel style={{ display: 'inline-block', width: '96%' }} interval={3000} activeIndex={index} onSelect={handleSelect}>
                            {
                                card.gallery.slider.map(photo => {
                                    return(
                                        <Carousel.Item key={photo.text}>
                                            <img
                                                className="d-block w-100"
                                                src={photo.text}
                                                alt=""
                                            />
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                        <img src={card.logo} alt=""/>
                        <h1>{card.company}</h1>
                        <div style={{"width": "40%", "backgroundColor": "var(--theme-color)", "height":"2px", "display": "inline-block"}}></div>
                        <h3>{card.salutation + ' ' + card.firstName + ' ' + card.lastName}</h3>
                        {
                            card.post
                            ? <h4>({card.post})</h4>
                            : ''
                        }
                        <div className="big-set">
                            <a style={{ width: "99px!important" }} href={"tel:" + card.phone} className="btn-sm btn-dark theme"><i className="fad fa-phone fa-flip-horizontal"></i> Call</a> &nbsp;
                            <a style={{ width: "99px!important" }} href={"https://wa.me/" + card.whatsApp} className="btn-sm btn-dark theme"><i className="fab fa-whatsapp"></i> Whatsapp</a> &nbsp;
                            <a style={{ width: "99px!important" }} href={"mailto:" + card.email} className="btn-sm btn-dark theme"><i className="fad fa-envelope"></i> Mail</a> &nbsp;
                            <a style={{ width: "99px!important" }} href={card.map} target="__blank" className="btn-sm btn-dark theme"><i className="fad fa-map-marker-alt"></i> Direction</a>&nbsp;
                        </div>
                        <div className="medium-set">
                            <a style={{ width: "99px!important" }} href={"tel:" + card.phone} className="btn-sm btn-dark theme"><i className="fad fa-phone"></i> Call</a> &nbsp;
                            <a style={{ width: "99px!important" }} href={"https://api.whatsapp.com/send?phone=" + card.whatsApp + '&text=Hello%20I%20am%20intrested&source=&data=&app_absent='} className="btn-sm btn-dark theme"><i className="fab fa-whatsapp"></i> Whatsapp</a> &nbsp;
                            <a style={{ width: "99px!important" }} href={"mailto:" + card.email} className="btn-sm btn-dark theme"><i className="fad fa-envelope"></i> Mail</a> &nbsp;
                            <div className="mt-md">
                                <a style={{ width: "99px!important" }} href={card.map} target="__blank" className="btn-sm btn-dark theme"><i className="fad fa-map-marker-alt"></i> Direction</a>&nbsp;
                            </div>
                        </div>
                        <div className="small-set">
                            <div className="mt-md">
                                <a style={{ width: "99px!important" }} href={"tel:" + card.phone} className="btn-sm btn-dark theme"><i className="fad fa-phone fa-flip-horizontal"></i> Call</a> &nbsp;
                                <a style={{ width: "99px!important" }} href={"https://wa.me/" + card.whatsApp} className="btn-sm btn-dark theme"><i className="fab fa-whatsapp"></i> Whatsapp</a> &nbsp;
                            </div>
                            <div className="mt-md">
                                <a style={{ width: "99px!important" }} href={"mailto:" + card.email} className="btn-sm btn-dark theme"><i className="fad fa-envelope"></i> Mail</a> &nbsp;
                                <a style={{ width: "99px!important" }} href={card.map} target="__blank" className="btn-sm btn-dark theme"><i className="fad fa-map-marker-alt"></i> Direction</a>&nbsp;
                            </div>
                        </div>
                        <div style={{"display": "block", "height": "10px"}}></div>
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
                    <div style={{ "display": "block", "textAlign": "left", "marginLeft": "25px", "padding": "5px", color: "var(--text-color)!important" }}>
                        <br />
                        <a href={card.map}>
                            <div className="group">
                                <i style={{ "textAlign": "left", color: 'white' }} className="fad fa-map-marker-alt fa-2x"></i> &nbsp;
                                <p style={{"color": "white"}}>{card.address}</p>
                            </div>
                        </a>
                        <br />
                        <a href={'tel:' + card.phone}>
                            <div className="group">
                                <i style={{ "textAlign": "left", color: 'white' }} className="fad fa-phone fa-2x"></i> &nbsp;
                                <p style={{"color": "white"}}>{card.phone}</p>
                            </div>
                        </a>
                        <br />
                        <a href={'mailto:' + card.email}>
                            <div className="group">
                                <i style={{ "textAlign": "left", color: 'white' }} className="fad fa-envelope fa-2x"></i> &nbsp;
                                <p style={{"color": "white"}}>{card.email}</p>
                            </div>
                        </a>
                        <br />
                        {
                            card.website
                            ? <a style={{ "marginBottom": "10px" }} href={card.website}>
                                <div className="group">
                                    <i style={{ "textAlign": "left", color: 'white' }} className="fal fa-globe fa-2x"></i> &nbsp;
                                    <p style={{ "margin": "0px", color: 'white' }}>{card.website.replace(/(^\w+:|^)\/\//, '')}</p>
                                </div>
                            </a>
                            : ''
                        }
                    </div>
                    <div style={{"textAlign": "right", "padding": "15px"}} className='bg-dark'>
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            <a style={{ "width": "auto" }} href={card.vcf} target="__blank" className="btn-sm btn-dark theme"><i className="fad fa-download"></i> Save to Contacts</a>&nbsp;
                        </div>
                        {
                            card.social_media.facebook
                                ? <a target="__blank" style={{ "display": "inline-block", "margin": "5px" }} href={card.social_media.facebook}><i className="fab fa-facebook fa-2x" style={{ "color": "dodgerblue" }}></i></a>
                                : ''
                        }
                        {   card.social_media.youtube
                            ? <a target="__blank" href={card.social_media.youtube} style={{ "display": "inline-block", "margin": "5px" }}>
                                <div style={{ "height": "25px", "width": "25px", "borderRadius": "50%" }}>
                                    <i className="fab fa-youtube fa-2x" style={{ "color": "red" }}></i>
                                </div>
                            </a>
                            : ''
                        }
                        {   card.social_media.insta
                            ? <a target="__blank" href={card.social_media.insta} style={{ "display": "inline-block", "margin": "5px" }}>
                                <i className="fab insta fa-instagram" style={{ "color": "white", "fontSize": "25px" }}></i>
                            </a>
                            : ''
                        }
                        {   card.social_media.twitter
                            ? <a target="__blank" href={card.social_media.twitter} style={{ "display": "inline-block", "marginRight": "5px" }}>
                                <i className="fab fa-twitter twitter"></i>
                            </a>
                            : ''
                        }
                        {   card.social_media.linkedin
                            ? <a target="__blank" href={card.social_media.linkedin} style={{ "display": "inline-block", "marginRight": "5px" }}>
                                <i className="fab fa-linkedin-in linkedin"></i>
                            </a>
                            : ''
                        }
                    </div>
                </div>
            </div>
        );
}

export default Home;
