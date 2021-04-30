import React from "react";
import { connect } from "react-redux";
import Brewery from "./Brewery"; 

function BreweryList (props) {
    const breweriesOnline = props.breweries.filter(brewery => {  //some of the breweries don't have websites, filter those  out
        if (brewery.website_url) {
            return brewery}
    }) 
    
    return (
        <div>
            {breweriesOnline.map(brewery => {
                return <Brewery brewery={brewery} key={brewery.id}/>
            })}
        </div>  
    )
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries
    }
}
export default connect(mapStateToProps, {})(BreweryList)