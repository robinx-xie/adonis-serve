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
  Route.post('/auth/register', 'UserController.register') // 注册
  Route.post('/auth/login', 'UserController.login') // 登录

  Route.get('/logs/:id/:time', 'LogController.show').middleware('auth') // 通过id获取历史记录
  Route.post('/logs', 'LogController.store').middleware('auth') // 储存历史记录
  // Route.get('/logs/:id', 'LogController.show').middleware('auth') // 通过id获取历史记录

  Route.get('/projects', 'ProjectController.index').middleware('auth') // 获取涂布方案
  Route.get('/projects/:id', 'ProjectController.show').middleware('auth') // 获取涂布方案
  Route.post('/projects', 'ProjectController.store').middleware('auth') // 储存涂布方案
  Route.delete('/projects/:id', 'ProjectController.destroy').middleware('auth') // 储存涂布方案
})
  .prefix('api')
