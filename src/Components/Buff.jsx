import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { buffToImageArray } from "../BuffToImageArray";

export default function Buff(props) {
    Buff.propTypes = {
        buff: PropTypes.string,
    };

    const [active, setActive] = useState(false);
    const [image, setImage] = useState("");

    useEffect(() => {
        const element = buffToImageArray.find((ele) => ele[0] == props.buff);
        setImage(element[1]);
    });

    const toggleActive = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
    };
    return (
        <>
            <img
                className="buff"
                src={image}
                style={active ? { opacity: "100%" } : { opacity: "20%" }}
                onClick={toggleActive}
            />
        </>
    );
}
