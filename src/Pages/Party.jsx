import { useState } from "react";
import { Lv30Warrior, Lv40Warrior, Lv50Warrior } from "../DefaultPartyMembers";
import PartyMember from "../Components/PartyMember";

export default function Party() {
    const [member1, setMember1] = useState(Lv30Warrior);
    const [member2, setMember2] = useState(Lv30Warrior);
    const [member3, setMember3] = useState(Lv30Warrior);
    const [member4, setMember4] = useState(Lv30Warrior);

    const Options = () => {
        return (
            <>
                <option value="none">None</option>
                <option value={"Lv30Warrior"}>Level 30 Warrior</option>
                <option value={Lv40Warrior}>Level 40 Warrior</option>
                <option value={Lv50Warrior}>Level 50 Warrior</option>
            </>
        );
    };

    function changePartyMember1() {
        var chosenPartyMember1 = document.getElementById("partyMember1").value;
        if (chosenPartyMember1 == "Lv30Warrior") {
            setMember1(Lv30Warrior);
        }
    }

    return (
        <>
            <div id="partyMemberSelectorContainer">
                <div id="partyMemberSelector">
                    <div className="partyMemberChooser">
                        <label htmlFor="partyMember1">Party Member 1:</label>
                        <select
                            name="partyMember1"
                            id="partyMember1">
                            <Options />
                        </select>
                        <img
                            src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                            onClick={() => {
                                changePartyMember1();
                            }}
                        />
                    </div>
                    <div className="partyMemberChooser">
                        <label htmlFor="partyMember2">Party Member 2:</label>
                        <select
                            name="partyMember2"
                            id="partyMember2">
                            <Options />
                        </select>
                    </div>
                    <div className="partyMemberChooser">
                        <label htmlFor="partyMember3">Party Member 3:</label>
                        <select
                            name="partyMember3"
                            id="partyMember3">
                            <Options />
                        </select>
                    </div>
                    <div className="partyMemberChooser">
                        <label htmlFor="partyMember4">Party Member 4:</label>
                        <select
                            name="partyMember4"
                            id="partyMember4">
                            <Options />
                        </select>
                    </div>
                </div>
            </div>
            <div id="partyContainerContainer">
                <div id="partyContainer">
                    <PartyMember member={member1} />
                    <PartyMember member={member2} />
                    <PartyMember member={member3} />
                    <PartyMember member={member4} />
                </div>
            </div>
        </>
    );
}
