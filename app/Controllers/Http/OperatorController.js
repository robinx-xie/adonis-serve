'use strict'

const Operator = use('App/Models/Operator')

/**
 * Resourceful controller for interacting with operators
 */
class OperatorController {
  /**
   * Show a list of all operators.
   * GET operators
   */
  async index () {
    return await Operator.all()
  }
  /**
   * Render a form to be used for creating a new operator.
   * GET operators/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new operator.
   * POST operators
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single operator.
   * GET operators/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing operator.
   * GET operators/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update operator details.
   * PUT or PATCH operators/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a operator with id.
   * DELETE operators/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = OperatorController
