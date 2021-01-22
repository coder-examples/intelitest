import React from 'react';
import '../../shared/Theme.css';
import './Gradient.css';
import Home from './Home/Home';
import Form from './Form/Form';
import Gallery from './Gallery/Gallery';
import ProServ from './ProServ/ProServ';
import About from './About/About';
import { NavHashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import Payment from "../../shared/Payment/Payment";

const Gradient = ({ card }) => {


    const themeArgs = card.color === 'peach' ? 'peach' : '';
    const mainArgs = card.color === 'peach' ? 'peachmain' : '';
    return(
        <div className={mainArgs} style={{ "textAlign": "center", "background": "var(--mb)", "textTransform": "none", "color": "white!important" }}>
            <div className="group">
                <div className={themeArgs} id='home' style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <Home card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='about'>
                <div className={themeArgs} style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <About card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='serv'>
                <div className={themeArgs} style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <ProServ card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='gallery'>
                <div className={themeArgs} style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <Gallery card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            <div className="group" id='enq'>
                <div className={themeArgs} style={{ position: 'relative', width: '100%', maxWidth: '450px' }}>
                    <Form card={card} style={{ "position": "absolute" }}/>
                </div>
            </div>
            <br/><br/>
            {
                card.payment
                    ? <div className={'group'} id='pay'>
                        <div className={themeArgs} style={{ position: 'relative', width: '100%', display: 'inline-block', maxWidth: '450px' }}>
                            <Payment card={card}/>
                        </div>
                    </div>
                    : ''
            }
            <br/><br/><br/><br/>
            <BrowserRouter>
                <div className={"fixed-bottom bg-light " + (themeArgs)}>
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
                            <i className="fad fa-edit" style={{color: 'var(--text-color)'}}></i><br />Enquire
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

export default Gradient
