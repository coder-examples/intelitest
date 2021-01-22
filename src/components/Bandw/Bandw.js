import React from 'react';
import '../../shared/Theme.css';
import './Bandw.css';
import Home from './Home/Home';
import Form from './Form/Form';
import Gallery from './Gallery/Gallery';
import ProServ from './ProServ/ProServ';
import About from './About/About';
import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import Payment from "../../shared/Payment/Payment";

const Bandw = ({ card }) => {


    return(
        <div style={{ "textAlign": "center", "background": "var(--bg)", "textTransform": "none", "color": "white!important" }}>
            <div className="group">
                <div className={card.color === "white-n-blue" ? 'white-n-blue' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'neon' ? 'neon' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'seablue' ? 'seablue' : (card.color === 'black-n-pink' ? 'black-n-pink' : 'white')))))} id='home' style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <Home card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='about'>
                <div className={card.color === "white-n-blue" ? 'white-n-blue' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'neon' ? 'neon' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'seablue' ? 'seablue' : (card.color === 'black-n-pink' ? 'black-n-pink' : 'white')))))} style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <About card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='serv'>
                <div className={card.color === "white-n-blue" ? 'white-n-blue' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'neon' ? 'neon' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'seablue' ? 'seablue' : (card.color === 'black-n-pink' ? 'black-n-pink' : 'white')))))} style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <ProServ card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='gallery'>
                <div className={card.color === "white-n-blue" ? 'white-n-blue' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'neon' ? 'neon' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'seablue' ? 'seablue' : (card.color === 'black-n-pink' ? 'black-n-pink' : 'white')))))} style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <Gallery card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='enq'>
                <div className={card.color === "white-n-blue" ? 'white-n-blue' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'neon' ? 'neon' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'seablue' ? 'seablue' : (card.color === 'black-n-pink' ? 'black-n-pink' : 'white')))))} style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <Form card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            {
                card.payment
                    ? <div className="group" id='pay'>
                        <div className={card.color === "white-n-blue" ? 'white-n-blue' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'neon' ? 'neon' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'seablue' ? 'seablue' : (card.color === 'black-n-pink' ? 'black-n-pink' : 'white')))))} style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '450px' }}>
                            <Payment card={card}/>
                        </div>
                    </div>
                    : ''
            }
            <br/><br/><br/><br/>
            <BrowserRouter>
                <div className={"fixed-bottom bg-light " + (card.color === "white-n-blue" ? 'white-n-blue' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'neon' ? 'neon' : (card.color === 'black-n-blue' ? 'black-n-blue' : (card.color === 'seablue' ? 'seablue' : (card.color === 'black-n-pink' ? 'black-n-pink' : 'white'))))))}>
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

export default Bandw
