'use strict'

const Project = use('App/Models/Project')

class ProjectController {
    async index() {
        return await Project.all()
    }

    async show({params}) {
        const { id } = params
        return await Project.query()
                        .where('id', id)
                        .fetch()
    }

    async store({auth, request}) {
        const user = await auth.getUser()
        const {
            projectName,
            thickness,
            paperSpeed,
            topSpeed,
            bottomSpeed,
            fan1,
            fan2,
            ir1,
            ir2,
            ir3,
            ir4,
            ir5,
            ir6,
            ir7,
            ir8,
            ir9,
            ir10
        } = request.all()
        const project = new Project()
        project.fill({
            projectName,
            thickness,
            paperSpeed,
            topSpeed,
            bottomSpeed,
            fan1,
            fan2,
            ir1,
            ir2,
            ir3,
            ir4,
            ir5,
            ir6,
            ir7,
            ir8,
            ir9,
            ir10
        })
        await user.projects().save(project)
        return project
    }

    async destroy({ params }) {
        const { id } = params
        const project = await Project.find(id)
        await project.delete()
        return project
    }
}

module.exports = ProjectController
