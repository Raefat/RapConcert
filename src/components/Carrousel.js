import React, { Component } from 'react'
import Slider from "react-slick"
import slider1 from "../resources/images/Em_slider1.jpg"
import slider2 from "../resources/images/Em_slider2.jpg"
import slider3 from "../resources/images/Em_slider3.jpg"
import "../resources/styles.css"

export default class Carrousel extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true
        }
        return (
            <div className="carrousel_wrapper"
                style={{
                    overflow:"hidden",
                    height:`${window.innerHeight}px`
                }}>
                <Slider {...settings}>
                    <div>
                        <div className="carrousel_image"
                            style={{
                                background: `url(${slider1})`,
                                height:`${window.innerHeight}px`
                            }}
                        >

                        </div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                            style={{
                                background : `url(${slider2})`,
                                height:`${window.innerHeight}px`
                            }}
                        >

                        </div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                            style={{
                                background : `url(${slider3})`,
                                height:`${window.innerHeight}px`
                            }}
                        >

                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}
