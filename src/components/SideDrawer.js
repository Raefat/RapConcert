import React, { Component } from 'react'
import {Drawer,List,ListItem,ListItemText,Link} from "@material-ui/core"

export default class SideDrawer extends Component {
    preventDefault = e => {
        e.target.preventDefault()
    }
    render() {
        return (
            <Drawer
                anchor="right"
                open = {this.props.open}
                onClose = {()=>this.props.onClose(false)}
            >
                <List >
                    <ListItem button >
                        <Link href="#location" onClick={this.preventDefault} color="inherit">
                            Event Starts In
                         </Link>
                    </ListItem>
                    <ListItem button component="a" href="https://www.google.com">
                        <ListItemText primary="Concert info" />
                    </ListItem>
                    <ListItem button component="a" href="#highlights">
                        <ListItemText primary="Highlights" />
                    </ListItem>
                    <ListItem button component="a" href="#pricing">
                        <ListItemText primary="Pricing" />
                    </ListItem>
                    <ListItem button component="a" href="#location">
                        <ListItemText primary="Location" />
                    </ListItem>
                </List>
            </Drawer>
        )
    }
}
