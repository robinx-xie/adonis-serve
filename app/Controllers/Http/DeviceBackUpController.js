'use strict'

const DeviceBackUp = use('App/Models/DeviceBackUp')
/**
 * Resourceful controller for interacting with devicebackups
 */
class DeviceBackUpController {
  /**
   * Show a list of all devicebackups.
   * GET devicebackups
   */
  async index ({ request, response, view }) {
    return await DeviceBackUp.all()
  }

  /**
   * Render a form to be used for creating a new devicebackup.
   * GET devicebackups/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new devicebackup.
   * POST devicebackups
   */
  async store ({ request }) {
    const { serialNumber, password, type } = request.all()
    const device = new DeviceBackUp()
    device.fill({
      serialNumber,
      password,
      type
    })
    await device.save()
    return device
  }

  /**
   * Display a single devicebackup.
   * GET devicebackups/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing devicebackup.
   * GET devicebackups/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update devicebackup details.
   * PUT or PATCH devicebackups/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a devicebackup with id.
   * DELETE devicebackups/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = DeviceBackUpController
