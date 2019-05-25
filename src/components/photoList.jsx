import React from 'react';
import Album  from '../services/album.js';

class PhotoList extends React.Component {

  constructor (props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { albums: [] };

    this.albumModel = new Album();    
  }

  componentDidMount() {
    this.albumModel.getMostRecent()
      .then((albums) => {
        this.setState({ albums })
      });
  }

  render() {
    const albums = this.state.albums.map((album, key) => {
      const photos = album.map((photo, index) => {
        return <article className="album-content" key={index}>
          <img className="album-image" src={photo.thumbnailUrl}/>
          <a href={photo.url}><h2 className="album-title">{photo.title}</h2></a>
        </article>
      })
      return <section key={key} className="album-container">{photos}</section>
    })
    return <main className="album-wrapper">{albums}</main>;
  }
};

export default PhotoList;
