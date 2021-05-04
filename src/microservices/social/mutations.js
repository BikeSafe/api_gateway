'use strict';

const { HttpProvider } = require('../../providers');
const fetch = require('node-fetch');

const baseUrl = process.env.MS_SOCIAL_BASE_URL;

const headers = new fetch.Headers({'content-type': 'application/json'});


module.exports = {
    createSocial: async (root, {data}) => {
        return await new Promise((resolve, reject) => {
            fetch(`${baseUrl}/social/crear`,{method: 'POST', body: JSON.stringify(data), headers:headers})
            .then(res => resolve(res.json()))
            .catch(error => reject(error));
        });
    },
    deleteSocial: async (root, {data}) => {
        return await new Promise((resolve, reject) => {
            fetch(`${baseUrl}/social/eliminar`,{method: 'DELETE', body: JSON.stringify(data), headers:headers})
            .then(res => resolve(res.json()))
            .catch(error => reject(error));
        });
    },
    verifySocial: async (root, {data}) => {
        return await new Promise((resolve, reject) => {
            fetch(`${baseUrl}/social/verificar`,{method: 'POST', body: JSON.stringify(data), headers:headers})
            .then(res => resolve(res.json()))
            .catch(error => reject(error));
        });
    }
}