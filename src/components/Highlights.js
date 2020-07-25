import React, { Component } from 'react'
import {Fade,Slide} from "react-reveal"
import Butt from "./Button"

export default class Highlights extends Component {
    state={
        discountStart :0,
        discountEnd :50
    }
    handlePercentage=()=>{
        if (this.state.discountStart < this.state.discountEnd) {
            this.setState({discountStart:this.state.discountStart + 1})
        }
    }
    componentDidUpdate(){
        setTimeout(()=>this.handlePercentage(),25)
    }
    render() {
        return (
            <div id="highlights" className="highlight_wrapper">
                <Fade>
                    <h2>Highlights</h2>
                    <div className="center_wrapper">
                        <div className="highlight_description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum incidunt ratione omnis modi eum provident deleniti, 
                            dolores amet culpa praesentium ab obcaecati unde impedit, nemo quaerat dolorem optio, ipsam vero perspiciatis. Cumque exercitationem tenetur hic.
                            A dolorem omnis saepe? Vel aut ipsa mollitia quam dignissimos, magni assumenda fugiat esse excepturi accusantium quod vitae libero, sapiente sit,
                            ad quasi. Voluptatum delectus, qui aliquid nam non aspernatur quidem temporibus beatae, distinctio doloremque quos maxime harum iste, 
                            dolores eius explicabo ipsam quod. A, magni saepe maiores consectetur exercitationem culpa nam magnam neque,
                            temporibus ut expedita aspernatur? Ipsam quidem dolore ad autem possimus! Ipsam?
                        </div>
                    </div>
                </Fade>
                <div className="center_wrapper">
                    <div className="discount_wrapper">
                    <Fade onReveal={()=>this.handlePercentage()}>
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Buy Tickets Before 2021</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque harum eveniet velit omnis, vero quidem distinctio laudantium,
                                eos atque suscipit, doloremque totam similique perferendis quisquam aliquid beatae iusto repellat veritatis. Ex ipsa hic magnam, repudiandae iste,
                                a nobis beatae aliquid, eos eveniet earum placeat voluptatem! Ullam quos dolorum consequuntur sed.
                            </p>
                            <div>
                                <Butt href="#header" text="Buy a Ticket NOW" color="#1abc9c"/>
                            </div>
                        </div>
                    </Slide>
                    </div>
                </div>
            </div>
        )
    }
}
