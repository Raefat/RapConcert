import React, { Component } from 'react'
import Button from "@material-ui/core/Button"
import ticket from "../resources/images/icons/ticket.png"

export default class Butt extends Component {
    render() {
        return (
            <Button
                href={this.props.href}
                variant="contained"
                size="large"
                style={{
                    background : `${this.props.color}`,
                    color : "white"
                }}
            >
                <img 
                    src={ticket}
                    className="iconImage"
                    alt="ticketIcon"
                />
                {this.props.text}
            </Button>

        )
    }
}
