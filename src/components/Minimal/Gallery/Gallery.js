import React from 'react';
import ReactImageMagnify from "react-image-magnify";

const Gallery = ({ card }) => {

    return(
        <div>
            <div>
                <link rel="favicon" href={card.logo}/>

                    <div className={ 'text-white minimal-top' }>
                    <div key={card.id} className={'main-card'}>
                        <h3 className='title'>Gallery</h3>
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
                <div style={{ "display": "block", "textAlign": "left", "marginLeft": "25px", "padding": "15px" }}>
                    {
                        card.gallery.videos
                        ? card.gallery.videos.map((video, i) => {
                            return <iframe title={card.company} style={{ "width": "95%" }} src={"https://www.youtube.com/embed/" + video.id} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        })
                        : ''
                    }
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
                                        width: 1200,
                                        height: 700
                                    }
                                }} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery;
