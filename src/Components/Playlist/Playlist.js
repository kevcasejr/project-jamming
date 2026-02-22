import React from "react";

import './Playlist.css';

import { TrackList } from "../TrackList/TrackList";

export function PlayList () {
    
    return (
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            <TrackList 
            
            />
            <button className="Playlist-save">
                SAVE TO SPOTIFY
            </button>
        </div>
    )
}