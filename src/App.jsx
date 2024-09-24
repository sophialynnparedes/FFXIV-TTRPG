import PartyMember from "./PartyMember";
import "./styles.scss";

export default function App() {
    return (
        <>
            <img id="background" src="background.webp" />
            <div id="columns">
                <PartyMember
                    name="Beverly Brothers"
                    image="BeveryBrothers.webp"
                    icon="Warrior.png"
                    HP={35}
                    role="war"
                />
                <PartyMember
                    name="Sage Turali"
                    image="SageTurali1.webp"
                    icon="BlackMage.png"
                    HP={21}
                    role="blm"
                />
                <PartyMember
                    name="???"
                    image="LakelandHuntress.webp"
                    icon="Bard.png"
                    HP={24}
                    role="brd"
                />
            </div>
        </>
    );
}
