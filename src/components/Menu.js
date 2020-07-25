import React from 'react'
import {Button} from "@material-ui/core"


export default function Menu () {
    return (
        <div>
            <Button variant="outlined" color="inherit" href="#pricing" style={{margin : "0px 10px"}}>Pricing</Button>
            <Button variant="outlined" color="inherit" href="#highlights" style={{margin : "0px 10px"}}>Highlights</Button>
            <Button variant="outlined"color ="inherit" href="#location" style={{margin : "0px 10px"}}>Location</Button>
        </div>
    )
}
