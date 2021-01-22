import React from 'react';
import './Gallery.css';
import ReactImageMagnify from "react-image-magnify";

const Gallery = ({ card }) => {

    const makeupImage = () => {
        switch (card.makeupimage) {
            case 1:
                return 'https://images.squarespace-cdn.com/content/v1/57dda91020099eab7d71a86a/1589428015222-83RMDZZRSUV0AUJQPI9G/ke17ZwdGBToddI8pDm48kBbgV28uc97m1jNh03OWDNsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcPlNe0zmfZl6Cw05UmBMxSqSrFqjMOrjO70t0gBc7qU1SwXV_MTYzeALKi1U9kF0W/Product-Overview-GIF-051220-R1-V3.gif?format=2500w'
            case 2:
                return 'https://previews.123rf.com/images/denisfilm/denisfilm1803/denisfilm180301424/97999917-various-makeup-products-on-wooden-background-decorative-cosmetics-variety-on-pink-wooden-background-.jpg'
            case 3:
                return 'https://previews.123rf.com/images/denisfilm/denisfilm1803/denisfilm180301420/98004999-female-makeup-kit-wooden-background-pink-makeup-bag-and-collection-of-cosmetics-products-pink-backgr.jpg'
            case 4:
                return 'https://images-na.ssl-images-amazon.com/images/I/61tTDnogOsL._AC_SL1000_.jpg'
            default:
                return 'https://images.squarespace-cdn.com/content/v1/57dda91020099eab7d71a86a/1589428015222-83RMDZZRSUV0AUJQPI9G/ke17ZwdGBToddI8pDm48kBbgV28uc97m1jNh03OWDNsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcPlNe0zmfZl6Cw05UmBMxSqSrFqjMOrjO70t0gBc7qU1SwXV_MTYzeALKi1U9kF0W/Product-Overview-GIF-051220-R1-V3.gif?format=2500w'
        }
    }
    return(
        <div>
            <div className="top-left"></div>
            <div className="top-right"></div>
            <div className="bottom-left"></div>
            <div className="bottom-right"></div>
            <div>
                <link rel="favicon" href={card.logo}/>

                    <div className={ 'text-bg minimal-top' }>
                    <div key={card.id} className={'main-card'}>
                        <h3 className='title'>Gallery</h3>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ "display": "block", "textAlign": "left", "marginLeft": "25px", "padding": "15px" }}>
                    {
                        card.gallery.videos
                        ? card.gallery.videos.map((video, i) => {
                            return <iframe key={video.id} title={card.company} style={{ "width": "95%" }} src={"https://www.youtube.com/embed/" + video.id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        })
                        : ''
                    }
                    <div style={{ textAlign: 'center' }}>
                        <img className='res-img' src={makeupImage()} alt="" style={{ border: '1.5px solid white', borderRadius: '12px', margin: '1.5px', width: '47%' }}/>
                        {
                            card.gallery.photos.map((photo, i) => {
                                return(
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            isFluidWidth: true,
                                            src: photo.img
                                        },
                                        largeImage: {
                                            src: photo.img,
                                            width: 1200, height: 700
                                        }
                                    }} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;
