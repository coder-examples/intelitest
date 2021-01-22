import React from 'react';

const ProServ = ({ card }) => {
    return(
        <div>
            <div>
                <link rel="favicon" href={card.logo}/>

                    <div className={ 'text-white minimal-top' }>
                    <div key={card.id} className={'main-card'}>
                        <h3 className='title'>{card.products.type === 'Serv' ? 'Our Services' : 'Our Products'}</h3>
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
                <div style={{ "display": "block", "textAlign": "center", "marginLeft": "25px", "padding": "15px", "color": "var(--text-color)" }}>
                    <ul>
                        {
                            card.products.items.map((product, i) => {
                                return(
                                    <li key={i} style={{ width: '90%', margin: '10px', listStyle: 'none', background: 'rgba(255, 255, 255, 0.7)', padding: '5px', borderRadius: '12px' }}>
                                        <h3>{product.text}</h3>
                                        <img src={product.img} style={{ maxWidth: '450px', width: '100%', height: 'auto' }} alt=""/>
                                        <p>{product.desc}</p>
                                        <a style={{ width: '75%' }} target={`__blank${i}`} href={`https://wa.me/${card.whatsApp}?text=${encodeURI(`I am interested in ${product.text}. Please give some info.`)}`}>
                                            <button>Enquire Now</button>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProServ;
