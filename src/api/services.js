import API from '.';

const AppServices = {
  async fetchMyProfile() {
    return await API.get('/me');
  },
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
    return await API.get(`photos/${id}`);
  },
  async fetchLikedPhotos(username) {
    return await API.get(`users/${username}/likes`);
  },
  async likePhoto(id) {
    return await API.post(`photos/${id}/like`);
  },
  async unLikePhoto(id) {
    return await API.delete(`photos/${id}/like`);
  },
  async searchPhotos(query) {
    return await API.get(`search/photos?query=${query}`);
  },
};

export default AppServices;
