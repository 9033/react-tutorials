import React, {Component} from "react";
import "./ipaddress";
import IPAddress from "./ipaddress";

var xhr;

class IPAddressContainer extends Component{
    constructor(props){
        super(props);

        this.state={
            IPinfo:{}
        };

        this.processRequest = this.processRequest.bind(this);
    }

    componentDidMount(){
        xhr=new XMLHttpRequest();
        // 토큰을 추가.
        // https://forum.kirupa.com/t/ipaddress-from-react-book-component-only-works-w-on-your-network/639505/15
        xhr.open("GET","https://ipinfo.io/json?token=2277ce4bac0347",true);
        xhr.send();
        xhr.addEventListener("readystatechange",this.processRequest,false);
    }

    processRequest(){
        // console.log(xhr);
        if(xhr.readyState===4 && xhr.status === 200){
            var response = JSON.parse(xhr.responseText);            
            // console.log(xhr,response.ip);
            this.setState({
                // ip_address: response.ip
                IPinfo:response
            });
        }
    }

    render(){
        return (
            // <IPAddress ip={this.state.ip_address}/>           
            <IPAddress IPinfo={this.state.IPinfo}/>           
        );
    }
}

export default IPAddressContainer;