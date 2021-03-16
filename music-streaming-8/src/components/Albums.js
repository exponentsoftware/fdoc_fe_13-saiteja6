import React from 'react'
// import Album from './Album'

export default function Albums(props) {
    // console.log(props);
    return (
        <div class='container'>
{props.albums.map(album => {
    return( <ul>
                    <img alt="example" src={album.album_cover} width="300" height="270" />
                    <li key="{album}">{album.id}</li>
                    <li>{album.artist}</li>
                    <li>{album.album_title}</li>
                    {/* <li>{album.album_cover}</li> */}


                    </ul> )})}
        </div>
    )
    }

