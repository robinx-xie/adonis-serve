'use strict'

const Model = use('Model')

class Operator extends Model {
    device () {
        return this.belongsTo('App/Models/Device')
    }
}

module.exports = Operator
