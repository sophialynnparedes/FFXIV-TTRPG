/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Button(props) {
    const [active, setActive] = useState(false);

    return (
        <>
            <button
                className="buff"
                id={active ? "on" : "off"}
                onClick={() => {
                    if (active) {
                        setActive(false);
                    } else {
                        setActive(true);
                    }
                }}>
                <img src={props.image} />
            </button>
        </>
    );
}
