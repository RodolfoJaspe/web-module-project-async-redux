import React,{ useState } from "react";
import { fetchBreweries } from "../Actions";
import { connect } from "react-redux";

function Search (props) {
    const [formState, setFormState] = useState({
        city: ""
    })

    const handleChange = e => {
        setFormState({city: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        props.fetchBreweries(formState.city)
    }
    
    return (
        <div>
            <form onSubmit={submitForm}>
                <input value={formState.city} onChange={handleChange} placeholder="Enter city"/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default connect(null, {fetchBreweries})(Search)