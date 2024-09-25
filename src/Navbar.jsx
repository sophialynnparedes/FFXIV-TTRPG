import { Link } from "wouter";

export default function Navbar() {
    return (
        <>
            <div id="navbar">
                <Link className="link" href="/story">
                    <img src="public\FFXIVIcons MainCommand (Others)\03_MainCommands\02\journal.png" />
                    <h2>Story</h2>
                </Link>
                <Link className="link" href="/party">
                    <img src="public\FFXIVIcons MainCommand (Others)\03_MainCommands\01\character.png" />
                    <h2>Party</h2>
                </Link>
                <Link className="link" href="/enemies">
                    <img src="public\FFXIVIcons MainCommand (Others)\01_Orders\02\engage.png" />
                    <h2>Enemies</h2>
                </Link>
                <Link className="link" href="NPCs">
                    <img src="public\FFXIVIcons MainCommand (Others)\03_MainCommands\01\companions.png"/><h2>NPCs</h2></Link>
            </div>
        </>
    );
}
