"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_ACCOUNT_BASE_URL;

module.exports = {
  login: async (root, { data }) => {
    return await HttpProvider.post(`${baseUrl}/login`, data);
  },
  logout: async (root, { token }) => {
    return await HttpProvider.postGeneral(`${baseUrl}/logout`, {}, token);
  },
};
