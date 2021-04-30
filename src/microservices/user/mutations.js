'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_USER_BASE_URL;

const generateBasicToken = function (user, password) {
  const key = `${user}:${password}`;
  let buff = new Buffer(key);
  let base64data = buff.toString('base64');
  return `Basic ${base64data}`;
};

module.exports = {
  generateUserToken: async (root, { token, data }) => {
    return await HttpProvider.postWithQuery(`${baseUrl}/oauth/token`, data, {}, generateBasicToken('front', '12345'));
  },
  createUser: async (root, { token, data }) => {
    return await HttpProvider.post(`${baseUrl}/usuario/usuario`, data, token);
  },
  deleteUser: async (root, { token, id }) => {
    return await HttpProvider.deleted(`${baseUrl}/usuario/usuario/${id}`,{}, token);
  },
  createUserData: async (root, { token, data }) => {
    return await HttpProvider.post(`${baseUrl}/usuario/dato`, data, token);
  },
  updateUserData: async (root, { token, id, data }) => {
    return await HttpProvider.put(`${baseUrl}/usuario/dato/${id}`, data, token);
  },
  setFollower: async (root, { token, id, id2 }) => {
    return await HttpProvider.post(`${baseUrl}/usuario/seguidor/${id}/${id2}`, {}, token);
  },
};
