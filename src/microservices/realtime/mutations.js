'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_REALTIME_BASE_URL;

module.exports = {
  createRealtimeInterestPoint: async (root, data) => {
    return await HttpProvider.postWithQuery(`${baseUrl}/interest_point`, data);
  },
};
