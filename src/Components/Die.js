import React from "react"

export default function Die(props) {
    return (
        <div className="die-front">
            <h2 className="die-number">{props.value}</h2>
        </div>
    )
}