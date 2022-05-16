import React from "react"

const Card1 = (props) => {
    const ket = {
        population : 'people',
        area: 'km'
    }
    return (
        <button className="card">
            <h2>{props.country.name}</h2>
            <p>{props.country.details[props.det].toLocaleString()}</p>
            <h4>
                {ket[props.det]}
                {props.det === 'area' ? <sup>2</sup> : <sup></sup>}
            </h4>
        </button>
    )  
}

export default Card1