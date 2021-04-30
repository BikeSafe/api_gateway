'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_USER_BASE_URL;

module.exports = {
  getAllUsers: async (root, { token }) => {
    return await HttpProvider.get(`${baseUrl}/usuario/usuario`, {}, token);
  },
  getUserById: async (root, { token, id }) => {
    return await HttpProvider.get(
      `${baseUrl}/usuario/usuario/${id}`,
      {},
      token
    );
  },
  getAllUserData: async (root, { token }) => {
    return await HttpProvider.get(`${baseUrl}/usuario/dato`, {}, token);
  },
  getUserDataById: async (root, { token, id }) => {
    return await HttpProvider.get(`${baseUrl}/usuario/dato/${id}`, {}, token);
  },
  getAllFollowersByUser: async (root, { token, id }) => {
    return await HttpProvider.get(
      `${baseUrl}/usuario/seguidores/${id}`,
      {},
      token
    );
  },
  getAllFollowedByUser: async (root, { token, id }) => {
    return await HttpProvider.get(
      `${baseUrl}/usuario/seguidos/${id}`,
      {},
      token
    );
  },
};
