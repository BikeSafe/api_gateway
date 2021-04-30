'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_JOINT_ROUTES_BASE_URL;

module.exports = {
  createJoinRoute: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/routes`, data);
  },
  updateJoinRoute: async (root, { id, data }) => {
    return await HttpProvider.put(`${baseUrl}/routes/${id}`, data);
  },
  deleteJoinRoute: async (root, { id }) => {
    return await HttpProvider.deleted(`${baseUrl}/routes/${id}`);
  },
};
