'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_SOCIAL_BASE_URL;

module.exports = {
    createSocial: async (root, data) => {
        return await HttpProvider.post(`${baseUrl}/social/crear`, data);
    },
    deleteSocial: async (root, data) => {
        return await HttpProvider.deleted(`${baseUrl}/social/eliminar`, data);
    }
}