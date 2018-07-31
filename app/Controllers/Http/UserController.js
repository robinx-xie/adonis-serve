'use strict'

const User = use('App/Models/User')

class UserController {
    async index() {
        return await User.all()
    }

    async login({ request, auth }) {
        const { username, password } = request.all()
        const token = await auth.attempt(username, password)
        return token
    }

    async register({ request }) {
        const { username, password } = request.all()
        await User.create({
            username: username,
            password: password
        })
        return this.login(...arguments)
    }

    async logout({ auth }) {
        await auth.logout()
    }
}

module.exports = UserController
