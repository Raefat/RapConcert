import React, { Component } from "react";
import Slide from "react-reveal/Slide";

export default class CountDown extends Component {
    state={
        days : 0,
        hours : 0,
        mins : 0,
        secs : 0
    }

    getTime=()=>{
        const countDownDate = new Date("Jul 29, 2021").getTime()
        const now = new Date().getTime()

        let diff = (countDownDate - now) / 1000 // time in sec since 1970
  
        const days = Math.floor(diff/(60*60*24))
        const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60))
        const mins = Math.floor((diff % (60 * 60)) / (60))
        const secs = Math.floor(diff % 60)

        this.setState({
            days,
            hours,
            mins,
            secs
        })

    }
    componentDidMount(){
        setInterval(()=>this.getTime(),1000)
    }
  render() {
    return (
      <Slide left delay={700}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event Starts In</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hours</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.mins}</div>
              <div className="countdown_tag">Mins</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.secs}</div>
              <div className="countdown_tag">Secs</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
