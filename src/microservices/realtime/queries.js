'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_REALTIME_BASE_URL;

module.exports = {
  getRealtimeInterestPoints: async (root, data) => {
    return await HttpProvider.get(`${baseUrl}/interest_point`, data);
  },
};
