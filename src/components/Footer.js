import React from 'react'
import Fade from "react-reveal/Fade"

export default function Footer(){
        return (
            <footer id="footer" className="bck_red">
                <Fade delay={500}>
                    <div className="font_righteous footer_logo_venue">
                        The Rap Concert 
                    </div>
                    <div className="footer_copyright">
                        2020 &copy; All Rights Reserved JK 
                    </div>
                </Fade>
            </footer>
        )
}
