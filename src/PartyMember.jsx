/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "./Button";

export default function PartyMember(props) {
    const [currentHP, setCurrentHP] = useState(0);
    const [currentMP, setCurrentMP] = useState(5);

    useEffect(() => {
        setCurrentHP(props.HP);
    }, []);

    return (
        <>
            <div className="partymember">
                <div className="name">
                    <img className="jobIcon" src={props.icon} />
                    <h1>{props.name}</h1>
                </div>
                <img className="characterPicture" src={props.image} />
                <div className="stats">
                    <div className="hp">
                        <button
                            className="arrow"
                            onClick={() => {
                                setCurrentHP(currentHP - 1);
                            }}>
                            <img src="DownArrow.webp" />
                        </button>
                        <h2>
                            HP: {currentHP} / {props.HP}
                        </h2>
                        <button
                            className="arrow"
                            onClick={() => {
                                setCurrentHP(currentHP + 1);
                            }}>
                            <img src="UpArrow.webp" />
                        </button>
                    </div>
                    <div className="mp">
                        <button
                            className="arrow"
                            onClick={() => {
                                setCurrentMP(currentMP - 1);
                            }}>
                            <img src="DownArrow.webp" />
                        </button>
                        <h2>MP: {currentMP} / 5</h2>
                        <button
                            className="arrow"
                            onClick={() => {
                                setCurrentMP(currentMP + 1);
                            }}>
                            <img src="UpArrow.webp" />
                        </button>
                    </div>
                </div>
                <div className="buffs">
                    {props.role == "war" ? (
                        <>
                            <Button image="Rampart.webp" />
                            <Button image="Beserk.webp" />
                        </>
                    ) : (
                        <></>
                    )}
                    {props.role == "blm" ? (
                        <>
                            <Button image="AstralFire.webp" />
                            <Button image="UmbralIce.webp" />
                            <Button image="Thundercloud.webp" />
                            <Button image="LucidDreaming.webp" />
                            <Button image="Manaward.webp" />
                        </>
                    ) : (
                        <></>
                    )}
                    {props.role == "brd" ? (
                        <>
                            <Button image="StraightShotReady.webp" />
                            <Button image="RagingStrkes.webp" />
                        </>
                    ) : (
                        <></>
                    )}
                    {props.role == "whm" ? (
                        <>
                            <Button image="LucidDreaming.webp" />
                        </>
                    ) : (
                        <></>
                    )}
                    <Button image="MagesBallad.webp" />
                    <Button image="Addle.webp" />
                    <Button image="Aero.webp" />
                    <Button image="Reprisal.webp" />
                    <Button image="Repose.webp" />
                    <Button image="Sleep.webp" />
                    <Button image="Stun.webp" />
                    <Button image="Thunder.webp" />
                    <Button image="VenomousBite.webp" />
                    <Button image="Weakness.webp" />
                </div>
            </div>
        </>
    );
}
