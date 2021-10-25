import React from 'react'

import imgOne from '../assets/images/afropunk.png'
import imgTwo from '../assets/images/creative-boom.png'
import imgThree from '../assets/images/vogue.png'
import imgFour from '../assets/images/wgsn.png'
import imgFive from '../assets/images/twitter.svg'
import imgSix from '../assets/images/instagram.svg'

const links = [
    { name: "CreativeBoom", image: imgTwo },
    { name: "Afropunk", image: imgOne },
    { name: "WGSN", image: imgFour },
    { name: "Vogue", image: imgThree },
]

const Footer = () => {
    return (
        <footer>
            <div className="featured-companies">
                <div className="container">
                    <ul>
                        {links.map((link, index) => {
                            const {name, image} = link
                            return (
                                <li key={index}>
                                    <img src={image} alt={name} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
