'use strict'

const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.create('projects', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('projectName', 40).notNullable().unique()
      table.string('thickness', 20).notNullable()
      table.integer('paperSpeed').notNullable()
      table.integer('topSpeed').notNullable()
      table.integer('bottomSpeed').notNullable()
      table.integer('fan1').notNullable()
      table.integer('fan2').notNullable()
      table.integer('ir1').notNullable()
      table.integer('ir2').notNullable()
      table.integer('ir3').notNullable()
      table.integer('ir4').notNullable()
      table.integer('ir5').notNullable()
      table.integer('ir6').notNullable()
      table.integer('ir7').notNullable()
      table.integer('ir8').notNullable()
      table.integer('ir9').notNullable()
      table.integer('ir10').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('projects')
  }
}

module.exports = ProjectSchema
