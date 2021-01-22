import React from 'react';
import '../../shared/Theme.css';
import './Image.css';
import Home from './Home/Home';
import Form from './Form/Form';
import Gallery from './Gallery/Gallery';
import ProServ from './ProServ/ProServ';
import About from './About/About';
import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import Payment from "../../shared/Payment/Payment";

const Image = ({ card }) => {


    const themeArgs = (card.img === 'cool' ? 'cool' : (card.img === 'marble-white' ? 'marble-white' : (card.img === 'bubbly-blue' ? 'bubbly-blue' : (card.img === 'school' ? 'school' : ''))))
    return(
        <div style={{ "textAlign": "center", "background": "var(--bg)", "textTransform": "none", "color": "white!important" }}>
            <div className="group">
                <div className={"col bg-anim " + themeArgs} id='home' style={{ position: 'relative' }}>
                    <Home card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='about'>
                <div className={"col bg-anim " + themeArgs} style={{ position: 'relative' }}>
                    <About card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='serv'>
                <div className={"col bg-anim " + themeArgs} style={{ position: 'relative' }}>
                    <ProServ card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='gallery'>
                <div className={"col bg-anim " + themeArgs} style={{ position: 'relative' }}>
                    <Gallery card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='enq'>
                <div className={"col bg-anim " + themeArgs} style={{ position: 'relative' }}>
                    <Form card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            {
                card.payment
                    ? <div id='pay'>
                        <div className={"col bg-anim " + themeArgs} style={{ width: 'auto', display: 'inline-block', position: 'relative' }}>
                            <Payment card={card}/>
                        </div>
                    </div>
                    : ''
            }

            <br/><br/><br/><br/>
            <BrowserRouter>
                <div className="fixed-bottom bg-dark" style={{ color: 'white' }}>
                    <NavHashLink smooth className='col-25p' to={'/' + card.id + '-' + card.firstName + '-' + card.lastName + '#home'}>
                        <div>
                            <i className="fad fa-home" style={{color: 'var(--theme-color)'}}></i><br />Home
                        </div>
                    </NavHashLink>
                    <NavHashLink smooth className='col-25p' to={'/' + card.id + '-' + card.firstName + '-' + card.lastName + '#about'}>
                        <div>
                            <i className="fad fa-address-card" style={{color: 'var(--theme-color)'}}></i><br />About Us
                        </div>
                    </NavHashLink>
                    <NavHashLink smooth className='col-25p' to={'/' + card.id + '-' + card.firstName + '-' + card.lastName + '#serv'}>
                        <div>
                            <i className="fad fa-box" style={{color: 'var(--theme-color)'}}></i><br />{card.products.type === 'Serv' ? 'Services' : 'Products'}
                        </div>
                    </NavHashLink>
                    <NavHashLink smooth className='col-25p' to={'/' + card.id + '-' + card.firstName + '-' + card.lastName + '#enq'}>
                        <div>
                            <i className="fad fa-edit" style={{color: 'var(--theme-color)'}}></i><br />Enquire
                        </div>
                    </NavHashLink>
                    <NavHashLink smooth className='col-25p' to={'/' + card.id + '-' + card.firstName + '-' + card.lastName + '#pay'}>
                        <div>
                            <i className="fad fa-credit-card" style={{color: 'var(--theme-color)'}}></i><br />Pay
                        </div>
                    </NavHashLink>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Image
