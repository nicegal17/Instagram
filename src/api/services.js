import API from '.';

const AppServices = {
  async fetchAllPhotos() {
    return await API.get('photos?per_page=50');
  },
  async fetchUserInfo(username) {
    return await API.get(`users/${username}`);
  },
  async fetchUserPhotos(username) {
    return await API.get(`users/${username}/photos`);
  },
  async fetchPhoto(id) {
    console.log('ID: ', id)
    return await API.get(`photos/${id}`);
  },
};

export default AppServices;
