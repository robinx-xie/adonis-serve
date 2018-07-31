'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.group(() => {
  Route.get('/auth/index', 'UserController.index')
  Route.post('/auth/login', 'UserController.login')
  Route.post('/auth/register', 'UserController.register')

  Route.get('/devices', 'DeviceController.index')
  Route.post('/devices', 'DeviceController.store')

  Route.get('/backup', 'DeviceBackUpController.index')
  Route.post('/backup', 'DeviceBackUpController.store')
})
  .prefix('api')
