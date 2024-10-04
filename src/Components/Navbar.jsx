import { Link } from "wouter";
import { logout } from "../firebase";

export default function Navbar() {
    var isPlaying = false;
    var currentMusicSelection = null;

    function playMusic() {
        var musicSelection = document.getElementById("music").value;
        if (isPlaying) {
            document.querySelectorAll("audio").forEach((el) => el.pause());
            if (musicSelection != currentMusicSelection) {
                document.getElementById(musicSelection).currentTime = 0;
                document.getElementById(musicSelection).play();
                currentMusicSelection = musicSelection;
            } else {
                isPlaying = !isPlaying;
            }
        } else {
            if (musicSelection != currentMusicSelection) {
                document.getElementById(musicSelection).currentTime = 0;
                document.querySelectorAll("audio").forEach((el) => el.pause());
            }
            document.getElementById(musicSelection).play();
        }
    }

    return (
        <>
            <div id="navbar">
                <div id="musicContainer">
                    <img src="public\FFXIVIcons MainCommand (Others)\00_Perform\harp.png" />
                    <h2>Music</h2>
                    <div id="musicSelector">
                        <select name="music" id="music">
                            <option value="A New Hope">
                                A New Hope - Theme of Ul&apos;dah
                            </option>
                            <option value="To the Sun">
                                To the Sun - Theme of Thanalan
                            </option>
                        </select>

                        <audio
                            src="public\Music\A New Hope.mp3"
                            id="A New Hope"
                        />
                        <audio
                            src="public\Music\To the Sun.mp3"
                            id="To the Sun"
                        />
                    </div>
                    <button
                        id="playButton"
                        className="navbarButton"
                        onClick={() => {
                            playMusic();
                        }}>
                        <h2>&#x23EF;</h2>
                    </button>
                </div>
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
                    <img src="public\FFXIVIcons MainCommand (Others)\03_MainCommands\01\companions.png" />
                    <h2>NPCs</h2>
                </Link>
                <button
                    className="navbarButton"
                    onClick={() => {
                        logout();
                    }}>
                    <img src="public\FFXIVIcons MainCommand (Others)\03_MainCommands\07\log_out.png" />
                    <h2>Sign Out</h2>
                </button>
            </div>
        </>
    );
}
