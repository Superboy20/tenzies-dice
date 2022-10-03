import React from "react"

export default function Die(props) {
    return (
        <div className="die-front"
            style={{ backgroundColor: props.isHeld ? "#8367c7" : "white" }}
            onClick={props.holdDice}
        >
            <h2 className="die-number">{props.value}</h2>
        </div>
    )
}