'use strict'

const Device = use('App/Models/Device')
const Database = use('Database')
const DeviceBackUp = use('App/Models/DeviceBackUp')
/**
 * Resourceful controller for interacting with devices
 */
class DeviceController {
  /**
   * Show a list of all devices.
   * GET devices
   */
  async index ({ auth }) {
    const user = await auth.getUser()
    return await Database.table('devices').where('user_id', user.id)
  }

  /**
   * Create/save a new device.
   * POST devices
   */
  async store ({ request, auth }) {
    const user = await auth.getUser()
    const { serialNumber, password } = request.all()

    const data = await DeviceBackUp
      .findBy('serialNumber', serialNumber)

    if(!data){
      return{
        msg: '设备序列号不存在。'
      }
    }
    if(password !== data['password']){
      return {
        msg: '密码错误。'
      }
    }

    const device = new Device()
    device.fill({
      serialNumber,
      type: data['type']
    })
    await user.devices().save(device)
    return device
  }

  /**
   * Display a single device.
   * GET devices/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Delete a device with id.
   * DELETE devices/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = DeviceController
