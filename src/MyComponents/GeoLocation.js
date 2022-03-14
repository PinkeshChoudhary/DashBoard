import React, { Component } from 'react';

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

function success(pos) {
    var crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);}

    function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

export class GeoLocation extends Component {

    

    componentDidMount(){
        if(navigator.geolocation){
            navigator.permissions
            .query({name: 'geolocation'})
            .then(function(result){
                if(result.state === "granted"){
                    console.log(result.state)
                    navigator.geolocation.getCurrentPosition(success);


                }
                else if(result.state==="prompt"){
                    console.log(result.state)
                    navigator.geolocation.getCurrentPosition(success, errors, options);

                }
                else if(result.state==="denied"){

                }
                result.onchange = function(){
                    console.log(result.state)
                }

            })
            

            
        }
        else{
            alert("not found")
        }

    }
  render() {
    return( 
    <div>
        <h2>GeoLocation</h2>

    </div>
    )
  }
}

export default GeoLocation;
