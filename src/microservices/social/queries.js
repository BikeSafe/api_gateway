'use strict';

const { HttpProvider } = require('../../providers');
const fetch = require('node-fetch');

const baseUrl = process.env.MS_SOCIAL_BASE_URL;

module.exports = {
    findSeguidores: async (root, {seguido}) => {
        return await new Promise((resolve, reject) => {
            fetch(`${baseUrl}/social/seguidores/${seguido}`,{method: 'GET'})
            .then(res => resolve(res.json()))
            .catch(error => console.log(error));
        });
    },
    findSeguidos: async (root, {seguidor}) => {
        return await new Promise((resolve, reject) => {
            fetch(`${baseUrl}/social/seguidos/${seguidor}`,{method: 'GET'})
            .then(res => resolve(res.json()))
            .catch(error => reject(error));
        });
    }
}