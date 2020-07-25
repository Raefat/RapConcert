import React, { Component } from 'react'
import {AppBar,Toolbar} from "@material-ui/core"
import Menu from "./Menu"
import "../resources/styles.css"
//import SideDrawer from "./SideDrawer"


export default class Header extends Component {
    state = {
        headerShow : false
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }
    handleScroll=()=>{
        if (window.scrollY>0) {
            this.setState({headerShow : true})
        }else{
            this.setState({headerShow : false})
        }
    }
    render() {
        return (
            <AppBar id="header"
                position="fixed"
                style={{
                    backgroundColor :this.state.headerShow ?"transparent" : "#3d3d3d",
                    padding : "2px 0px",
                    boxShadow : "none",
                    transition:"background-color 1s ease"
                }}
            >
                <Toolbar>
                    <div className="header_logo">
                        <div className="font_righteous header_logo_venue">Rap Concert</div>
                        <div className="header_logo_title">Musical Events</div>
                    </div>
                    <Menu/>
                </Toolbar>
            </AppBar>
        )
    }
}

/* <SideDrawer
open={this.state.drawerOpen}
onClose = {(val)=>this.toggleDrawer(val)}


    toggleDrawer=val=>{
        this.setState({drawerOpen : val})
    }
/> */
