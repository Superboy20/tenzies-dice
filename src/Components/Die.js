import React from "react"

const Dot = () => <span className="dot" />;
const Face = ({ children }) => <div className="die-front">{children}</div>;
export default function Die(props) {
    let dots = Number.isInteger(props.value) ? Array(props.value).fill(0)
        .map((_, i) => <Dot key={i} />)
        : null;

    return (
        <div className="bg-die-front"
            style={{ backgroundColor: props.isHeld ? "#8367c7" : "white" }}
            onClick={props.holdDice}
            data-side={props.value}
        >
            <Face>{dots}</Face>
        </div>
    )
}