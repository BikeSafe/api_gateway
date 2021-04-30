'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_TRANSPORT_BASE_URL;

module.exports = {
  createTransporte: async (root, { transporte }) => {
    return await HttpProvider.post(`${baseUrl}/transportes/`, transporte);
  },
  updateTransporte: async (root, { id, transporte }) => {
    return await HttpProvider.put(`${baseUrl}/transportes/${id}/`, transporte);
  },
  deleteTransporte: async (root, { id }) => {
    return await HttpProvider.deleted(`${baseUrl}/transportes/${id}/`);
  },
};
