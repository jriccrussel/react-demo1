import React from 'react'
import { Link } from 'react-router-dom'

import img4 from '../assets/img/fist.png'
import img5 from '../assets/img/flower-mouth.png'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div className="inner-wrapper flex space-between align-center">
                    <div className="content">
                        <h3>The ability to create</h3>
                        <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using ‘Content here,
                        content here’, making it look like readable English. Many desktop
                        publishing packages and web page editors now use Lorem Ipsum as
                        their default model text, and a search for ‘lorem ipsum’ will
                        uncover many web sites still in their infancy. Various versions
                        have evolved over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).
                        </p>

                        <div className="btn-row">
                            <Link to="/work">View series</Link>
                        </div>
                    </div>

                    <div className="images">
                        <div className="top-right">
                            <img src={img4} alt="" />
                        </div>
                        <div className="bottom-left">
                            <img src={img5} alt="" />
                        </div>
                    </div>
                </div>

                <div className="black-box"></div>
                <div className="black-box overlay"></div>
            </div>
        </div>
    )
}

export default About
