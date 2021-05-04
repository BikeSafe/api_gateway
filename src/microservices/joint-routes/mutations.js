'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_JOINT_ROUTES_BASE_URL;

module.exports = {
  // Coordinate
  createCoordinate: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/coordinate`, data);
  },
  updateCoordinate: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/coordinate`, data);
  },
  deleteCoordinateById: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/coordinate`, data);
  },
  // User
  createUser: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/user`, data);
  },
  updateUset: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/user`, data);
  },
  deleteUser: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/user`, data);
  },
  // Route
  createRoute: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/route`, data);
  },
  qualifyRoute: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/route`, data);
  },
  addMemberRoute: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/route`, data);
  },
  deleteMemberRoute: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/route`, data);
  },
  deleteRoute: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/route`, data);
  },
};
