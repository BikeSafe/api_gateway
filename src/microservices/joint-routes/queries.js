'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_JOINT_ROUTES_BASE_URL;

module.exports = {
  getAllJoinRoutes: async () => {
    return await HttpProvider.get(`${baseUrl}/routes`);
  },
  getJoinRouteById: async (root, { id }) => {
    return await HttpProvider.get(`${baseUrl}/routes/${id}`);
  },
};
