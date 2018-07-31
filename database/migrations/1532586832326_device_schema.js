'use strict'

const Schema = use('Schema')

class DeviceSchema extends Schema {
  up () {
    this.create('devices', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('type').references('type').inTable('device_back_ups')
      table.string('serialNumber', 80).notNullable().unique()
      table.string('alias', 80).nullable()
      table.string('status', 40).defaultTo('关机')
      table.timestamps()
    })
  }

  down () {
    this.drop('devices')
  }
}

module.exports = DeviceSchema
