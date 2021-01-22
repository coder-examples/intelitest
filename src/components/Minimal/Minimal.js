import React from 'react';
import Home from './Home/Home'
import './Minimal.css';
import '../../shared/Theme.css';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import ProServ from './ProServ/ProServ';
import Form from './Form/Form';
import { BrowserRouter } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Payment from "../../shared/Payment/Payment";

const Minimal = ({ card }) => {


    return(
        <div className={(card.color === 'purple' ? 'theme-minimal' :(card.color === 'teal' ? 'theme-minimal-teal' :(card.color === 'orange' ? 'theme-minimal-orange' :(card.color === 'skyblue' ? 'theme-minimal-skyblue' : 'theme-minimal'))))} style={{ "textAlign": "center", "background": "url(https://i.imgur.com/F6yumIQ.jpg)", "textTransform": "none", "color": "white!important" }}>
            <div id='home' className='col' style={{"display": "inline-block"}}>
                <div className={'bg-dark'}>
                    <Home card={card}/>
                </div>
            </div>
            <br/><br/>
            <div id='about' className='col' style={{"display": "inline-block"}}>
                <div className={'bg-dark'}>
                    <About card={card} />
                </div>
            </div>
            <br/><br/>
            {
                card.products.length !== 0
                ? <div id='serv'>
                    <div className='col' style={{"display": "inline-block"}}>
                        <div className={'bg-dark'}>
                            <ProServ card={card} />
                        </div>
                    </div>
                    <br/><br/>
                </div>
                : ''
            }
            {
                card.gallery
                ? <div id='gallery'>
                    <div className='col' style={{"display": "inline-block"}}>
                     <div className={'bg-dark'}>
                        <Gallery card={card} />
                     </div>
                 </div>
                 <br /><br/>
                </div>
                : ''
            }
            <div id='enq' className='col' style={{"display": "inline-block"}}>
                <div style={{ background: '#2e2e2e' }}>
                    <Form card={card} />
                </div>
            </div>
            <br/><br/>
            {
                card.payment
                    ? <div className="group col" id='pay'>
                        <div style={{ background: '#2e2e2e', display: 'inline-block' }}>
                            <Payment card={card}/>
                        </div>
                    </div>
                    : ''
            }
            <br/><br/><br/><br/>
            <BrowserRouter>
                <div style={{ padding: '5px' }} className={`fixed-bottom bg-light`}>
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
                            <i className="fad fa-edit" style={{color: 'var(--theme-color)'}}></i><br />Enquire Now
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
    );
}

export default Minimal;
