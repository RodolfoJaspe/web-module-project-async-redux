import React from "react";
import "./Brewery.css";

function Brewery (props) {
    const {name, website_url, street, city, state, phone, zip} = props.brewery
    return (
        <div className="brewery">
            <h2>{name}</h2>
            <iframe src={website_url} alt="website"></iframe>
            <div className="info">
                <h5>{phone}</h5>
                <h4>
                    {street}<br/>
                    {city},{state} {zip}
                </h4>  
            </div>
          
        </div>
    )
}
export default Brewery