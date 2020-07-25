import React, { Component } from 'react'
import Zoom from "react-reveal/Zoom"
import calendar from  "../resources/images/icons/calendar.png"
import location from  "../resources/images/icons/location.png"

export default class ConcertInfo extends Component {
    render() {
        return (
            <div id="concert" className="bck_black">
                <div className="center_wrapper">
                    <div className="vn_wrapper">
                        <Zoom>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon" style={{background:`url(${calendar})`}}></div>
                                    <div className="vn_title">Event Date & Time</div>
                                    <div className="vn_desc">15 July at 11:00 pm</div>
                                </div>
                            </div>
                        </div>
                        </Zoom>
                        <Zoom>
                            <div className="vn_item">
                                <div className="vn_outer">
                                    <div className="vn_inner">
                                        <div className="vn_icon_square bck_vio"></div>
                                        <div className="vn_icon" style={{background:`url(${location})`}}></div>
                                        <div className="vn_title">Event Location</div>
                                        <div className="vn_desc">la place Jamaâ El Fna Marrakech</div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        )
    }
}
