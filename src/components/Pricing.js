import React from 'react'
import Butt from "./Button"
import {Fade} from "react-reveal"

export default function Pricing(props) {
    return (
        <div id="pricing" className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>
                <div className="pricing_wrapper">
                <Fade delay={300}>
                    <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <span>100 $</span>
                                <span>STANDARD</span>
                            </div>
                            <div className="pricing_description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae commodi qui hic doloribus?
                                Voluptas eum sequi earum cupiditate consequuntur quaerat!
                            </div>
                            <div className="pricing_buttons"><Butt href="#featured" text="Buy a Ticket NOW" color="#e74c3c"/></div>
                        </div>
                    </div>
                </Fade>
                <Fade delay={200}>
                    <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <span>200 $</span>
                                <span>PRO</span>
                            </div>
                            <div className="pricing_description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae commodi qui hic doloribus?
                                Voluptas eum sequi earum cupiditate consequuntur quaerat!
                            </div>
                            <div className="pricing_buttons">
                                <Butt href="#highlights" text="Buy a Ticket NOW" color="#e74c3c"/>
                            </div>
                        </div>
                    </div>
                    </Fade>
                    <Fade delay={400}>
                    <div className="pricing_item">
                        <div className="pricing_inner_wrapper">
                            <div className="pricing_title">
                                <span>300 $</span>
                                <span>VIP</span>
                            </div>
                            <div className="pricing_description">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae commodi qui hic doloribus?
                                Voluptas eum sequi earum cupiditate consequuntur quaerat!
                            </div>
                            <div className="pricing_buttons">
                                <Butt href="#location" text="Buy a Ticket NOW" color="#e74c3c"/>
                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
