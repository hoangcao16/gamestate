import apiClient from 'services/apiService';

export const apiGetListQA = () =>
  apiClient.get(
    `https://api.gamestate.one/api/token-metadata/quantum-accelerator/all`,
  );
export const apiNftDetail = uri => apiClient.get(uri);
export const apiNftDetailByID = id =>
  apiClient.get(`https://api.gamestate.one/api/token-metadata/wearable/${id}`);
