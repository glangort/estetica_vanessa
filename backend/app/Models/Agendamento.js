'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Agendamento extends Model {
  clientes() {
    return this.belongsToMany('App/Models/Cliente');
  }
  user() {
    return this.hasOne('App/Models/User');
  }
}

module.exports = Agendamento;
