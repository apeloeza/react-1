import React from "react"
import '../App.css'

const Card2 = (props) => {
    return (
        <button>
            <h1>{props.country.name}</h1>
            <h4>{props.det}</h4>
            <p>({props.country.details[props.det]})</p>
        </button>
    )  
}

export default Card2