import { useEffect, useState } from "react";
import DefaultPartyMembers from "../DefaultPartyMembers.json";
import PartyMember from "../Components/PartyMember";

export default function Party() {
    const [member1, setMember1] = useState(DefaultPartyMembers[0]);
    const [member2, setMember2] = useState(DefaultPartyMembers[1]);
    const [member3, setMember3] = useState(DefaultPartyMembers[2]);
    const [member4, setMember4] = useState(DefaultPartyMembers[3]);

    const Options = () => {
        return (
            <>
                <option value={null}>None</option>
                <option value={"Lv. 30 Warrior"}>Level 30 Warrior</option>
                <option value={"Lv. 30 Black Mage"}>Level 30 Black Mage</option>
                <option value={"Lv. 30 Bard"}>Level 30 Bard</option>
                <option value={"Lv. 30 White Mage"}>Level 30 White Mage</option>
            </>
        );
    };

    useEffect(() => {
        setMember1(
            DefaultPartyMembers.find((i) => i.name === localStorage["member1"])
        );
        setMember2(
            DefaultPartyMembers.find((i) => i.name === localStorage["member2"])
        );
        setMember3(
            DefaultPartyMembers.find((i) => i.name === localStorage["member3"])
        );
        setMember4(
            DefaultPartyMembers.find((i) => i.name === localStorage["member4"])
        );
    });

    const changePartyMember1 = () => {
        var chosenMember = document.getElementById("partyMember1").value;
        localStorage["member1"] = chosenMember;
        setMember1(DefaultPartyMembers.find((i) => i.name === chosenMember));
    };

    const changePartyMember2 = () => {
        var chosenMember = document.getElementById("partyMember2").value;
        localStorage["member2"] = chosenMember;
        setMember2(DefaultPartyMembers.find((i) => i.name === chosenMember));
    };
    const changePartyMember3 = () => {
        var chosenMember = document.getElementById("partyMember3").value;
        localStorage["member3"] = chosenMember;
        setMember3(DefaultPartyMembers.find((i) => i.name === chosenMember));
    };
    const changePartyMember4 = () => {
        var chosenMember = document.getElementById("partyMember4").value;
        localStorage["member4"] = chosenMember;
        setMember4(DefaultPartyMembers.find((i) => i.name === chosenMember));
    };

    const healParty = () => {
        localStorage["currentHP1"] = member1.maxHP;
        localStorage["currentHP2"] = member2.maxHP;
        localStorage["currentHP3"] = member3.maxHP;
        localStorage["currentHP4"] = member4.maxHP;
        location.reload();
    };

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
                            onClick={changePartyMember1}
                        />
                    </div>
                    <div className="partyMemberChooser">
                        <label htmlFor="partyMember2">Party Member 2:</label>
                        <select
                            name="partyMember2"
                            id="partyMember2">
                            <Options />
                        </select>
                        <img
                            src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                            onClick={changePartyMember2}
                        />
                    </div>
                    <div className="partyMemberChooser">
                        <label htmlFor="partyMember3">Party Member 3:</label>
                        <select
                            name="partyMember3"
                            id="partyMember3">
                            <Options />
                        </select>
                        <img
                            src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                            onClick={changePartyMember3}
                        />
                    </div>
                    <div className="partyMemberChooser">
                        <label htmlFor="partyMember4">Party Member 4:</label>
                        <select
                            name="partyMember4"
                            id="partyMember4">
                            <Options />
                        </select>
                        <img
                            src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                            onClick={changePartyMember4}
                        />
                    </div>
                    <img
                        src="public\FFXIVIcons Battle(PvP)\01_PLD\Common_Actions\Standard-issue_Elixir.png"
                        onClick={healParty}
                    />
                </div>
            </div>
            <div id="partyContainerContainer">
                <div id="partyContainer">
                    <PartyMember
                        position={1}
                        member={member1}
                    />
                    <PartyMember
                        position={2}
                        member={member2}
                    />
                    <PartyMember
                        position={3}
                        member={member3}
                    />
                    <PartyMember
                        position={4}
                        member={member4}
                    />
                </div>
            </div>
        </>
    );
}
