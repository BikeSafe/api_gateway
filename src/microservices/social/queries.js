'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_SOCIAL_BASE_URL;

module.exports = {
    findSeguidores: async (root, seguido) => {
        return await HttpProvider.get(`${baseUrl}/social/seguidores/${seguido}`);
    },
    findSeguidos: async (root, seguidor) => {
        return await HttpProvider.get(`${baseUrl}/social/seguidos/${seguidor}`);
    },
    verifySocial: async (root, data) => {
        return await HttpProvider.get(`${baseUrl}/social/verificar`, data);
    }
}