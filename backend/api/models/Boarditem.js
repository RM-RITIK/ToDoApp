/**
 * Boarditem.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'board_items',
  attributes: {
    boardId: {
      type: 'number',
      required: true,
      columnName: 'board_id'
    },
    itemText: {
      type: 'string',
      required: true,
      columnName: 'item_text'
    },
    isCompleted: {
      type: 'boolean',
      defaultsTo: false
    },

    
  },

};

