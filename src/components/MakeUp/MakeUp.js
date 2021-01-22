import React from 'react';
import '../../shared/Theme.css';
import './MakeUp.css';
import Home from './Home/Home';
import Form from './Form/Form';
import Gallery from './Gallery/Gallery';
import ProServ from './ProServ/ProServ';
import About from './About/About';
import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import Payment from "../../shared/Payment/Payment";

const MakeUp = ({ card }) => {


    return(
        <div style={{ "textAlign": "center", "background": "url(https://i.imgur.com/asD0q8q.jpg)", "textTransform": "none", "color": "black!important" }}>
            <div className="group" style={{ "background": "url(https://i.imgur.com/asD0q8q.jpg)" }}>
                <div className='transparent' id='home' style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <Home card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div style={{ "background": "url(https://i.imgur.com/asD0q8q.jpg)" }} className="group" id='about'>
                <div className='transparent' style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <About card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div style={{ "background": "url(https://i.imgur.com/asD0q8q.jpg)" }} className="group" id='serv'>
                <div className='transparent' style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <ProServ card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div style={{ "background": "url(https://i.imgur.com/asD0q8q.jpg)" }} className="group" id='gallery'>
                <div className='transparent' style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <Gallery card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div style={{ "background": "url(https://i.imgur.com/asD0q8q.jpg)" }} className="group" id='enq'>
                <div className='transparent' style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <Form card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            {
                card.payment
                    ? <div style={{ "background": "url(https://i.imgur.com/asD0q8q.jpg)" }} className="group" id='pay'>
                        <div className='transparent' style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                            <Payment card={card}/>
                        </div>
                    </div>
                    : ''
            }
            <br/><br/><br/><br/>
            <BrowserRouter>
                <div className={"fixed-bottom bg-light "}>
                    <NavHashLink smooth className='col-25p' to={'/' + card.id + '-' + card.firstName + '-' + card.lastName + '#home'}>
                        <div>
                            <i className="fad fa-home" style={{color: 'var(--text-color)'}}></i><br />Home
                        </div>
                    </NavHashLink>
                    <NavHashLink smooth className='col-25p' to={'/' + card.id + '-' + card.firstName + '-' + card.lastName + '#about'}>
                        <div>
                            <i className="fad fa-address-card" style={{color: 'var(--text-color)'}}></i><br />About Us
                        </div>
                    </NavHashLink>
                    <NavHashLink smooth className='col-25p' to={'/' + card.id + '-' + card.firstName + '-' + card.lastName + '#serv'}>
                        <div>
                            <i className="fad fa-box" style={{color: 'var(--text-color)'}}></i><br />{card.products.type === 'Serv' ? 'Services' : 'Products'}
                        </div>
                    </NavHashLink>
                    <NavHashLink smooth className='col-25p' to={'/' + card.id + '-' + card.firstName + '-' + card.lastName + '#enq'}>
                        <div>
                            <i className="fad fa-edit" style={{color: 'var(--text-color)'}}></i><br />Enquire Now
                        </div>
                    </NavHashLink>
                    <NavHashLink smooth className='col-25p' to={'/' + card.id + '-' + card.firstName + '-' + card.lastName + '#pay'}>
                        <div>
                            <i className="fad fa-credit-card" style={{color: 'var(--text-color)'}}></i><br />Pay
                        </div>
                    </NavHashLink>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default MakeUp;
