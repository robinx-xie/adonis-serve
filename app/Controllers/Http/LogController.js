'use strict'

const Log = use('App/Models/Log')

class LogController {
    async show({ params }) {
        const { id, time } = params
        return await Log
            .query()
            .whereRaw('date(created_at) = ?', time)
            .andWhere('user_id', id)
            .fetch()
    }

    async store({auth, request}) {
        const user = await auth.getUser()
        const { content } = request.all()
        const log = new Log()
        log.fill({
            content
        })
        await user.logs().save(log)
        return log
    }
}

module.exports = LogController
