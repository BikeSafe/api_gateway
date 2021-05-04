'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_JOINT_ROUTES_BASE_URL;

module.exports = {
  // Coordinate
  getCoordinateById: async (root, {data}) => {
    return await HttpProvider.get(`${baseUrl}/coordinate`, data);
  },
  // User
  getUserById: async (root, {data}) => {
    return await HttpProvider.get(`${baseUrl}/user`, data);
  },
  // Route
  getRouteById: async (root, { routeId }) => {
    return await HttpProvider.get(`${baseUrl}/route/${routeId}`);
  },
  getPublicRoutes: async () => {
    return await HttpProvider.get(`${baseUrl}/route/public`);
  },
};
