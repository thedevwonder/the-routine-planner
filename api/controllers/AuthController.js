/* eslint-disable camelcase */

const { google } = require('googleapis');

/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  auth : new google.auth.OAuth2(
        {
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          redirectUri: process.env.REDIRECT_URI
        }
  ),
  getOAuthUrl: async (req, res) => {
    try {

      const scopes = [
        'https://www.googleapis.com/auth/blogger',
        'https://www.googleapis.com/auth/calendar'
      ];

      const url = this.auth.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',

        // If you only need one scope you can pass it as a string
        scope: scopes
      });
      return res.redirect('//'+url);
    } catch (error) {
      return res.send(error);
    }
  },

  oauthCallBack: async (req, res) => {
    try {
      const {code} = req.query;

      const {tokens} = await this.auth.getToken(code);

      this.auth.setCredentials(tokens);

      return this.auth;


    } catch (error) {
      return res.send(error);
    }
  },

};

