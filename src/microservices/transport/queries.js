'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_TRANSPORT_BASE_URL;

module.exports = {
  allTransportes: async () => {
    return await HttpProvider.get(`${baseUrl}/transportes/`);
  },
  transporteById: async (root, { id }) => {
    await HttpProvider.get(`${baseUrl}/transportes/${id}/`);
  },
};
