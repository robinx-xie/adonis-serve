'use strict'

const Schema = use('Schema')

class DeviceBackUpSchema extends Schema {
  up () {
    this.create('device_back_ups', (table) => {
      table.increments()
      table.string('serialNumber', 80).notNullable().unique()
      table.string('password', 80).notNullable().unique()
      table.string('type', 20).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('device_back_ups')
  }
}

module.exports = DeviceBackUpSchema
