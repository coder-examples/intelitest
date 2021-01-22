import React from 'react';

const Payment = ({ card, flow, titleColor }) => {
    return (
        <div className='text-bg'>
            <div>
                <h3 className="title" style={titleColor ? {color: titleColor} : { color: 'black' }}>Bank and Tax details</h3>
                {
                    flow
                        ? <svg viewBox="0 0 400 25" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <pattern id="Wave" x="0" y="0" width="100" height="25px" patternUnits="userSpaceOnUse">
                                    <path d="M0 25 0 6C20 9 38 11 55 7 72 4 87 4 100 6l0 19z" id="path4"></path>
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#Wave)"></rect>
                        </svg>
                        : ''
                }
                <div className={`${flow ? 'body-2' : ''}`}>
                    {
                        card.bank
                            ?
                            <div>
                                <h3>Bank Details</h3>
                                {
                                    card.bank.bankName
                                        ? <h5 style={{ textAlign: 'left', marginLeft: '10px' }}>{`Bank Name: ${card.bank.bankName}`}</h5>
                                        : ''
                                }
                                {
                                    card.bank.ifsc
                                        ? <h5 style={{ textAlign: 'left', marginLeft: '10px' }}>{`IFSC Code: ${card.bank.ifsc}`}</h5>
                                        : ''
                                }
                                {
                                    card.bank.acName ? <h5 style={{ textAlign: 'left', marginLeft: '10px' }}>{`A/c Name: ${card.bank.acName}`}</h5>
                                        : ''
                                }
                                {
                                    card.bank.acNum ?
                                        <h5 style={{ textAlign: 'left', marginLeft: '10px' }}>{`A/c Number: ${card.bank.acNum}`}</h5>
                                        : ''
                                }
                                <br/><br/>
                                <h3>Tax Details</h3>
                                {
                                    card.bank.pan ?
                                        <h5 style={{ textAlign: 'left', marginLeft: '10px' }}>{`PAN: ${card.bank.pan}`}</h5>
                                        : ''
                                }
                                {
                                    card.bank.gstin
                                        ? <h5 style={{ textAlign: 'left', marginLeft: '10px' }}>{`GST Number: ${card.bank.gstin}`}</h5>
                                        : ''
                                }
                            </div>
                            : ''
                    }
                    {
                        card.payment && card.payment.paytmMerchantId
                            ?
                            <div style={{ justifyContent: 'center', display: 'inline-block', borderRadius: '50px', backgroundImage: `url(https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${encodeURIComponent(card.payment.paytmMerchantId)})`, width: '300px', height: '300px', margin: '10px' }} alt="">
                                <div style={{ height: '131px', width: '100%' }}></div>
                                <img style={{ width: '50px', height: 'auto' }} src="https://i.imgur.com/MiqaVtB.jpg" alt=""/>
                            </div>
                            : ''
                    }

                    {
                        card.payment && card.payment.upiId
                            ?
                            <div style={{display: 'inline-block', borderRadius: '50px'}}>
                                <div style={{ background: 'white', display: 'inline-block', width: '300px', margin: '10px' }}>
                                    <div style={{ justifyContent: 'center', backgroundImage: `url(https://upiqr.in/api/qr?name=${encodeURIComponent(card.firstName + ' ' + card.lastName)}&vpa=${encodeURIComponent(card.payment.upiId)})`, width: '300px', height: '300px' }} alt="">
                                        <div style={{ height: '112.5px', width: '100%' }}></div>
                                        <img style={{ width: '75px', height: '75px' }} src="https://i.imgur.com/CBeZhl0.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            : ''
                    }

                    {
                        card.payment && card.payment.upiId
                            ?
                            <div style={{display: 'inline-block', borderRadius: '50px', verticalAlign: 'top'}}>
                                <div style={{ background: 'white', width: '300px', margin: '10px' }}>
                                    <div style={{ justifyContent: 'center', backgroundImage: `url(https://upiqr.in/api/qr?name=${encodeURIComponent(card.firstName + ' ' + card.lastName)}&vpa=${encodeURIComponent(card.payment.upiId)})`, width: '300px', height: '300px' }} alt="">
                                        <div style={{ height: '125.01415px', width: '100%' }}></div>
                                        <img style={{ width: '75px', height: '49.971719457px' }} src="https://i.imgur.com/0xnozzE.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            : ''
                    }

                    {
                        card.payment && card.payment.upiId
                            ?
                            <div style={{display: 'inline-block', borderRadius: '50px', verticalAlign: 'top'}}>
                                <div style={{ background: 'white', width: '300px', margin: '10px' }}>
                                    <div style={{ justifyContent: 'center', backgroundImage: `url(https://upiqr.in/api/qr?name=${encodeURIComponent(card.firstName + ' ' + card.lastName)}&vpa=${encodeURIComponent(card.payment.upiId)})`, width: '300px', height: '300px' }} alt="">
                                        <div style={{ height: '112.5px', width: '100%' }}></div>
                                        <img style={{ width: '75px', height: '75px', borderRadius: '50%' }} src="https://i.imgur.com/zljlFMn.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                            : ''
                    }
                </div>
            </div>
        </div>
    );
}

export default Payment;
