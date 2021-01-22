import React from 'react';

const ProServ = ({ card }) => {
    return(
        <div>
            <div className="top-left"></div>
            <div className="top-right"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
            <div>
                <link rel="favicon" href={card.logo}/>

                    <div className={ 'text-bg' }>
                    <div key={card.id} className={'main-card'}>
                        <h3 className='title'>{card.products.type === 'serv' ? 'Our Services' : 'Our Products'}</h3>
                    </div>
                </div>
            </div>
            <div>
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
