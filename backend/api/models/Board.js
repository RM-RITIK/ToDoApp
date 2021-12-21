/**
 * Board.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: "toDoBoard",
  attributes: {
    boardName: {
      type: 'string',
      required: true,
      columnName: 'board_name',
    },
    description: {
      type: 'string',
    }


  },

};

