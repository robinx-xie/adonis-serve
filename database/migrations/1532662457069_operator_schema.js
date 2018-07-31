'use strict'

const Schema = use('Schema')

class OperatorSchema extends Schema {
  up () {
    this.create('operators', (table) => {
      table.increments()
      table.string('username', 40).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('operators')
  }
}

module.exports = OperatorSchema
