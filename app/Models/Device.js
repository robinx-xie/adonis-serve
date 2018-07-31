'use strict'

const Model = use('Model')

class Device extends Model {
    user () {
        return this.belongsTo('App/Models/User')
    }

    operators () {
        return this.hasMany('App/Models/Operator')
    }
}

module.exports = Device
