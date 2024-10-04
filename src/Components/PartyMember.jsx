import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Buff from "./Buff";

export default function PartyMember(props) {
    PartyMember.propTypes = {
        member: PropTypes.object | null,
        currentHP: PropTypes.number,
        position: PropTypes.number,
    };

    const [currentHP, setCurrentHP] = useState(
        Number(localStorage[`currentHP${props.position}`])
    );
    const [barrierCount, setBarrierCount] = useState(0);
    const [currentMP, setCurrentMP] = useState(5);
    const [jobIcon, setJobIcon] = useState("");

    useEffect(() => {
        if (props.member != null) {
            if (props.member.class == "Warrior") {
                setJobIcon(
                    "public/FFXIVIcons JobIcons/01_TANK/Job/Warrior.png"
                );
            } else if (props.member.class == "Black Mage") {
                setJobIcon(
                    "public/FFXIVIcons JobIcons/03_DPS/Job/BlackMage.png"
                );
            } else if (props.member.class == "Bard") {
                setJobIcon("public/FFXIVIcons JobIcons/03_DPS/Job/Bard.png");
            } else if (props.member.class == "White Mage") {
                setJobIcon(
                    "public/FFXIVIcons JobIcons/02_HEALER/Job/WhiteMage.png"
                );
            }
        }
    });

    useEffect(() => {
        localStorage[`currentHP${props.position}`] = currentHP;
    }, [currentHP]);

    if (props.member != null) {
        return (
            <div className="partyMember">
                <img
                    className="jobIcon"
                    src={jobIcon}
                />
                <img
                    className="partyMemberImage"
                    src={props.member.image}
                />
                <div className="statsContainer">
                    <h2>{props.member.name}</h2>
                    <div className="stats">
                        <div className="statsCol1">
                            <h3>STR: +{props.member.STR}</h3>
                            <h3>DEX: +{props.member.DEX}</h3>
                            <h3>VIT: +{props.member.VIT}</h3>
                            <h3>INT: +{props.member.INT}</h3>
                            <h3>MND: +{props.member.MND}</h3>
                        </div>
                        <div className="statsCol2">
                            <h3>Phys. Def.: {props.member.physDef}</h3>
                            <h3>Mag. Def.: {props.member.magDef}</h3>
                            <h3>VIG: {props.member.VIG}</h3>
                            <h3>Move: {props.member.move}</h3>
                        </div>
                    </div>
                    <div className="HPContainer">
                        <h3>HP:</h3>
                        <div>
                            <img
                                className="upArrow"
                                src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                                onClick={() => {
                                    setCurrentHP(currentHP + 1);
                                }}
                            />
                            <h1>{currentHP}</h1>
                            <img
                                className="downArrow"
                                src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                                onClick={() => {
                                    setCurrentHP(currentHP - 1);
                                }}
                            />
                        </div>

                        <h3>/</h3>
                        <div>
                            <h3>{props.member.maxHP}</h3>
                        </div>
                        <div className="barrierContainer">
                            <img
                                className="barrier"
                                src="public\FFXIVIcons Battle(PvP)\01_PLD\Common_Actions\Guard.png"
                            />
                            <img
                                className="upArrow"
                                src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                                onClick={() => {
                                    setBarrierCount(barrierCount + 1);
                                }}
                            />
                            <h1>{barrierCount}</h1>
                            <img
                                className="downArrow"
                                src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                                onClick={() => {
                                    setBarrierCount(barrierCount - 1);
                                }}
                            />
                        </div>
                    </div>
                    <div className="MPContainer">
                        <h3>MP:</h3>
                        <div>
                            <img
                                className="upArrow"
                                src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                                onClick={() => {
                                    setCurrentMP(currentMP + 1);
                                }}
                            />
                            <h1>{currentMP}</h1>
                            <img
                                className="downArrow"
                                src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                                onClick={() => {
                                    setCurrentMP(currentMP - 1);
                                }}
                            />
                        </div>
                        <h3>/</h3>
                        <h3>{props.member.maxMP}</h3>
                    </div>
                    <div className="buffs">
                        <Buff buff="Weakness" />
                        <Buff buff="Transcendent" />
                        {props.member.self.map((item) => {
                            console.log(item);
                            return (
                                <Buff
                                    buff={item}
                                    key={item}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}
