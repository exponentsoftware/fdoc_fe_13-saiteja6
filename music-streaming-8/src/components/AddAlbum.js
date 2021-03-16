import React from 'react'

export default class AddAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            album_title: '',
            artist: ''
        }
    }

    handleChange = (e) => {

    }

    render() {
    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='album_title'
                    value={this.state.album_title}
                    onChange={this.handleChange}
                    >
                </input>
                <input
                    type='text'
                    placeholder='aritst'
                    value={this.state.artist}
                    onChange={this.handleChange}
                    >
                </input>
            </form>
        </div>
    )
    }
}
