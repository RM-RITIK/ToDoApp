module.exports = {


  friendlyName: 'Get all',


  description: '',


  inputs: {

  },


  exits: {
    success: {
      version: 'v1',
      status: true,
      statusCode: 200,
      details: 'OK',
      statusMessage: 'success',
      description: "All boards were retrieved successflly",
    },
    operationalError: {
      version: 'v1',
      status: true,
      statusCode: 400,
      details: 'BAD REQUEST',
      statusMessage: 'error',
      description: 'The request was formed properly',
      errorCode: 'RESPONSE_STATUS_CODE_BAD_REQUEST',
    },

  },


  fn: async function (inputs, exits) {
    try {
      var boards = await Board.find({});
      var boardsWithItems = [];
      for(let i = 0; i<boards.length; i++){
        var boardItems = await Boarditem.find({boardId: boards[i].id});
        boardsWithItems.push({
          board: boards[i],
          boardItems: boardItems
        });
      }

      return exits.success({
        version: 'v1',
        status: true,
        statusCode: 200,
        details: 'OK',
        statusMessage: 'success',
        description: 'A new board has been created',
        response: {
          message: `All boards were retrieved successfully`,
          data: boardsWithItems,
        },
      });

    }
    catch(error){
      return exits.operationalError({
        version: 'v1',
        status: true,
        statusCode: 400,
        details: 'BAD REQUEST',
        statusMessage: 'error',
        description: 'The request was formed properly',
        response: {
          message: 'Oops :) an error occured',
          error: error.message,
        },
        errorCode: 'RESPONSE_STATUS_CODE_BAD_REQUEST',
      });

    }
    

  }


};
