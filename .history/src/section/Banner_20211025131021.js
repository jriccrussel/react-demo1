import React from 'react'

import img1 from '../assets/images/diamonds.png'
import img2 from '../assets/images/poppin-shades.png'
import img3 from '../assets/images/sexy-orange.png'

const Banner = () => {
    return (
        <div className="banner flex align-center">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                        <img src={img1} alt="" />
                    </div>
                    <div className="main-text">Oladimeji Odunsi</div>
                    <div className="main-image">
                        <img src={img2} alt="" />
                    </div>
                    <div className="side-image right">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll down</span>
                </div>
            </div>
            <div className="fixed-misc">Visual Artist and Photographer</div>
        </div>

        
    )
}

export default Banner
