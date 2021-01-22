import React, { useState } from 'react';
import '../Gradient.css';
import { BrowserRouter } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Home = ({ card }) => {
    const fav = document.getElementById('favicon');
    fav.href = card.logo;
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return(
        <BrowserRouter>
            <div className='text-bg'>
                <div className="top-left"></div>
                <div className="top-right"></div>
                <div className="bottom-left"></div>
                <div className="bottom-right"></div>
                <div>

                    <div className={ 'minimal-top' }>
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
                            <h1 style={{ "margin": "0px" }}>{card.company}</h1>
                            <div className="dash"></div>
                            <h2 style={{ margin: '0px' }}>{card.salutation + ' ' + card.firstName + ' ' + card.lastName}</h2>
                            {
                                card.post
                                    ? <h3>({card.post})</h3>
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
                </div>
                <div className='body'>
                    <div style={{ "display": "block", "textAlign": "left", "marginLeft": "25px", "padding": "5px" }}>
                        <br />
                        <a style={{ "margin": "0px" }} href={card.map}>
                            <div className="group">
                                <p className='tl' style={{ "margin": "0px" }}><i style={{ "textAlign": "left" }} className="fad fa-map-marker-alt fa-2x"></i> &nbsp;{card.address}</p>
                            </div>
                        </a>
                        <br />
                        <a style={{ "margin": "0px" }} href={'tel:' + card.phone}>
                            <div className="group">
                                <i style={{ "textAlign": "left" }} className="fad fa-phone fa-flip-horizontal fa-2x"></i> &nbsp;
                                <p className='tl' style={{ "margin": "0px" }}>{card.phone}</p>
                            </div>
                        </a>
                        <br />
                        <a style={{ "margin": "0px" }} href={'mailto:' + card.email}>
                            <div className="group">
                                <i style={{ "textAlign": "left" }} className="fad fa-envelope fa-2x"></i> &nbsp;
                                <p className='tl' style={{ "margin": "0px" }}>{card.email}</p>
                            </div>
                        </a>
                        <br />
                        {
                            card.website
                                ? <a style={{ "marginBottom": "10px" }} href={card.website}>
                                    <div className="group">
                                        <i style={{ "textAlign": "left" }} className="fal fa-globe fa-2x"></i> &nbsp;
                                        <p className='tl' style={{ "margin": "0px" }}>{card.website.replace(/(^\w+:|^)\/\//, '')}</p>
                                    </div>
                                </a>
                                : ''
                        }

                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <a style={{ "width": "auto" }} href={card.vcf} target="__blank" className="btn-sm btn-dark theme"><i className="fad fa-download"></i> Save to Contacts</a>&nbsp;
                    </div>
                    <div className='smd'>
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
        </BrowserRouter>
    );
}

export default Home;
