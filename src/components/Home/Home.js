import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            rpc1: '1000',
            rpc2: '299',
            upc1: '',
            upc2: '',
            sbioyv: '299',
            sbityv: '599',
            sbifyv: '749',
            sbuoyv: '',
            sbutyv: '',
            sbufyv: '',
            bioyv: '249',
            bityv: '499',
            bifyv: '629',
            buoyv: '',
            butyv: '',
            bufyv: '',
            eioyv: '199',
            eityv: '399',
            eifyv: '499',
            euoyv: '',
            eutyv: '',
            eufyv: '',
            cur: 'inr',
            years: 1
        }
    }

    componentDidMount() {
        fetch('https://free.currconv.com/api/v7/convert?q=INR_USD&compact=ultra&apiKey=221b2c0121635ae493ed')
            .then(res => res.json())
            .then(res => {
                this.setState({ sbuoyv: Math.round(res.INR_USD * this.state.sbioyv) })
                this.setState({ sbutyv: Math.round(res.INR_USD * this.state.sbityv) })
                this.setState({ sbufyv: Math.round(res.INR_USD * this.state.sbifyv) })
                this.setState({ buoyv: Math.round(res.INR_USD * this.state.bioyv) })
                this.setState({ butyv: Math.round(res.INR_USD * this.state.bityv) })
                this.setState({ bufyv: Math.round(res.INR_USD * this.state.bifyv) })
                this.setState({ euoyv: Math.round(res.INR_USD * this.state.eioyv) })
                this.setState({ eutyv: Math.round(res.INR_USD * this.state.eityv) })
                this.setState({ eufyv: Math.round(res.INR_USD * this.state.eifyv) })
                this.setState({ upc1: Math.round(res.INR_USD * this.state.rpc1) })
                this.setState({ upc2: Math.round(res.INR_USD * this.state.rpc2) })
            }).then(() => {
                console.log(this.state)
            })
            .catch(e => console.log(e))
    }

    changeCurrency = (cur) => {
        this.setState({ cur })
    }

    changeYears = (years) => {
        this.setState({ years })
    }

    render() {
        document.getElementById('favicon').href='https://i.imgur.com/iOVLAhV.png';
        return(
            <div className='rale'>
                <title>InteliCards</title>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <li className="navbar-brand"><img src="https://i.imgur.com/iOVLAhV.png" style={{ "height": "30px", "width": "auto" }} className='d-inline-block align-top' alt=""/> InteliCards</li>
                <li style={{ listStyle: 'none' }}>+91 80872 77494</li>
            </nav>
            <section id="banner">
                <div className="inner">
                    <h1>InteliCards</h1>
                    <p>
                        Can't send physical visiting cards? Here's the solution. Use our Intelligent Card!
                    </p>
                </div>
                <video autoPlay loop muted playsInline>
                    <source src="https://visionmoneymantra.com/images/banner.mp4"></source>
                </video>
            </section>
            <section className="wrapper">
                <div className="inner">
                    <br/>
                    <header className="special">
                        <h1>Plans and pricing</h1>
                    </header>
                    <br/>
                    <div className="m-btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                        <div className="m-btn-group mr-2" role="group" aria-label="First group">
                            <button className={'btn ch-first ' + (this.state.cur === 'inr' ? 'btn-primary' : 'btn-light')} onClick={() => this.changeCurrency('inr')}>Rupees</button>
                            <button className={'btn ch-last ' + (this.state.cur === 'usd' ? 'btn-primary' : 'btn-light')} onClick={() => this.changeCurrency('usd')}>Dollars</button>
                        </div>
                        <div className="m-btn-group mr-2" role="group" aria-label="Second group">
                            <button onClick={() => this.changeYears(1)} type="button" className={"btn ch-first " + (this.state.years === 1 ? 'btn-primary' : 'btn-light')}>1 Year</button>
                            <button onClick={() => this.changeYears(3)} type="button" className={"btn " + (this.state.years === 3 ? 'btn-primary' : 'btn-light')}>3 Years</button>
                            <button onClick={() => this.changeYears(5)} type="button" className={"btn ch-last " + (this.state.years === 5 ? 'btn-primary' : 'btn-light')}>5 Years</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row center" style={{ "textAlign": "center" }}>
                        <div style={{ "display": "inline-block" }} className="plan bg-light pad">
                            <h2>Small Business</h2>
                            <i className="fad fa-running fa-5x"></i>
                            <div className="d-sm-none d-md-none d-lg-block d-xl-block" style={{ width: '100%', height: '48px' }}></div>
                            <div className="field">
                                {
                                    this.state.years === 1
                                    ? <h3>1 Year/Card {this.state.cur === 'inr' ? '₹ ' + this.state.sbioyv : '$ ' + this.state.sbuoyv}</h3>
                                    :( this.state.years === 3
                                    ? <h3>3 Years/Card {this.state.cur === 'inr' ? '₹ ' + this.state.sbityv : '$ ' + this.state.sbutyv}</h3>
                                    : <h3>5 Years/Card {this.state.cur === 'inr' ? '₹ ' + this.state.sbifyv : '$ ' + this.state.sbufyv}</h3>
                                    )
                                }
                            </div>
                            <div className="field">
                                <h3>Upto 2 cards</h3>
                            </div>
                            <div className="field">
                                <h3>Proofreading upto 2 times / card</h3>
                            </div>
                            <div className="field">
                                <h3>1 Free video upload to Inteli Tech youtube channel.</h3>
                            </div>
                        </div>
                        <div style={{ "display": "inline-block" }} className="plan bg-light pad">
                            <h2>Business</h2>
                            <i className="fad fa-car fa-5x"></i>
                            <div className="d-sm-none d-md-block d-lg-block d-xl-block" style={{ width: '100%', height: '48px' }}></div>
                            <div className="field">
                                {
                                    this.state.years === 1
                                    ? <h3>1 Year/Card {this.state.cur === 'inr' ? '₹ ' + this.state.bioyv : '$ ' + this.state.buoyv}</h3>
                                    :( this.state.years === 3
                                    ? <h3>3 Years/Card {this.state.cur === 'inr' ? '₹ ' + this.state.bityv : '$ ' + this.state.butyv}</h3>
                                    : <h3>5 Years/Card {this.state.cur === 'inr' ? '₹ ' + this.state.bifyv : '$ ' + this.state.bufyv}</h3>
                                    )
                                }
                            </div>
                            <div className="field">
                                <h3>3 - 5 cards</h3>
                            </div>
                            <div className="field">
                                <h3>Proofreading upto 3 times / card</h3>
                            </div>
                            <div className="field">
                                <h3>2 Free video uploads to Inteli Tech youtube channel.</h3>
                            </div>
                        </div>
                        <div style={{ "display": "inline-block" }} className="plan bg-light pad">
                            <h2>Enterprise</h2>
                            <i className="fad fa-rocket fa-5x"></i>
                            <div className="d-sm-none d-md-block d-lg-block d-xl-block" style={{ width: '100%', height: '48px' }}></div>
                            <div className="field">
                                {
                                    this.state.years === 1
                                    ? <h3>1 Year/Card {this.state.cur === 'inr' ? '₹ ' + this.state.eioyv : '$ ' + this.state.euoyv}</h3>
                                    :( this.state.years === 3
                                    ? <h3>3 Years/Card {this.state.cur === 'inr' ? '₹ ' + this.state.eityv : '$ ' + this.state.eutyv}</h3>
                                    : <h3>5 Years/Card {this.state.cur === 'inr' ? '₹ ' + this.state.eifyv : '$ ' + this.state.eufyv}</h3>
                                    )
                                }
                            </div>
                            <div className="field">
                                <h3>More than 5 cards</h3>
                            </div>
                            <div className="field">
                                <h3>Proofreading upto 4 times / card</h3>
                            </div>
                            <div className="field">
                                <h3>3 Free video uploads to Inteli Tech youtube channel.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="cta" className="wrapper">
                <div className="inner">
                    <h2>Physical Cards vs InteliCards</h2>
                </div>
            </section>
            <section className="wrapper">
                <div className="inner">
                    <header className="special">
                        <h3>Let's compare physical visiting cards with InteliCards</h3>
                    </header>
                    <div className="m-btn-toolbar-2" role="toolbar" style={{ textAlign: 'left' }}>
                        <div className="m-btn-group mr-2" role="group" aria-label="First group">
                            <button className={'btn ch-first ' + (this.state.cur === 'inr' ? 'btn-primary' : 'btn-light')} onClick={() => this.changeCurrency('inr')}>Rupees</button>
                            <button className={'btn ch-last ' + (this.state.cur === 'usd' ? 'btn-primary' : 'btn-light')} onClick={() => this.changeCurrency('usd')}>Dollars</button>
                        </div>
                    </div>
                    <br/><br/>
                    <table>
                        <tbody>
                            <tr>
                                <th style={{ width: '50%' }}></th>
                                <th style={{ width: '234px', textAlign: 'center', padding: '15px' }}>Physical Cards</th>
                                <th style={{ width: '234px', textAlign: 'center', padding: '15px' }}>InteliCards</th>
                            </tr>
                            <tr>
                                <td>Rs. per year</td>
                                <td>{this.state.cur === 'inr' ? '₹ ' + this.state.rpc1 : '$ ' + this.state.upc1}</td>
                                <td>{this.state.cur === 'inr' ? '₹ ' + this.state.rpc2 : '$ ' + this.state.upc2}</td>
                            </tr>
                            <tr>
                                <td>Unlimited uses</td>
                                <td><i className="fa fa-remove"></i></td>
                                <td><i className="fa fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Social Media Links</td>
                                <td><i className="fa fa-remove"></i></td>
                                <td><i className="fa fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Attractive and Animated</td>
                                <td><i className="fa fa-remove"></i></td>
                                <td><i className="fa fa-check"></i></td>
                            </tr>
                            <tr>
                                <td>Images and Videos</td>
                                <td><i className="fa fa-remove"></i></td>
                                <td><i className="fa fa-check"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <footer id="footer">
                <div className="inner">
                    <div className="content">
                            <section>
                                <h3>About Us</h3>
                                <p>Inteli Tech is an Indian tech company engaged in various tech solutions specialised in Web Site Development, Powerpoint Presentations preparation, Designing and Animating the PPTs of our clients for various business project presentations.</p>
                                <br/>
                                <p>Inteli Tech philosophy to help small businesses with affordable & smart solutions to Empower Businesses in India. <br/> #MadeInIndia #Affordable #SmallBusiness</p>
                            </section>
                            <section>
                                <h4>Services: </h4>
                                <ul className="alt">
                                    <li>Digital Cards / Micro Websites</li>
                                    <li>Web Designing</li>
                                    <li>Powerpoint Presentations</li>
                                    <li>Dynamic Websites</li>
                                </ul>
                            </section>
                            <section>
                                <h4>Social Media Links</h4>
                                <ul className="plain">
                                    <a target={'__blank'} href="https://www.github.com/Inteli-Tech"><li><i className="fa fa-github"></i>&nbsp; Github</li></a>
                                    <a target={'__blank'} href="https://www.facebook.com/InteliCards-110223967409865/">
                                        <li><i className="fa fa-facebook"></i>&nbsp; Facebook</li>
                                    </a>
                                </ul>
                            </section>
                        </div>
                        <div className="copyright">
                            &copy; Inteli Tech 2020. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home
