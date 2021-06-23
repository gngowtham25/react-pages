import React, { Component, PureComponent } from "react"

class DisplayComponent extends Component {

    constructor() {
        super()
        this.lastUpdateDate = new Date();
    }

    shouldComponentUpdate() {   
        const now = new Date();  
        var seconds = (now.getTime() - this.lastUpdateDate.getTime()) / 1000;  
        console.log(seconds) 
        return seconds == 0;   
    }

    componentDidUpdate() {     
        this.lastUpdateDate = new Date();  
    } 

    render() {
        return (
            <p>The value is {this.props.value}</p>
        )
    }

}

export default DisplayComponent