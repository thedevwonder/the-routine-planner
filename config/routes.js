/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  '/': { view: 'pages/homepage' },
  'POST /task/create': {
    controller: 'TaskController',
    action: 'createTask',
    skipAssets: true,
  },
  'PUT /task/update': {
    controller: 'TaskController',
    action: 'editTask',
    skipAssets: true,
  },
  'GET /task/get/:id': {
    controller: 'TaskController',
    action: 'getTaskDetails',
    skipAssets: true,
  },
  'DELETE /task/delete': {
    controller: 'TaskController',
    action: 'deleteTask',
    skipAssets: true,
  },
};
