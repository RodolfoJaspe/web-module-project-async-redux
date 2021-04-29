import React,{ useEffect } from "react";
import { fetchBreweries } from "../Actions";
import { connect } from "react-redux";
import Brewery from "./Brewery"; 

function BreweryList (props) {
    useEffect (()=>{
        props.fetchBreweries()
    },[])
    return (
        <div>
            {props.breweries.map(brewery => (
                <Brewery brewery={brewery} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breweries: state.breweries
    }
}
export default connect(mapStateToProps, {fetchBreweries})(BreweryList)