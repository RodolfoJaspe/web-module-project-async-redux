import React from "react";

function Brewery (props) {
    const {name, website_url, street,city,state} = props.brewery
    return (
        <div>
            <h3>{name}</h3>
            <iframe src={website_url}></iframe>
            <p>{street}</p>
            <p>{city}</p>
            <p>{state}</p>
        </div>
    )
}
export default Brewery