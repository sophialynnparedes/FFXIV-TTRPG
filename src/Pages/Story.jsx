import { useEffect, useState } from "react";

export default function Story() {
    const [location, setLocation] = useState(localStorage["myLocation"]);
    const [character, setCharacter] = useState(localStorage["myCharacter"]);

    useEffect(() => {
        document.getElementById("storyScene").style.backgroundImage = location;
        localStorage["myLocation"] = location;
    }, [location]);

    useEffect(() => {
        localStorage["myCharacter"] = character;
    }, [character]);

    function chooseLocation() {
        var chosenLocation = document.getElementById("location").value;
        setLocation(chosenLocation);
    }

    function chooseCharacter() {
        var chosenCharacter = document.getElementById("character").value;
        setCharacter(chosenCharacter);
    }

    return (
        <>
            <div id="storySelector">
                <div id="locationSelector">
                    <label htmlFor="location">Location:</label>
                    <select
                        name="location"
                        id="location">
                        <option value="none">None</option>
                        <option value="url(../../public/Locations/TheRoadToUldah.webp)">
                            The Road to Ul&apos;dah
                        </option>
                        <option value="url(../../public/Locations/Uldah.webp)">
                            Ul&apos;dah
                        </option>
                        <option value="url(../../public/Locations/SapphireExchangeAvenue.webp)">
                            Sapphire Exchange Avenue
                        </option>
                        <option value="url(../../public/Locations/OutsideTheQuicksand.webp)">
                            Outside the Quicksand
                        </option>
                        <option value="url(../../public/Locations/TheQuicksand.jpg)">
                            The Quicksand
                        </option>
                        <option value="url(../../public/Locations/CentralThanalan.webp)">
                            Central Thanalan
                        </option>
                        <option value="url(../../public/Locations/BlackBrushStation.png)">
                            Black Brush Station
                        </option>
                        <option value="url(../../public/Locations/TheRoadToTheClutch.webp)">
                            The Road to the Clutch
                        </option>
                        <option value="url(../../public/Locations/Stonesthrow.webp)">
                            Stonesthrow
                        </option>
                        <option value="url(../../public/Locations/TheBonfire.webp)">
                            The Bonfire
                        </option>
                        <option value="url(../../public/Locations/TheClutch.webp)">
                            The Clutch
                        </option>
                    </select>
                    <img
                        src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                        onClick={() => {
                            chooseLocation();
                        }}
                    />
                </div>
                <div id="characterSelector">
                    <label htmlFor="character">Character:</label>
                    <select
                        name="character"
                        id="character">
                        <option value="none">None</option>
                        <option value="public\Characters\Black Brush Station Worker 1.webp">
                            Black Brush Station Worker
                        </option>
                        <option value="public\Characters\Farmer.webp">
                            Royal Plantation Farmer
                        </option>
                        <option value="public\Characters\Mineral Transporter.webp">
                            Mineral Transporter
                        </option>
                        <option value="public\Characters\Momodi.webp">
                            Momodi Modi
                        </option>
                    </select>
                    <img
                        src="public\FFXIVIcons MainCommand (Others)\02_General\target_forward.png"
                        onClick={() => {
                            chooseCharacter();
                        }}
                    />
                </div>
            </div>
            <div id="storySceneContainer">
                <div id="storyScene">
                    <img
                        id="currentCharacter"
                        src={character}
                    />
                </div>
            </div>
        </>
    );
}
