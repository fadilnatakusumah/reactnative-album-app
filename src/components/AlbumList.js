// like usual import the react component
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor() {
        super();
        this.state = {
            albums: []
        };
    }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({ albums: res.data }));
    }

    renderAlbums = () => {
        return this.state.albums.map((album, i) =>
            <AlbumDetail
                key={i}
                title={album.title}
                artist={album.artist}
                url={album.url}
                image={album.image}
                thumbnailImage={album.thumbnail_image}
            />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}


export default AlbumList;
