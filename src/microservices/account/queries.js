"use strict";

const { HttpProvider } = require("../../providers");

const baseUrl = process.env.MS_ACCOUNT_BASE_URL;

module.exports = {
  getUsers: async () => {
    return await HttpProvider.getGeneral(`${baseUrl}/users`, {});
  },
  getProfile: async (root, { token }) => {
    return await HttpProvider.getGeneral(`${baseUrl}/profile`, {}, token);
  },
  isAuth: async (root, { token }) => {
    return await HttpProvider.getGeneral(`${baseUrl}/isauth`, {}, token);
  },
};
