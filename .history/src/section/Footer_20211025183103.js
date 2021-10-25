import React from 'react'
import { Link } from 'react-router-dom'

import imgOne from '../assets/img/afropunk.png'
import imgTwo from '../assets/img/creative-boom.png'
import imgThree from '../assets/img/vogue.png'
import imgFour from '../assets/img/wgsn.png'
import imgFive from '../assets/img/twitter.svg'
import imgSix from '../assets/img/instagram.svg'

const links = [
    { name: "CreativeBoom", image: imgTwo },
    { name: "Afropunk", image: imgOne },
    { name: "WGSN", image: imgFour },
    { name: "Vogue", image: imgThree },
]

const Footer = () => {
    return (
        <footer>
            <div className="featured-companies flex align-center">
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
            <div className="footer">
                <div className="inner flex space-between align-center">
                    <span>© 2019 OladimejI Odunsi</span>
                    <div className="socials">
                        <Link to="/">
                            <img src={imgFive} alt="Twitter" />
                        </Link>
                        <Link to="/">
                            <img src={imgSix} alt="Twitter" />
                        </Link>
                    </div>
                    <span>letscreate@oladimeg.com</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
