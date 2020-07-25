import React, { Component } from 'react'
import "../resources/styles.css"
import Carrousel from "./Carrousel"
import CountDown from './CountDown'


export default class Featured extends Component {

    render() {
        return (
            <div  id="featured" style={{position:'relative'}}>
                <Carrousel/>
                <div className='artist_name'>
                    <div className='wrapper'>
                        EMINEM
                        SLIM SHADY
                    </div>
                </div>
                <CountDown/>
            </div>
        )
    }
}
