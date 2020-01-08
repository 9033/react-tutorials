import React, {Component} from "react";
import "./ipaddress.css";

class IPAddress extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.IPinfo.ip}</h1>
                <p>(this your IP)</p>
                <h2>{this.props.IPinfo.org}</h2>
                <h2>{this.props.IPinfo.city} {this.props.IPinfo.country}</h2>
            </div>
        );
    }
}

export default IPAddress;