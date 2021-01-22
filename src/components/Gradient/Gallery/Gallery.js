import React from 'react';
import ReactImageMagnify from "react-image-magnify";

const Gallery = ({ card }) => {

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
