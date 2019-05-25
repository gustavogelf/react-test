import _ from 'lodash';
import axios from 'axios';

class Album {
  get() {
    return axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/photos'
    });
  }

  getMostRecent() {
    return this.get().then((response) => {
      let albumList = _.groupBy(response.data, (album) => {
        return album.albumId
      });

      _.forEach(albumList, (list, id) => {
        return albumList[id] = list.splice(list.length - 2);
      });

      albumList = _.values(albumList);

      return albumList.splice(albumList.length - 3);
    });
  }
}

export default Album;
