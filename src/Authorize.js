
import React, { Component } from 'react';
import qs from 'query-string';

import './App.css';

class Authorize extends Component {
    componentDidMount(){
        const qstr=qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
        console.log(qstr)
        /*
        {
          client_id: "PA7oZKkpBatCFGPzrxjlG84GLAd8SRN8", 
          redirect_uri: "https://openidconnect.net/callback", 
          response_type: "code", 
          scope: "openid profile email phone address", 
          state: "9bd89b520a6342239c5f1ee3452656b8a7125c18"
        }
        */
      }
    

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Authorize
          </p>
        </header>
      </div>
    );
  }
}

export default Authorize;
